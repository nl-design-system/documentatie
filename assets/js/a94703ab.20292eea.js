'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94368],
 {
  90529: (e, t, n) => {
   n.r(t), n.d(t, { default: () => me });
   var a = n(75271),
    i = n(4814),
    o = n(7428),
    s = n(36202),
    r = n(62567),
    l = n(10264),
    d = n(36933),
    c = n(27667),
    u = n(16267);
   const h = { backToTopButton: 'backToTopButton_WSas', backToTopButtonShow: 'backToTopButtonShow_sjWR' };
   var m = n(52676);
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
    return (0, m.jsx)('button', { 'aria-label': (0, d.I)({ id: 'theme.BackToTopButton.buttonAriaLabel', message: 'Scroll back to top', description: 'The ARIA label for the back to top button' }), className: (0, i.Z)('clean-btn', s.k.common.backToTopButton, h.backToTopButton, e && h.backToTopButtonShow), type: 'button', onClick: t });
   }
   var p = n(80687),
    x = n(3225),
    _ = n(30632),
    g = n(31895),
    v = n(25718),
    j = n(32577),
    k = (0, j.Z)('outline', 'arrow-bar-to-left', 'IconArrowBarToLeft', [
     ['path', { d: 'M10 12l10 0', key: 'svg-0' }],
     ['path', { d: 'M10 12l4 4', key: 'svg-1' }],
     ['path', { d: 'M10 12l4 -4', key: 'svg-2' }],
     ['path', { d: 'M4 4l0 16', key: 'svg-3' }],
    ]),
    f = (0, j.Z)('outline', 'arrow-bar-to-right', 'IconArrowBarToRight', [
     ['path', { d: 'M14 12l-10 0', key: 'svg-0' }],
     ['path', { d: 'M14 12l-4 4', key: 'svg-1' }],
     ['path', { d: 'M14 12l-4 -4', key: 'svg-2' }],
     ['path', { d: 'M20 4l0 16', key: 'svg-3' }],
    ]),
    C = n(51751),
    I = n(91878);
   const S = Symbol('EmptyContext'),
    N = a.createContext(S);
   function y(e) {
    let { children: t } = e;
    const [n, i] = (0, a.useState)(null),
     o = (0, a.useMemo)(() => ({ expandedItem: n, setExpandedItem: i }), [n]);
    return (0, m.jsx)(N.Provider, { value: o, children: t });
   }
   var T = n(53450),
    Z = n(6382),
    w = n(45297),
    L = (0, j.Z)('outline', 'chevron-down', 'IconChevronDown', [['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]]),
    M = (0, j.Z)('outline', 'chevron-up', 'IconChevronUp', [['path', { d: 'M6 15l6 -6l6 6', key: 'svg-0' }]]),
    A = n(46506);
   function E(e) {
    let { categoryLabel: t, collapsed: n, onClick: a } = e;
    return (0, m.jsx)(A.zx, { appearance: 'subtle-button', 'aria-label': (0, d.I)({ id: 'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel', message: "Toggle the collapsible sidebar category '{label}'", description: 'The ARIA label to toggle the collapsible sidebar category' }, { label: t }), type: 'button', className: 'clean-btn', onClick: a, children: (0, m.jsx)(A.JO, { children: n ? (0, m.jsx)(L, {}) : (0, m.jsx)(M, {}) }) });
   }
   function B(e) {
    let { item: t, onItemClick: n, activePath: o, level: l, index: d, ...c } = e;
    const { items: u, label: h, collapsible: b, className: p, href: x } = t,
     _ = 'sidebar__main-category' === p,
     {
      docs: {
       sidebar: { autoCollapseCategories: v },
      },
     } = (0, g.L)(),
     j = (function (e) {
      const t = (0, w.Z)();
      return (0, a.useMemo)(() => (e.href ? e.href : !t && e.collapsible ? (0, r.LM)(e) : void 0), [e, t]);
     })(t),
     k = (0, r._F)(t, o),
     { collapsed: f, setCollapsed: C } = (0, Z.u)({ initialState: () => !!b && !k && t.collapsed }),
     { expandedItem: y, setExpandedItem: L } = (function () {
      const e = (0, a.useContext)(N);
      if (e === S) throw new I.i6('DocSidebarItemsExpandedStateProvider');
      return e;
     })(),
     M = function (e) {
      void 0 === e && (e = !f), L(e ? null : d), C(e);
     };
    return (
     (function (e) {
      let { isActive: t, collapsed: n, updateCollapsed: i } = e;
      const o = (0, I.D9)(t);
      (0, a.useEffect)(() => {
       t && !o && n && i(!1);
      }, [t, o, n, i]);
     })({ isActive: k, collapsed: f, updateCollapsed: M }),
     (0, a.useEffect)(() => {
      b && null != y && y !== d && v && C(!0);
     }, [b, y, d, C, v]),
     (0, m.jsxs)('li', {
      className: (0, i.Z)(s.k.docs.docSidebarItemCategory, s.k.docs.docSidebarItemCategoryLevel(l), 'menu__list-item', { 'menu__list-item--collapsed': f }),
      children: [
       (0, m.jsxs)('div', {
        className: (0, i.Z)('menu__list-item-collapsible', { 'sidebar__main-category': _ }),
        children: [
         _ ? h : (0, m.jsx)(T.Z, { className: (0, i.Z)('menu__link', 'utrecht-link', { 'menu__link--sublist': b, 'menu__link--sublist-caret': !x && b }), href: b ? (j ?? '#') : j, ...c, children: h }),
         x &&
          b &&
          (0, m.jsx)(E, {
           categoryLabel: h,
           onClick: (e) => {
            e.preventDefault(), M();
           },
           collapsed: f,
          }),
        ],
       }),
       (0, m.jsx)(Z.z, { lazy: !0, as: 'ul', className: 'menu__list', collapsed: f, children: (0, m.jsx)(U, { items: u, tabIndex: f ? -1 : 0, onItemClick: n, activePath: o, level: l + 1 }) }),
      ],
     })
    );
   }
   const H = { menuHtmlItem: 'menuHtmlItem_PEWV' };
   function W(e) {
    let { item: t, level: n, index: a } = e;
    const { value: o, defaultStyle: r, className: l } = t;
    return (0, m.jsx)('li', { className: (0, i.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(n), r && [H.menuHtmlItem, 'menu__list-item'], l), dangerouslySetInnerHTML: { __html: o } }, a);
   }
   var R = n(28398),
    F = n(8309);
   const P = { menuExternalLink: 'menuExternalLink_NnFM' };
   function V(e) {
    let { item: t, onItemClick: n, activePath: a, level: o, index: l, ...d } = e;
    const { href: c, label: u, className: h, autoAddBaseUrl: b } = t,
     p = (0, r._F)(t, a),
     x = (0, R.Z)(c);
    return (0, m.jsx)('li', { className: (0, i.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(o), 'menu__list-item', h), children: (0, m.jsxs)(T.Z, { className: (0, i.Z)('menu__link', !x && P.menuExternalLink, { 'menu__link--active': p }, 'utrecht-link'), autoAddBaseUrl: b, 'aria-current': p ? 'page' : void 0, to: c, ...(x && { onClick: n ? () => n(t) : void 0 }), ...d, children: [u, !x && (0, m.jsx)(F.Z, {})] }) }, u);
   }
   function z(e) {
    let { item: t, ...n } = e;
    switch (t.type) {
     case 'category':
      return (0, m.jsx)(B, { item: t, ...n });
     case 'html':
      return (0, m.jsx)(W, { item: t, ...n });
     default:
      return (0, m.jsx)(V, { item: t, ...n });
    }
   }
   function D(e) {
    let { items: t, ...n } = e;
    return (0, m.jsx)(y, { children: t.map((e, t) => (0, m.jsx)(z, { item: e, index: t, ...n }, t)) });
   }
   const U = (0, a.memo)(D),
    Y = { menu: 'menu_Y1UP', menuWithAnnouncementBar: 'menuWithAnnouncementBar_fPny' };
   function J(e) {
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
    return (0, m.jsx)('nav', { 'aria-label': (0, d.I)({ id: 'theme.docs.sidebar.navAriaLabel', message: 'Docs sidebar', description: 'The ARIA label for the sidebar navigation' }), className: (0, i.Z)('menu thin-scrollbar', Y.menu, r && Y.menuWithAnnouncementBar, o), children: (0, m.jsx)('ul', { className: (0, i.Z)(s.k.docs.docSidebarMenu, 'menu__list'), children: (0, m.jsx)(U, { items: n, activePath: t, level: 1 }) }) });
   }
   const O = { sidebar: 'sidebar_mhZE', sidebarWithHideableNavbar: 'sidebarWithHideableNavbar__6UL', sidebarHidden: 'sidebarHidden__LRd', sidebar__content: 'sidebar__content_LJMP', 'sidebar__content--hidden': 'sidebar__content--hidden_JLGr', 'sidebar__toggle-button': 'sidebar__toggle-button_CFx3', 'sidebar__toggle-button--icon-only': 'sidebar__toggle-button--icon-only_hRXq' };
   function G(e) {
    let { path: t, sidebar: n, onCollapse: o, isHidden: s } = e;
    const {
      navbar: { hideOnScroll: r },
     } = (0, g.L)(),
     { isNavbarVisible: l } = (0, v.c)(r),
     d = (0, a.useId)();
    return (0, m.jsxs)('div', { className: (0, i.Z)(O.sidebar, r && O.sidebarWithHideableNavbar, s && O.sidebarHidden, l && O.sidebarWithNavbar), children: [(0, m.jsx)(A.zx, { appearance: 'subtle-button', onClick: o, className: (0, i.Z)(O['sidebar__toggle-button'], s && O['sidebar__toggle-button--icon-only']), 'aria-controls': d, 'aria-label': s ? 'Toon sidebar' : 'Verberg sidebar', 'aria-expanded': !s, children: s ? (0, m.jsx)(m.Fragment, { children: (0, m.jsx)(f, {}) }) : (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(k, {}), ' Verberg'] }) }), (0, m.jsx)('div', { id: d, 'aria-expanded': !s, className: (0, i.Z)(O.sidebar__content, s && O['sidebar__content--hidden']), children: (0, m.jsx)(J, { path: t, sidebar: n }) })] });
   }
   const X = a.memo(G);
   var q = n(36288),
    K = n(38991);
   const Q = (e) => {
    let { sidebar: t, path: n } = e;
    const a = (0, K.e)();
    return (0, m.jsx)('ul', {
     className: (0, i.Z)(s.k.docs.docSidebarMenu, 'menu__list'),
     children: (0, m.jsx)(U, {
      items: t,
      activePath: n,
      onItemClick: (e) => {
       'category' === e.type && e.href && a.toggle(), 'link' === e.type && a.toggle();
      },
      level: 1,
     }),
    });
   };
   function $(e) {
    return (0, m.jsx)(q.Zo, { component: Q, props: e });
   }
   const ee = a.memo($);
   function te(e) {
    const t = (0, _.i)(),
     n = 'desktop' === t || 'ssr' === t,
     a = 'mobile' === t;
    return (0, m.jsxs)(m.Fragment, { children: [n && (0, m.jsx)(X, { ...e }), a && (0, m.jsx)(ee, { ...e })] });
   }
   function ne(e) {
    return (0, m.jsx)('svg', { width: '20', height: '20', 'aria-hidden': 'true', ...e, children: (0, m.jsxs)('g', { fill: '#7a7a7a', children: [(0, m.jsx)('path', { d: 'M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0' }), (0, m.jsx)('path', { d: 'M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0' })] }) });
   }
   const ae = { expandButton: 'expandButton_IzTH', expandButtonIcon: 'expandButtonIcon_IElz' };
   function ie(e) {
    let { toggleSidebar: t } = e;
    return (0, m.jsx)('div', { className: ae.expandButton, title: (0, d.I)({ id: 'theme.docs.sidebar.expandButtonTitle', message: 'Expand sidebar', description: 'The ARIA label and title attribute for expand button of doc sidebar' }), 'aria-label': (0, d.I)({ id: 'theme.docs.sidebar.expandButtonAriaLabel', message: 'Expand sidebar', description: 'The ARIA label and title attribute for expand button of doc sidebar' }), tabIndex: 0, role: 'button', onKeyDown: t, onClick: t, children: (0, m.jsx)(ne, { className: ae.expandButtonIcon }) });
   }
   const oe = { docSidebarContainer: 'docSidebarContainer_PE9v', docSidebarContainerHidden: 'docSidebarContainerHidden_pQwV', sidebarViewport: 'sidebarViewport_vpd8' };
   function se(e) {
    let { children: t } = e;
    const n = (0, l.V)();
    return (0, m.jsx)(a.Fragment, { children: t }, n?.name ?? 'noSidebar');
   }
   function re(e) {
    let { sidebar: t, hiddenSidebarContainer: n, setHiddenSidebarContainer: o } = e;
    const { pathname: r } = (0, x.TH)(),
     [l, d] = (0, a.useState)(!1),
     c = (0, a.useCallback)(() => {
      l && d(!1), !l && (0, p.n)() && d(!0), o((e) => !e);
     }, [o, l]);
    return (0, m.jsx)('aside', {
     className: (0, i.Z)(s.k.docs.docSidebarContainer, oe.docSidebarContainer, n && oe.docSidebarContainerHidden),
     onTransitionEnd: (e) => {
      e.currentTarget.classList.contains(oe.docSidebarContainer) && n && d(!0);
     },
     children: (0, m.jsx)(se, { children: (0, m.jsxs)('div', { className: (0, i.Z)(oe.sidebarViewport, l && oe.sidebarViewportHidden), children: [(0, m.jsx)(te, { sidebar: t, path: r, onCollapse: c, isHidden: l }), l && (0, m.jsx)(ie, { toggleSidebar: c })] }) }),
    });
   }
   const le = { docMainContainer: 'docMainContainer_VXYw', docMainContainerEnhanced: 'docMainContainerEnhanced_z0WF', docItemWrapperEnhanced: 'docItemWrapperEnhanced_uRYn' };
   function de(e) {
    let { hiddenSidebarContainer: t, children: n } = e;
    const a = (0, l.V)();
    return (0, m.jsx)('main', { className: (0, i.Z)(le.docMainContainer, (t || !a) && le.docMainContainerEnhanced), children: (0, m.jsx)('div', { className: (0, i.Z)('container padding-top--md padding-bottom--lg', le.docItemWrapper, t && le.docItemWrapperEnhanced), children: n }) });
   }
   const ce = { docRoot: 'docRoot_VOPJ', docsWrapper: 'docsWrapper_xeEk' };
   function ue(e) {
    let { children: t } = e;
    const n = (0, l.V)(),
     [i, o] = (0, a.useState)(!1);
    return (0, m.jsxs)('div', { className: ce.docsWrapper, children: [(0, m.jsx)(b, {}), (0, m.jsxs)('div', { className: ce.docRoot, children: [n && (0, m.jsx)(re, { sidebar: n.items, hiddenSidebarContainer: i, setHiddenSidebarContainer: o }), (0, m.jsx)(de, { hiddenSidebarContainer: i, children: t })] })] });
   }
   var he = n(67859);
   function me(e) {
    const t = (0, r.SN)(e);
    if (!t) return (0, m.jsx)(he.Z, {});
    const { docElement: n, sidebarName: a, sidebarItems: d } = t;
    return (0, m.jsx)(o.FG, { className: (0, i.Z)(s.k.page.docsDocPage), children: (0, m.jsx)(l.b, { name: a, items: d, children: (0, m.jsx)(ue, { children: n }) }) });
   }
  },
  67859: (e, t, n) => {
   n.d(t, { Z: () => r });
   n(75271);
   var a = n(4814),
    i = n(36933),
    o = n(17765),
    s = n(52676);
   function r(e) {
    let { className: t } = e;
    return (0, s.jsx)('main', { className: (0, a.Z)('container margin-vert--xl', t), children: (0, s.jsx)('div', { className: 'row', children: (0, s.jsxs)('div', { className: 'col col--6 col--offset-3', children: [(0, s.jsx)(o.Z, { as: 'h1', className: 'hero__title', children: (0, s.jsx)(i.Z, { id: 'theme.NotFound.title', description: 'The title of the 404 page', children: 'Page Not Found' }) }), (0, s.jsx)('p', { children: (0, s.jsx)(i.Z, { id: 'theme.NotFound.p1', description: 'The first paragraph of the 404 page', children: 'We could not find what you were looking for.' }) }), (0, s.jsx)('p', { children: (0, s.jsx)(i.Z, { id: 'theme.NotFound.p2', description: 'The 2nd paragraph of the 404 page', children: 'Please contact the owner of the site that linked you to the original URL and let them know their link is broken.' }) })] }) }) });
   }
  },
 },
]);
