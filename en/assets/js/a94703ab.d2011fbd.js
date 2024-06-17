"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94368],
 {
  81987: (e, t, n) => {
   n.r(t), n.d(t, { default: () => be });
   var a = n(75271),
    i = n(4814),
    o = n(21296),
    s = n(76373),
    r = n(85427),
    l = n(85954),
    d = n(8143),
    c = n(73868),
    u = n(89819);
   const h = { backToTopButton: "backToTopButton_dhVt", backToTopButtonShow: "backToTopButtonShow_qJCi" };
   var b = n(52676);
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
   var p = n(83271),
    x = n(3225),
    _ = n(62920),
    g = n(44651),
    j = n(34947),
    k = n(81226),
    v = (0, k.Z)("outline", "arrow-bar-to-left", "IconArrowBarToLeft", [
     ["path", { d: "M10 12l10 0", key: "svg-0" }],
     ["path", { d: "M10 12l4 4", key: "svg-1" }],
     ["path", { d: "M10 12l4 -4", key: "svg-2" }],
     ["path", { d: "M4 4l0 16", key: "svg-3" }],
    ]),
    f = (0, k.Z)("outline", "arrow-bar-to-right", "IconArrowBarToRight", [
     ["path", { d: "M14 12l-10 0", key: "svg-0" }],
     ["path", { d: "M14 12l-4 4", key: "svg-1" }],
     ["path", { d: "M14 12l-4 -4", key: "svg-2" }],
     ["path", { d: "M20 4l0 16", key: "svg-3" }],
    ]),
    C = n(25369),
    S = n(61454);
   const N = Symbol("EmptyContext"),
    I = a.createContext(N);
   function y(e) {
    let { children: t } = e;
    const [n, i] = (0, a.useState)(null),
     o = (0, a.useMemo)(() => ({ expandedItem: n, setExpandedItem: i }), [n]);
    return (0, b.jsx)(I.Provider, { value: o, children: t });
   }
   var T = n(15854),
    Z = n(54218),
    w = n(35656),
    L = (0, k.Z)("outline", "chevron-down", "IconChevronDown", [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]]),
    B = (0, k.Z)("outline", "chevron-up", "IconChevronUp", [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]]),
    M = n(78187);
   function A(e) {
    let { categoryLabel: t, collapsed: n, onClick: a } = e;
    return (0, b.jsx)(M.zx, { appearance: "subtle-button", "aria-label": (0, d.I)({ id: "theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel", message: "Toggle the collapsible sidebar category '{label}'", description: "The ARIA label to toggle the collapsible sidebar category" }, { label: t }), type: "button", className: "clean-btn", onClick: a, children: (0, b.jsx)(M.JO, { children: n ? (0, b.jsx)(L, {}) : (0, b.jsx)(B, {}) }) });
   }
   function H(e) {
    let { item: t, onItemClick: n, activePath: o, level: l, index: d, ...c } = e;
    const { items: u, label: h, collapsible: m, className: p, href: x } = t,
     _ = "sidebar__main-category" === p,
     {
      docs: {
       sidebar: { autoCollapseCategories: j },
      },
     } = (0, g.L)(),
     k = (function (e) {
      const t = (0, w.Z)();
      return (0, a.useMemo)(() => (e.href ? e.href : !t && e.collapsible ? (0, r.LM)(e) : void 0), [e, t]);
     })(t),
     v = (0, r._F)(t, o),
     { collapsed: f, setCollapsed: C } = (0, Z.u)({ initialState: () => !!m && !v && t.collapsed }),
     { expandedItem: y, setExpandedItem: L } = (function () {
      const e = (0, a.useContext)(I);
      if (e === N) throw new S.i6("DocSidebarItemsExpandedStateProvider");
      return e;
     })(),
     B = function (e) {
      void 0 === e && (e = !f), L(e ? null : d), C(e);
     };
    return (
     (function (e) {
      let { isActive: t, collapsed: n, updateCollapsed: i } = e;
      const o = (0, S.D9)(t);
      (0, a.useEffect)(() => {
       t && !o && n && i(!1);
      }, [t, o, n, i]);
     })({ isActive: v, collapsed: f, updateCollapsed: B }),
     (0, a.useEffect)(() => {
      m && null != y && y !== d && j && C(!0);
     }, [m, y, d, C, j]),
     (0, b.jsxs)("li", {
      className: (0, i.Z)(s.k.docs.docSidebarItemCategory, s.k.docs.docSidebarItemCategoryLevel(l), "menu__list-item", { "menu__list-item--collapsed": f }),
      children: [
       (0, b.jsxs)("div", {
        className: (0, i.Z)("menu__list-item-collapsible", { "sidebar__main-category": _ }),
        children: [
         _ ? h : (0, b.jsx)(T.Z, { className: (0, i.Z)("menu__link", "utrecht-link", { "menu__link--sublist": m, "menu__link--sublist-caret": !x && m }), href: m ? k ?? "#" : k, ...c, children: h }),
         x &&
          m &&
          (0, b.jsx)(A, {
           categoryLabel: h,
           onClick: (e) => {
            e.preventDefault(), B();
           },
           collapsed: f,
          }),
        ],
       }),
       (0, b.jsx)(Z.z, { lazy: !0, as: "ul", className: "menu__list", collapsed: f, children: (0, b.jsx)(z, { items: u, tabIndex: f ? -1 : 0, onItemClick: n, activePath: o, level: l + 1 }) }),
      ],
     })
    );
   }
   const E = { menuHtmlItem: "menuHtmlItem_PEWV" };
   function W(e) {
    let { item: t, level: n, index: a } = e;
    const { value: o, defaultStyle: r, className: l } = t;
    return (0, b.jsx)("li", { className: (0, i.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(n), r && [E.menuHtmlItem, "menu__list-item"], l), dangerouslySetInnerHTML: { __html: o } }, a);
   }
   var F = n(5922),
    R = n(89868);
   const P = { menuExternalLink: "menuExternalLink_NnFM" };
   function V(e) {
    let { item: t, onItemClick: n, activePath: a, level: o, index: l, ...d } = e;
    const { href: c, label: u, className: h, autoAddBaseUrl: m } = t,
     p = (0, r._F)(t, a),
     x = (0, F.Z)(c);
    return (0, b.jsx)("li", { className: (0, i.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(o), "menu__list-item", h), children: (0, b.jsxs)(T.Z, { className: (0, i.Z)("menu__link", !x && P.menuExternalLink, { "menu__link--active": p }, "utrecht-link"), autoAddBaseUrl: m, "aria-current": p ? "page" : void 0, to: c, ...(x && { onClick: n ? () => n(t) : void 0 }), ...d, children: [u, !x && (0, b.jsx)(R.Z, {})] }) }, u);
   }
   function D(e) {
    let { item: t, ...n } = e;
    switch (t.type) {
     case "category":
      return (0, b.jsx)(H, { item: t, ...n });
     case "html":
      return (0, b.jsx)(W, { item: t, ...n });
     default:
      return (0, b.jsx)(V, { item: t, ...n });
    }
   }
   function U(e) {
    let { items: t, ...n } = e;
    return (0, b.jsx)(y, { children: t.map((e, t) => (0, b.jsx)(D, { item: e, index: t, ...n }, t)) });
   }
   const z = (0, a.memo)(U),
    J = { menu: "menu_Y1UP", menuWithAnnouncementBar: "menuWithAnnouncementBar_fPny" };
   function Y(e) {
    let { path: t, sidebar: n, className: o } = e;
    const r = (function () {
     const { isActive: e } = (0, C.nT)(),
      [t, n] = (0, a.useState)(e);
     return (
      (0, c.RF)(
       (t) => {
        let { scrollY: a } = t;
        e && n(0 === a);
       },
       [e],
      ),
      e && t
     );
    })();
    return (0, b.jsx)("nav", { "aria-label": (0, d.I)({ id: "theme.docs.sidebar.navAriaLabel", message: "Docs sidebar", description: "The ARIA label for the sidebar navigation" }), className: (0, i.Z)("menu thin-scrollbar", J.menu, r && J.menuWithAnnouncementBar, o), children: (0, b.jsx)("ul", { className: (0, i.Z)(s.k.docs.docSidebarMenu, "menu__list"), children: (0, b.jsx)(z, { items: n, activePath: t, level: 1 }) }) });
   }
   const G = { sidebar: "sidebar_mhZE", sidebarWithHideableNavbar: "sidebarWithHideableNavbar__6UL", sidebarHidden: "sidebarHidden__LRd", sidebar__content: "sidebar__content_LJMP", "sidebar__content--hidden": "sidebar__content--hidden_JLGr", "sidebar__toggle-button": "sidebar__toggle-button_CFx3", "sidebar__toggle-button--icon-only": "sidebar__toggle-button--icon-only_hRXq" };
   function X(e) {
    let { path: t, sidebar: n, onCollapse: o, isHidden: s } = e;
    const {
      navbar: { hideOnScroll: r },
     } = (0, g.L)(),
     { isNavbarVisible: l } = (0, j.c)(r),
     d = (0, a.useId)();
    return (0, b.jsxs)("div", { className: (0, i.Z)(G.sidebar, r && G.sidebarWithHideableNavbar, s && G.sidebarHidden, l && G.sidebarWithNavbar), children: [(0, b.jsx)(M.zx, { appearance: "subtle-button", onClick: o, className: (0, i.Z)(G["sidebar__toggle-button"], s && G["sidebar__toggle-button--icon-only"]), "aria-controls": d, "aria-label": s ? "Toon sidebar" : "Verberg sidebar", "aria-expanded": !s, children: s ? (0, b.jsx)(b.Fragment, { children: (0, b.jsx)(f, {}) }) : (0, b.jsxs)(b.Fragment, { children: [(0, b.jsx)(v, {}), " Verberg"] }) }), (0, b.jsx)("div", { id: d, "aria-expanded": !s, className: (0, i.Z)(G.sidebar__content, s && G["sidebar__content--hidden"]), children: (0, b.jsx)(Y, { path: t, sidebar: n }) })] });
   }
   const q = a.memo(X);
   var O = n(30473),
    K = n(18274);
   const Q = (e) => {
    let { sidebar: t, path: n } = e;
    const a = (0, K.e)();
    return (0, b.jsx)("ul", {
     className: (0, i.Z)(s.k.docs.docSidebarMenu, "menu__list"),
     children: (0, b.jsx)(z, {
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
    return (0, b.jsx)(O.Zo, { component: Q, props: e });
   }
   const ee = a.memo($);
   function te(e) {
    const t = (0, _.i)(),
     n = "desktop" === t || "ssr" === t,
     a = "mobile" === t;
    return (0, b.jsxs)(b.Fragment, { children: [n && (0, b.jsx)(q, { ...e }), a && (0, b.jsx)(ee, { ...e })] });
   }
   function ne(e) {
    return (0, b.jsx)("svg", { width: "20", height: "20", "aria-hidden": "true", ...e, children: (0, b.jsxs)("g", { fill: "#7a7a7a", children: [(0, b.jsx)("path", { d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0" }), (0, b.jsx)("path", { d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0" })] }) });
   }
   const ae = { expandButton: "expandButton_snBj", expandButtonIcon: "expandButtonIcon_k0aa" };
   function ie(e) {
    let { toggleSidebar: t } = e;
    return (0, b.jsx)("div", { className: ae.expandButton, title: (0, d.I)({ id: "theme.docs.sidebar.expandButtonTitle", message: "Expand sidebar", description: "The ARIA label and title attribute for expand button of doc sidebar" }), "aria-label": (0, d.I)({ id: "theme.docs.sidebar.expandButtonAriaLabel", message: "Expand sidebar", description: "The ARIA label and title attribute for expand button of doc sidebar" }), tabIndex: 0, role: "button", onKeyDown: t, onClick: t, children: (0, b.jsx)(ne, { className: ae.expandButtonIcon }) });
   }
   const oe = { docSidebarContainer: "docSidebarContainer_iSXH", docSidebarContainerHidden: "docSidebarContainerHidden_oVt_", sidebarViewport: "sidebarViewport_Uetw" };
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
   const le = { docMainContainer: "docMainContainer_kbVw", docMainContainerEnhanced: "docMainContainerEnhanced_Ldi7", docItemWrapperEnhanced: "docItemWrapperEnhanced_bzNU" };
   function de(e) {
    let { hiddenSidebarContainer: t, children: n } = e;
    const a = (0, l.V)();
    return (0, b.jsx)("main", { className: (0, i.Z)(le.docMainContainer, (t || !a) && le.docMainContainerEnhanced), children: (0, b.jsx)("div", { className: (0, i.Z)("container padding-top--md padding-bottom--lg", le.docItemWrapper, t && le.docItemWrapperEnhanced), children: n }) });
   }
   const ce = { docRoot: "docRoot_lWGB", docsWrapper: "docsWrapper_TXW5" };
   function ue(e) {
    let { children: t } = e;
    const n = (0, l.V)(),
     [i, o] = (0, a.useState)(!1);
    return (0, b.jsxs)("div", { className: ce.docsWrapper, children: [(0, b.jsx)(m, {}), (0, b.jsxs)("div", { className: ce.docRoot, children: [n && (0, b.jsx)(re, { sidebar: n.items, hiddenSidebarContainer: i, setHiddenSidebarContainer: o }), (0, b.jsx)(de, { hiddenSidebarContainer: i, children: t })] })] });
   }
   var he = n(41675);
   function be(e) {
    const t = (0, r.SN)(e);
    if (!t) return (0, b.jsx)(he.Z, {});
    const { docElement: n, sidebarName: a, sidebarItems: d } = t;
    return (0, b.jsx)(o.FG, { className: (0, i.Z)(s.k.page.docsDocPage), children: (0, b.jsx)(l.b, { name: a, items: d, children: (0, b.jsx)(ue, { children: n }) }) });
   }
  },
  41675: (e, t, n) => {
   n.d(t, { Z: () => r });
   n(75271);
   var a = n(4814),
    i = n(8143),
    o = n(64536),
    s = n(52676);
   function r(e) {
    let { className: t } = e;
    return (0, s.jsx)("main", { className: (0, a.Z)("container margin-vert--xl", t), children: (0, s.jsx)("div", { className: "row", children: (0, s.jsxs)("div", { className: "col col--6 col--offset-3", children: [(0, s.jsx)(o.Z, { as: "h1", className: "hero__title", children: (0, s.jsx)(i.Z, { id: "theme.NotFound.title", description: "The title of the 404 page", children: "Page Not Found" }) }), (0, s.jsx)("p", { children: (0, s.jsx)(i.Z, { id: "theme.NotFound.p1", description: "The first paragraph of the 404 page", children: "We could not find what you were looking for." }) }), (0, s.jsx)("p", { children: (0, s.jsx)(i.Z, { id: "theme.NotFound.p2", description: "The 2nd paragraph of the 404 page", children: "Please contact the owner of the site that linked you to the original URL and let them know their link is broken." }) })] }) }) });
   }
  },
 },
]);
