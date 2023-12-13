"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94368],
 {
  17031: (e, t, n) => {
   n.r(t), n.d(t, { default: () => be });
   var a = n(50959),
    i = n(5341),
    o = n(44616),
    s = n(15116),
    r = n(78193),
    l = n(63059),
    d = n(77289),
    c = n(53583),
    u = n(61683);
   const h = { backToTopButton: "backToTopButton_hZqM", backToTopButtonShow: "backToTopButtonShow_kWGN" };
   var b = n(11527);
   function m() {
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
    return (0, b.jsx)("button", { "aria-label": (0, d.I)({ id: "theme.BackToTopButton.buttonAriaLabel", message: "Scroll back to top", description: "The ARIA label for the back to top button" }), className: (0, i.Z)("clean-btn", s.k.common.backToTopButton, h.backToTopButton, e && h.backToTopButtonShow), type: "button", onClick: t });
   }
   var p = n(21967),
    x = n(28903),
    _ = n(25581),
    g = n(85849),
    v = n(32275),
    k = n(37038),
    j = n(90248);
   const f = Symbol("EmptyContext"),
    C = a.createContext(f);
   function I(e) {
    let { children: t } = e;
    const [n, i] = (0, a.useState)(null),
     o = (0, a.useMemo)(() => ({ expandedItem: n, setExpandedItem: i }), [n]);
    return (0, b.jsx)(C.Provider, { value: o, children: t });
   }
   var N = n(34018),
    S = n(62384),
    T = n(53948),
    y = n(16532),
    Z = n(349),
    w = (0, Z.Z)("chevron-down", "IconChevronDown", [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]]),
    L = (0, Z.Z)("chevron-up", "IconChevronUp", [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]]);
   function M(e) {
    let { categoryLabel: t, collapsed: n, onClick: a } = e;
    return (0, b.jsx)(y.zx, { appearance: "subtle-button", "aria-label": (0, d.I)({ id: "theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel", message: "Toggle the collapsible sidebar category '{label}'", description: "The ARIA label to toggle the collapsible sidebar category" }, { label: t }), type: "button", className: "clean-btn", onClick: a, children: (0, b.jsx)(y.JO, { children: n ? (0, b.jsx)(w, {}) : (0, b.jsx)(L, {}) }) });
   }
   function A(e) {
    let { item: t, onItemClick: n, activePath: o, level: l, index: d, ...c } = e;
    const { items: u, label: h, collapsible: m, className: p, href: x } = t,
     _ = "sidebar__main-category" === p,
     {
      docs: {
       sidebar: { autoCollapseCategories: v },
      },
     } = (0, g.L)(),
     k = (function (e) {
      const t = (0, T.Z)();
      return (0, a.useMemo)(() => (e.href ? e.href : !t && e.collapsible ? (0, r.LM)(e) : void 0), [e, t]);
     })(t),
     I = (0, r._F)(t, o),
     { collapsed: y, setCollapsed: Z } = (0, N.u)({ initialState: () => !!m && !I && t.collapsed }),
     { expandedItem: w, setExpandedItem: L } = (function () {
      const e = (0, a.useContext)(C);
      if (e === f) throw new j.i6("DocSidebarItemsExpandedStateProvider");
      return e;
     })(),
     A = function (e) {
      void 0 === e && (e = !y), L(e ? null : d), Z(e);
     };
    return (
     (function (e) {
      let { isActive: t, collapsed: n, updateCollapsed: i } = e;
      const o = (0, j.D9)(t);
      (0, a.useEffect)(() => {
       t && !o && n && i(!1);
      }, [t, o, n, i]);
     })({ isActive: I, collapsed: y, updateCollapsed: A }),
     (0, a.useEffect)(() => {
      m && null != w && w !== d && v && Z(!0);
     }, [m, w, d, Z, v]),
     (0, b.jsxs)("li", {
      className: (0, i.Z)(s.k.docs.docSidebarItemCategory, s.k.docs.docSidebarItemCategoryLevel(l), "menu__list-item", { "menu__list-item--collapsed": y }),
      children: [
       (0, b.jsxs)("div", {
        className: (0, i.Z)("menu__list-item-collapsible", { "sidebar__main-category": _ }),
        children: [
         _ ? h : (0, b.jsx)(S.Z, { className: (0, i.Z)("menu__link", "utrecht-link", { "menu__link--sublist": m, "menu__link--sublist-caret": !x && m }), href: m ? k ?? "#" : k, ...c, children: h }),
         x &&
          m &&
          (0, b.jsx)(M, {
           categoryLabel: h,
           onClick: (e) => {
            e.preventDefault(), A();
           },
           collapsed: y,
          }),
        ],
       }),
       (0, b.jsx)(N.z, { lazy: !0, as: "ul", className: "menu__list", collapsed: y, children: (0, b.jsx)(D, { items: u, tabIndex: y ? -1 : 0, onItemClick: n, activePath: o, level: l + 1 }) }),
      ],
     })
    );
   }
   var B = n(82462),
    E = n(80061);
   const H = { menuExternalLink: "menuExternalLink_NnFM" };
   function F(e) {
    let { item: t, onItemClick: n, activePath: a, level: o, index: l, ...d } = e;
    const { href: c, label: u, className: h, autoAddBaseUrl: m } = t,
     p = (0, r._F)(t, a),
     x = (0, B.Z)(c);
    return (0, b.jsx)("li", { className: (0, i.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(o), "menu__list-item", h), children: (0, b.jsxs)(S.Z, { className: (0, i.Z)("menu__link", !x && H.menuExternalLink, { "menu__link--active": p }, "utrecht-link"), autoAddBaseUrl: m, "aria-current": p ? "page" : void 0, to: c, ...(x && { onClick: n ? () => n(t) : void 0 }), ...d, children: [u, !x && (0, b.jsx)(E.Z, {})] }) }, u);
   }
   const W = { menuHtmlItem: "menuHtmlItem_PEWV" };
   function R(e) {
    let { item: t, level: n, index: a } = e;
    const { value: o, defaultStyle: r, className: l } = t;
    return (0, b.jsx)("li", { className: (0, i.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(n), r && [W.menuHtmlItem, "menu__list-item"], l), dangerouslySetInnerHTML: { __html: o } }, a);
   }
   function P(e) {
    let { item: t, ...n } = e;
    switch (t.type) {
     case "category":
      return (0, b.jsx)(A, { item: t, ...n });
     case "html":
      return (0, b.jsx)(R, { item: t, ...n });
     default:
      return (0, b.jsx)(F, { item: t, ...n });
    }
   }
   function V(e) {
    let { items: t, ...n } = e;
    return (0, b.jsx)(I, { children: t.map((e, t) => (0, b.jsx)(P, { item: e, index: t, ...n }, t)) });
   }
   const D = (0, a.memo)(V),
    U = { menu: "menu_Y1UP", menuWithAnnouncementBar: "menuWithAnnouncementBar_fPny" };
   function z(e) {
    let { path: t, sidebar: n, className: o } = e;
    const r = (function () {
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
    return (0, b.jsx)("nav", { "aria-label": (0, d.I)({ id: "theme.docs.sidebar.navAriaLabel", message: "Docs sidebar", description: "The ARIA label for the sidebar navigation" }), className: (0, i.Z)("menu thin-scrollbar", U.menu, r && U.menuWithAnnouncementBar, o), children: (0, b.jsx)("ul", { className: (0, i.Z)(s.k.docs.docSidebarMenu, "menu__list"), children: (0, b.jsx)(D, { items: n, activePath: t, level: 1 }) }) });
   }
   const O = { sidebar: "sidebar_mhZE", sidebarWithHideableNavbar: "sidebarWithHideableNavbar__6UL", sidebarHidden: "sidebarHidden__LRd", sidebar__content: "sidebar__content_LJMP", "sidebar__content--hidden": "sidebar__content--hidden_JLGr", "sidebar__toggle-button": "sidebar__toggle-button_CFx3", "sidebar__toggle-button--icon-only": "sidebar__toggle-button--icon-only_hRXq" };
   var Y = (0, Z.Z)("arrow-bar-to-left", "IconArrowBarToLeft", [
     ["path", { d: "M10 12l10 0", key: "svg-0" }],
     ["path", { d: "M10 12l4 4", key: "svg-1" }],
     ["path", { d: "M10 12l4 -4", key: "svg-2" }],
     ["path", { d: "M4 4l0 16", key: "svg-3" }],
    ]),
    q = (0, Z.Z)("arrow-bar-to-right", "IconArrowBarToRight", [
     ["path", { d: "M14 12l-10 0", key: "svg-0" }],
     ["path", { d: "M14 12l-4 4", key: "svg-1" }],
     ["path", { d: "M14 12l-4 -4", key: "svg-2" }],
     ["path", { d: "M20 4l0 16", key: "svg-3" }],
    ]);
   function G(e) {
    let { path: t, sidebar: n, onCollapse: o, isHidden: s } = e;
    const {
      navbar: { hideOnScroll: r },
     } = (0, g.L)(),
     { isNavbarVisible: l } = (0, v.c)(r),
     d = (0, a.useId)();
    return (0, b.jsxs)("div", { className: (0, i.Z)(O.sidebar, r && O.sidebarWithHideableNavbar, s && O.sidebarHidden, l && O.sidebarWithNavbar), children: [(0, b.jsx)(y.zx, { appearance: "subtle-button", onClick: o, className: (0, i.Z)(O["sidebar__toggle-button"], s && O["sidebar__toggle-button--icon-only"]), "aria-controls": d, "aria-label": s ? "Toon sidebar" : "Verberg sidebar", "aria-expanded": !s, children: s ? (0, b.jsx)(b.Fragment, { children: (0, b.jsx)(q, {}) }) : (0, b.jsxs)(b.Fragment, { children: [(0, b.jsx)(Y, {}), " Verberg"] }) }), (0, b.jsx)("div", { id: d, "aria-expanded": !s, className: (0, i.Z)(O.sidebar__content, s && O["sidebar__content--hidden"]), children: (0, b.jsx)(z, { path: t, sidebar: n }) })] });
   }
   const J = a.memo(G);
   var Q = n(59039),
    X = n(13873);
   const K = (e) => {
    let { sidebar: t, path: n } = e;
    const a = (0, X.e)();
    return (0, b.jsx)("ul", {
     className: (0, i.Z)(s.k.docs.docSidebarMenu, "menu__list"),
     children: (0, b.jsx)(D, {
      items: t,
      activePath: n,
      onItemClick: (e) => {
       "category" === e.type && e.href && a.toggle(), "link" === e.type && a.toggle();
      },
      level: 1,
     }),
    });
   };
   function $(e) {
    return (0, b.jsx)(Q.Zo, { component: K, props: e });
   }
   const ee = a.memo($);
   function te(e) {
    const t = (0, _.i)(),
     n = "desktop" === t || "ssr" === t,
     a = "mobile" === t;
    return (0, b.jsxs)(b.Fragment, { children: [n && (0, b.jsx)(J, { ...e }), a && (0, b.jsx)(ee, { ...e })] });
   }
   function ne(e) {
    return (0, b.jsx)("svg", { width: "20", height: "20", "aria-hidden": "true", ...e, children: (0, b.jsxs)("g", { fill: "#7a7a7a", children: [(0, b.jsx)("path", { d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0" }), (0, b.jsx)("path", { d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0" })] }) });
   }
   const ae = { expandButton: "expandButton_G6kD", expandButtonIcon: "expandButtonIcon_F4OQ" };
   function ie(e) {
    let { toggleSidebar: t } = e;
    return (0, b.jsx)("div", { className: ae.expandButton, title: (0, d.I)({ id: "theme.docs.sidebar.expandButtonTitle", message: "Expand sidebar", description: "The ARIA label and title attribute for expand button of doc sidebar" }), "aria-label": (0, d.I)({ id: "theme.docs.sidebar.expandButtonAriaLabel", message: "Expand sidebar", description: "The ARIA label and title attribute for expand button of doc sidebar" }), tabIndex: 0, role: "button", onKeyDown: t, onClick: t, children: (0, b.jsx)(ne, { className: ae.expandButtonIcon }) });
   }
   const oe = { docSidebarContainer: "docSidebarContainer_QuYa", docSidebarContainerHidden: "docSidebarContainerHidden_TTEk", sidebarViewport: "sidebarViewport_OFwt" };
   function se(e) {
    let { children: t } = e;
    const n = (0, l.V)();
    return (0, b.jsx)(a.Fragment, { children: t }, n?.name ?? "noSidebar");
   }
   function re(e) {
    let { sidebar: t, hiddenSidebarContainer: n, setHiddenSidebarContainer: o } = e;
    const { pathname: r } = (0, x.TH)(),
     [l, d] = (0, a.useState)(!1),
     c = (0, a.useCallback)(() => {
      l && d(!1), !l && (0, p.n)() && d(!0), o((e) => !e);
     }, [o, l]);
    return (0, b.jsx)("aside", {
     className: (0, i.Z)(s.k.docs.docSidebarContainer, oe.docSidebarContainer, n && oe.docSidebarContainerHidden),
     onTransitionEnd: (e) => {
      e.currentTarget.classList.contains(oe.docSidebarContainer) && n && d(!0);
     },
     children: (0, b.jsx)(se, { children: (0, b.jsxs)("div", { className: (0, i.Z)(oe.sidebarViewport, l && oe.sidebarViewportHidden), children: [(0, b.jsx)(te, { sidebar: t, path: r, onCollapse: c, isHidden: l }), l && (0, b.jsx)(ie, { toggleSidebar: c })] }) }),
    });
   }
   const le = { docMainContainer: "docMainContainer_fTqD", docMainContainerEnhanced: "docMainContainerEnhanced_O6Uo", docItemWrapperEnhanced: "docItemWrapperEnhanced_UvcI" };
   function de(e) {
    let { hiddenSidebarContainer: t, children: n } = e;
    const a = (0, l.V)();
    return (0, b.jsx)("main", { className: (0, i.Z)(le.docMainContainer, (t || !a) && le.docMainContainerEnhanced), children: (0, b.jsx)("div", { className: (0, i.Z)("container padding-top--md padding-bottom--lg", le.docItemWrapper, t && le.docItemWrapperEnhanced), children: n }) });
   }
   const ce = { docRoot: "docRoot_XAo5", docsWrapper: "docsWrapper_fqMb" };
   function ue(e) {
    let { children: t } = e;
    const n = (0, l.V)(),
     [i, o] = (0, a.useState)(!1);
    return (0, b.jsxs)("div", { className: ce.docsWrapper, children: [(0, b.jsx)(m, {}), (0, b.jsxs)("div", { className: ce.docRoot, children: [n && (0, b.jsx)(re, { sidebar: n.items, hiddenSidebarContainer: i, setHiddenSidebarContainer: o }), (0, b.jsx)(de, { hiddenSidebarContainer: i, children: t })] })] });
   }
   var he = n(36554);
   function be(e) {
    const t = (0, r.SN)(e);
    if (!t) return (0, b.jsx)(he.Z, {});
    const { docElement: n, sidebarName: a, sidebarItems: d } = t;
    return (0, b.jsx)(o.FG, { className: (0, i.Z)(s.k.page.docsDocPage), children: (0, b.jsx)(l.b, { name: a, items: d, children: (0, b.jsx)(ue, { children: n }) }) });
   }
  },
  36554: (e, t, n) => {
   n.d(t, { Z: () => r });
   n(50959);
   var a = n(5341),
    i = n(77289),
    o = n(52542),
    s = n(11527);
   function r(e) {
    let { className: t } = e;
    return (0, s.jsx)("main", { className: (0, a.Z)("container margin-vert--xl", t), children: (0, s.jsx)("div", { className: "row", children: (0, s.jsxs)("div", { className: "col col--6 col--offset-3", children: [(0, s.jsx)(o.Z, { as: "h1", className: "hero__title", children: (0, s.jsx)(i.Z, { id: "theme.NotFound.title", description: "The title of the 404 page", children: "Page Not Found" }) }), (0, s.jsx)("p", { children: (0, s.jsx)(i.Z, { id: "theme.NotFound.p1", description: "The first paragraph of the 404 page", children: "We could not find what you were looking for." }) }), (0, s.jsx)("p", { children: (0, s.jsx)(i.Z, { id: "theme.NotFound.p2", description: "The 2nd paragraph of the 404 page", children: "Please contact the owner of the site that linked you to the original URL and let them know their link is broken." }) })] }) }) });
   }
  },
 },
]);
