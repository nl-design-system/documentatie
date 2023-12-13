"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94368],
 {
  33993: (e, t, n) => {
   n.r(t), n.d(t, { default: () => me });
   var a = n(67294),
    i = n(90512),
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
    g = n(86668),
    j = n(99445),
    v = n(59689),
    k = n(902);
   const f = Symbol("EmptyContext"),
    C = a.createContext(f);
   function S(e) {
    let { children: t } = e;
    const [n, i] = (0, a.useState)(null),
     o = (0, a.useMemo)(() => ({ expandedItem: n, setExpandedItem: i }), [n]);
    return (0, m.jsx)(C.Provider, { value: o, children: t });
   }
   var I = n(86043),
    N = n(39960),
    y = n(72389),
    T = n(65663),
    Z = n(30853),
    w = (0, Z.Z)("chevron-down", "IconChevronDown", [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]]),
    L = (0, Z.Z)("chevron-up", "IconChevronUp", [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]]);
   function B(e) {
    let { categoryLabel: t, collapsed: n, onClick: a } = e;
    return (0, m.jsx)(T.zx, { appearance: "subtle-button", "aria-label": (0, d.I)({ id: "theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel", message: "Toggle the collapsible sidebar category '{label}'", description: "The ARIA label to toggle the collapsible sidebar category" }, { label: t }), type: "button", className: "clean-btn", onClick: a, children: (0, m.jsx)(T.JO, { children: n ? (0, m.jsx)(w, {}) : (0, m.jsx)(L, {}) }) });
   }
   function A(e) {
    let { item: t, onItemClick: n, activePath: o, level: l, index: d, ...c } = e;
    const { items: u, label: h, collapsible: b, className: p, href: x } = t,
     _ = "sidebar__main-category" === p,
     {
      docs: {
       sidebar: { autoCollapseCategories: j },
      },
     } = (0, g.L)(),
     v = (function (e) {
      const t = (0, y.Z)();
      return (0, a.useMemo)(() => (e.href ? e.href : !t && e.collapsible ? (0, r.LM)(e) : void 0), [e, t]);
     })(t),
     S = (0, r._F)(t, o),
     { collapsed: T, setCollapsed: Z } = (0, I.u)({ initialState: () => !!b && !S && t.collapsed }),
     { expandedItem: w, setExpandedItem: L } = (function () {
      const e = (0, a.useContext)(C);
      if (e === f) throw new k.i6("DocSidebarItemsExpandedStateProvider");
      return e;
     })(),
     A = function (e) {
      void 0 === e && (e = !T), L(e ? null : d), Z(e);
     };
    return (
     (function (e) {
      let { isActive: t, collapsed: n, updateCollapsed: i } = e;
      const o = (0, k.D9)(t);
      (0, a.useEffect)(() => {
       t && !o && n && i(!1);
      }, [t, o, n, i]);
     })({ isActive: S, collapsed: T, updateCollapsed: A }),
     (0, a.useEffect)(() => {
      b && null != w && w !== d && j && Z(!0);
     }, [b, w, d, Z, j]),
     (0, m.jsxs)("li", {
      className: (0, i.Z)(s.k.docs.docSidebarItemCategory, s.k.docs.docSidebarItemCategoryLevel(l), "menu__list-item", { "menu__list-item--collapsed": T }),
      children: [
       (0, m.jsxs)("div", {
        className: (0, i.Z)("menu__list-item-collapsible", { "sidebar__main-category": _ }),
        children: [
         _ ? h : (0, m.jsx)(N.Z, { className: (0, i.Z)("menu__link", "utrecht-link", { "menu__link--sublist": b, "menu__link--sublist-caret": !x && b }), href: b ? v ?? "#" : v, ...c, children: h }),
         x &&
          b &&
          (0, m.jsx)(B, {
           categoryLabel: h,
           onClick: (e) => {
            e.preventDefault(), A();
           },
           collapsed: T,
          }),
        ],
       }),
       (0, m.jsx)(I.z, { lazy: !0, as: "ul", className: "menu__list", collapsed: T, children: (0, m.jsx)(D, { items: u, tabIndex: T ? -1 : 0, onItemClick: n, activePath: o, level: l + 1 }) }),
      ],
     })
    );
   }
   var M = n(13919),
    H = n(39471);
   const E = { menuExternalLink: "menuExternalLink_NnFM" };
   function W(e) {
    let { item: t, onItemClick: n, activePath: a, level: o, index: l, ...d } = e;
    const { href: c, label: u, className: h, autoAddBaseUrl: b } = t,
     p = (0, r._F)(t, a),
     x = (0, M.Z)(c);
    return (0, m.jsx)("li", { className: (0, i.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(o), "menu__list-item", h), children: (0, m.jsxs)(N.Z, { className: (0, i.Z)("menu__link", !x && E.menuExternalLink, { "menu__link--active": p }, "utrecht-link"), autoAddBaseUrl: b, "aria-current": p ? "page" : void 0, to: c, ...(x && { onClick: n ? () => n(t) : void 0 }), ...d, children: [u, !x && (0, m.jsx)(H.Z, {})] }) }, u);
   }
   const R = { menuHtmlItem: "menuHtmlItem_PEWV" };
   function F(e) {
    let { item: t, level: n, index: a } = e;
    const { value: o, defaultStyle: r, className: l } = t;
    return (0, m.jsx)("li", { className: (0, i.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(n), r && [R.menuHtmlItem, "menu__list-item"], l), dangerouslySetInnerHTML: { __html: o } }, a);
   }
   function P(e) {
    let { item: t, ...n } = e;
    switch (t.type) {
     case "category":
      return (0, m.jsx)(A, { item: t, ...n });
     case "html":
      return (0, m.jsx)(F, { item: t, ...n });
     default:
      return (0, m.jsx)(W, { item: t, ...n });
    }
   }
   function V(e) {
    let { items: t, ...n } = e;
    return (0, m.jsx)(S, { children: t.map((e, t) => (0, m.jsx)(P, { item: e, index: t, ...n }, t)) });
   }
   const D = (0, a.memo)(V),
    U = { menu: "menu_Y1UP", menuWithAnnouncementBar: "menuWithAnnouncementBar_fPny" };
   function z(e) {
    let { path: t, sidebar: n, className: o } = e;
    const r = (function () {
     const { isActive: e } = (0, v.nT)(),
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
    return (0, m.jsx)("nav", { "aria-label": (0, d.I)({ id: "theme.docs.sidebar.navAriaLabel", message: "Docs sidebar", description: "The ARIA label for the sidebar navigation" }), className: (0, i.Z)("menu thin-scrollbar", U.menu, r && U.menuWithAnnouncementBar, o), children: (0, m.jsx)("ul", { className: (0, i.Z)(s.k.docs.docSidebarMenu, "menu__list"), children: (0, m.jsx)(D, { items: n, activePath: t, level: 1 }) }) });
   }
   const Y = { sidebar: "sidebar_mhZE", sidebarWithHideableNavbar: "sidebarWithHideableNavbar__6UL", sidebarHidden: "sidebarHidden__LRd", sidebar__content: "sidebar__content_LJMP", "sidebar__content--hidden": "sidebar__content--hidden_JLGr", "sidebar__toggle-button": "sidebar__toggle-button_CFx3", "sidebar__toggle-button--icon-only": "sidebar__toggle-button--icon-only_hRXq" };
   var J = (0, Z.Z)("arrow-bar-to-left", "IconArrowBarToLeft", [
     ["path", { d: "M10 12l10 0", key: "svg-0" }],
     ["path", { d: "M10 12l4 4", key: "svg-1" }],
     ["path", { d: "M10 12l4 -4", key: "svg-2" }],
     ["path", { d: "M4 4l0 16", key: "svg-3" }],
    ]),
    G = (0, Z.Z)("arrow-bar-to-right", "IconArrowBarToRight", [
     ["path", { d: "M14 12l-10 0", key: "svg-0" }],
     ["path", { d: "M14 12l-4 4", key: "svg-1" }],
     ["path", { d: "M14 12l-4 -4", key: "svg-2" }],
     ["path", { d: "M20 4l0 16", key: "svg-3" }],
    ]);
   function O(e) {
    let { path: t, sidebar: n, onCollapse: o, isHidden: s } = e;
    const {
      navbar: { hideOnScroll: r },
     } = (0, g.L)(),
     { isNavbarVisible: l } = (0, j.c)(r),
     d = (0, a.useId)();
    return (0, m.jsxs)("div", { className: (0, i.Z)(Y.sidebar, r && Y.sidebarWithHideableNavbar, s && Y.sidebarHidden, l && Y.sidebarWithNavbar), children: [(0, m.jsx)(T.zx, { appearance: "subtle-button", onClick: o, className: (0, i.Z)(Y["sidebar__toggle-button"], s && Y["sidebar__toggle-button--icon-only"]), "aria-controls": d, "aria-label": s ? "Toon sidebar" : "Verberg sidebar", "aria-expanded": !s, children: s ? (0, m.jsx)(m.Fragment, { children: (0, m.jsx)(G, {}) }) : (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(J, {}), " Verberg"] }) }), (0, m.jsx)("div", { id: d, "aria-expanded": !s, className: (0, i.Z)(Y.sidebar__content, s && Y["sidebar__content--hidden"]), children: (0, m.jsx)(z, { path: t, sidebar: n }) })] });
   }
   const K = a.memo(O);
   var q = n(13102),
    Q = n(93163);
   const X = (e) => {
    let { sidebar: t, path: n } = e;
    const a = (0, Q.e)();
    return (0, m.jsx)("ul", {
     className: (0, i.Z)(s.k.docs.docSidebarMenu, "menu__list"),
     children: (0, m.jsx)(D, {
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
    return (0, m.jsx)(q.Zo, { component: X, props: e });
   }
   const ee = a.memo($);
   function te(e) {
    const t = (0, _.i)(),
     n = "desktop" === t || "ssr" === t,
     a = "mobile" === t;
    return (0, m.jsxs)(m.Fragment, { children: [n && (0, m.jsx)(K, { ...e }), a && (0, m.jsx)(ee, { ...e })] });
   }
   function ne(e) {
    return (0, m.jsx)("svg", { width: "20", height: "20", "aria-hidden": "true", ...e, children: (0, m.jsxs)("g", { fill: "#7a7a7a", children: [(0, m.jsx)("path", { d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0" }), (0, m.jsx)("path", { d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0" })] }) });
   }
   const ae = { expandButton: "expandButton_TmdG", expandButtonIcon: "expandButtonIcon_i1dp" };
   function ie(e) {
    let { toggleSidebar: t } = e;
    return (0, m.jsx)("div", { className: ae.expandButton, title: (0, d.I)({ id: "theme.docs.sidebar.expandButtonTitle", message: "Expand sidebar", description: "The ARIA label and title attribute for expand button of doc sidebar" }), "aria-label": (0, d.I)({ id: "theme.docs.sidebar.expandButtonAriaLabel", message: "Expand sidebar", description: "The ARIA label and title attribute for expand button of doc sidebar" }), tabIndex: 0, role: "button", onKeyDown: t, onClick: t, children: (0, m.jsx)(ne, { className: ae.expandButtonIcon }) });
   }
   const oe = { docSidebarContainer: "docSidebarContainer_YfHR", docSidebarContainerHidden: "docSidebarContainerHidden_DPk8", sidebarViewport: "sidebarViewport_aRkj" };
   function se(e) {
    let { children: t } = e;
    const n = (0, l.V)();
    return (0, m.jsx)(a.Fragment, { children: t }, n?.name ?? "noSidebar");
   }
   function re(e) {
    let { sidebar: t, hiddenSidebarContainer: n, setHiddenSidebarContainer: o } = e;
    const { pathname: r } = (0, x.TH)(),
     [l, d] = (0, a.useState)(!1),
     c = (0, a.useCallback)(() => {
      l && d(!1), !l && (0, p.n)() && d(!0), o((e) => !e);
     }, [o, l]);
    return (0, m.jsx)("aside", {
     className: (0, i.Z)(s.k.docs.docSidebarContainer, oe.docSidebarContainer, n && oe.docSidebarContainerHidden),
     onTransitionEnd: (e) => {
      e.currentTarget.classList.contains(oe.docSidebarContainer) && n && d(!0);
     },
     children: (0, m.jsx)(se, { children: (0, m.jsxs)("div", { className: (0, i.Z)(oe.sidebarViewport, l && oe.sidebarViewportHidden), children: [(0, m.jsx)(te, { sidebar: t, path: r, onCollapse: c, isHidden: l }), l && (0, m.jsx)(ie, { toggleSidebar: c })] }) }),
    });
   }
   const le = { docMainContainer: "docMainContainer_TBSr", docMainContainerEnhanced: "docMainContainerEnhanced_lQrH", docItemWrapperEnhanced: "docItemWrapperEnhanced_JWYK" };
   function de(e) {
    let { hiddenSidebarContainer: t, children: n } = e;
    const a = (0, l.V)();
    return (0, m.jsx)("main", { className: (0, i.Z)(le.docMainContainer, (t || !a) && le.docMainContainerEnhanced), children: (0, m.jsx)("div", { className: (0, i.Z)("container padding-top--md padding-bottom--lg", le.docItemWrapper, t && le.docItemWrapperEnhanced), children: n }) });
   }
   const ce = { docRoot: "docRoot_UBD9", docsWrapper: "docsWrapper_hBAB" };
   function ue(e) {
    let { children: t } = e;
    const n = (0, l.V)(),
     [i, o] = (0, a.useState)(!1);
    return (0, m.jsxs)("div", { className: ce.docsWrapper, children: [(0, m.jsx)(b, {}), (0, m.jsxs)("div", { className: ce.docRoot, children: [n && (0, m.jsx)(re, { sidebar: n.items, hiddenSidebarContainer: i, setHiddenSidebarContainer: o }), (0, m.jsx)(de, { hiddenSidebarContainer: i, children: t })] })] });
   }
   var he = n(5658);
   function me(e) {
    const t = (0, r.SN)(e);
    if (!t) return (0, m.jsx)(he.Z, {});
    const { docElement: n, sidebarName: a, sidebarItems: d } = t;
    return (0, m.jsx)(o.FG, { className: (0, i.Z)(s.k.page.docsDocPage), children: (0, m.jsx)(l.b, { name: a, items: d, children: (0, m.jsx)(ue, { children: n }) }) });
   }
  },
  5658: (e, t, n) => {
   n.d(t, { Z: () => r });
   n(67294);
   var a = n(90512),
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
