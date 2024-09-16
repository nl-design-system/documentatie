'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94368],
 {
  22781: (e, t, n) => {
   n.r(t), n.d(t, { default: () => be });
   var a = n(75271),
    i = n(4814),
    o = n(17310),
    s = n(61902),
    r = n(34221),
    l = n(67918),
    d = n(7512),
    c = n(47637),
    u = n(87402);
   const h = { backToTopButton: 'backToTopButton_RZ_g', backToTopButtonShow: 'backToTopButtonShow_O9Ly' };
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
    return (0, b.jsx)('button', { 'aria-label': (0, d.I)({ id: 'theme.BackToTopButton.buttonAriaLabel', message: 'Scroll back to top', description: 'The ARIA label for the back to top button' }), className: (0, i.Z)('clean-btn', s.k.common.backToTopButton, h.backToTopButton, e && h.backToTopButtonShow), type: 'button', onClick: t });
   }
   var p = n(38124),
    x = n(3225),
    _ = n(26413),
    g = n(1257),
    v = n(44345),
    j = n(69804),
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
    C = n(51484),
    S = n(15053);
   const I = Symbol('EmptyContext'),
    N = a.createContext(I);
   function y(e) {
    let { children: t } = e;
    const [n, i] = (0, a.useState)(null),
     o = (0, a.useMemo)(() => ({ expandedItem: n, setExpandedItem: i }), [n]);
    return (0, b.jsx)(N.Provider, { value: o, children: t });
   }
   var T = n(90441),
    Z = n(93456),
    w = n(62935),
    L = (0, j.Z)('outline', 'chevron-down', 'IconChevronDown', [['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]]),
    A = (0, j.Z)('outline', 'chevron-up', 'IconChevronUp', [['path', { d: 'M6 15l6 -6l6 6', key: 'svg-0' }]]),
    M = n(46506);
   function B(e) {
    let { categoryLabel: t, collapsed: n, onClick: a } = e;
    return (0, b.jsx)(M.zx, { appearance: 'subtle-button', 'aria-label': (0, d.I)({ id: 'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel', message: "Toggle the collapsible sidebar category '{label}'", description: 'The ARIA label to toggle the collapsible sidebar category' }, { label: t }), type: 'button', className: 'clean-btn', onClick: a, children: (0, b.jsx)(M.JO, { children: n ? (0, b.jsx)(L, {}) : (0, b.jsx)(A, {}) }) });
   }
   function E(e) {
    let { item: t, onItemClick: n, activePath: o, level: l, index: d, ...c } = e;
    const { items: u, label: h, collapsible: m, className: p, href: x } = t,
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
     { collapsed: f, setCollapsed: C } = (0, Z.u)({ initialState: () => !!m && !k && t.collapsed }),
     { expandedItem: y, setExpandedItem: L } = (function () {
      const e = (0, a.useContext)(N);
      if (e === I) throw new S.i6('DocSidebarItemsExpandedStateProvider');
      return e;
     })(),
     A = function (e) {
      void 0 === e && (e = !f), L(e ? null : d), C(e);
     };
    return (
     (function (e) {
      let { isActive: t, collapsed: n, updateCollapsed: i } = e;
      const o = (0, S.D9)(t);
      (0, a.useEffect)(() => {
       t && !o && n && i(!1);
      }, [t, o, n, i]);
     })({ isActive: k, collapsed: f, updateCollapsed: A }),
     (0, a.useEffect)(() => {
      m && null != y && y !== d && v && C(!0);
     }, [m, y, d, C, v]),
     (0, b.jsxs)('li', {
      className: (0, i.Z)(s.k.docs.docSidebarItemCategory, s.k.docs.docSidebarItemCategoryLevel(l), 'menu__list-item', { 'menu__list-item--collapsed': f }),
      children: [
       (0, b.jsxs)('div', {
        className: (0, i.Z)('menu__list-item-collapsible', { 'sidebar__main-category': _ }),
        children: [
         _ ? h : (0, b.jsx)(T.Z, { className: (0, i.Z)('menu__link', 'utrecht-link', { 'menu__link--sublist': m, 'menu__link--sublist-caret': !x && m }), href: m ? (j ?? '#') : j, ...c, children: h }),
         x &&
          m &&
          (0, b.jsx)(B, {
           categoryLabel: h,
           onClick: (e) => {
            e.preventDefault(), A();
           },
           collapsed: f,
          }),
        ],
       }),
       (0, b.jsx)(Z.z, { lazy: !0, as: 'ul', className: 'menu__list', collapsed: f, children: (0, b.jsx)(U, { items: u, tabIndex: f ? -1 : 0, onItemClick: n, activePath: o, level: l + 1 }) }),
      ],
     })
    );
   }
   const H = { menuHtmlItem: 'menuHtmlItem_PEWV' };
   function F(e) {
    let { item: t, level: n, index: a } = e;
    const { value: o, defaultStyle: r, className: l } = t;
    return (0, b.jsx)('li', { className: (0, i.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(n), r && [H.menuHtmlItem, 'menu__list-item'], l), dangerouslySetInnerHTML: { __html: o } }, a);
   }
   var R = n(46765),
    W = n(18020);
   const P = { menuExternalLink: 'menuExternalLink_NnFM' };
   function V(e) {
    let { item: t, onItemClick: n, activePath: a, level: o, index: l, ...d } = e;
    const { href: c, label: u, className: h, autoAddBaseUrl: m } = t,
     p = (0, r._F)(t, a),
     x = (0, R.Z)(c);
    return (0, b.jsx)('li', { className: (0, i.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(o), 'menu__list-item', h), children: (0, b.jsxs)(T.Z, { className: (0, i.Z)('menu__link', !x && P.menuExternalLink, { 'menu__link--active': p }, 'utrecht-link'), autoAddBaseUrl: m, 'aria-current': p ? 'page' : void 0, to: c, ...(x && { onClick: n ? () => n(t) : void 0 }), ...d, children: [u, !x && (0, b.jsx)(W.Z, {})] }) }, u);
   }
   function D(e) {
    let { item: t, ...n } = e;
    switch (t.type) {
     case 'category':
      return (0, b.jsx)(E, { item: t, ...n });
     case 'html':
      return (0, b.jsx)(F, { item: t, ...n });
     default:
      return (0, b.jsx)(V, { item: t, ...n });
    }
   }
   function z(e) {
    let { items: t, ...n } = e;
    return (0, b.jsx)(y, { children: t.map((e, t) => (0, b.jsx)(D, { item: e, index: t, ...n }, t)) });
   }
   const U = (0, a.memo)(z),
    G = { menu: 'menu_Y1UP', menuWithAnnouncementBar: 'menuWithAnnouncementBar_fPny' };
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
    return (0, b.jsx)('nav', { 'aria-label': (0, d.I)({ id: 'theme.docs.sidebar.navAriaLabel', message: 'Docs sidebar', description: 'The ARIA label for the sidebar navigation' }), className: (0, i.Z)('menu thin-scrollbar', G.menu, r && G.menuWithAnnouncementBar, o), children: (0, b.jsx)('ul', { className: (0, i.Z)(s.k.docs.docSidebarMenu, 'menu__list'), children: (0, b.jsx)(U, { items: n, activePath: t, level: 1 }) }) });
   }
   const O = { sidebar: 'sidebar_mhZE', sidebarWithHideableNavbar: 'sidebarWithHideableNavbar__6UL', sidebarHidden: 'sidebarHidden__LRd', sidebar__content: 'sidebar__content_LJMP', 'sidebar__content--hidden': 'sidebar__content--hidden_JLGr', 'sidebar__toggle-button': 'sidebar__toggle-button_CFx3', 'sidebar__toggle-button--icon-only': 'sidebar__toggle-button--icon-only_hRXq' };
   function Y(e) {
    let { path: t, sidebar: n, onCollapse: o, isHidden: s } = e;
    const {
      navbar: { hideOnScroll: r },
     } = (0, g.L)(),
     { isNavbarVisible: l } = (0, v.c)(r),
     d = (0, a.useId)();
    return (0, b.jsxs)('div', { className: (0, i.Z)(O.sidebar, r && O.sidebarWithHideableNavbar, s && O.sidebarHidden, l && O.sidebarWithNavbar), children: [(0, b.jsx)(M.zx, { appearance: 'subtle-button', onClick: o, className: (0, i.Z)(O['sidebar__toggle-button'], s && O['sidebar__toggle-button--icon-only']), 'aria-controls': d, 'aria-label': s ? 'Toon sidebar' : 'Verberg sidebar', 'aria-expanded': !s, children: s ? (0, b.jsx)(b.Fragment, { children: (0, b.jsx)(f, {}) }) : (0, b.jsxs)(b.Fragment, { children: [(0, b.jsx)(k, {}), ' Verberg'] }) }), (0, b.jsx)('div', { id: d, 'aria-expanded': !s, className: (0, i.Z)(O.sidebar__content, s && O['sidebar__content--hidden']), children: (0, b.jsx)(J, { path: t, sidebar: n }) })] });
   }
   const K = a.memo(Y);
   var q = n(27132),
    X = n(25596);
   const Q = (e) => {
    let { sidebar: t, path: n } = e;
    const a = (0, X.e)();
    return (0, b.jsx)('ul', {
     className: (0, i.Z)(s.k.docs.docSidebarMenu, 'menu__list'),
     children: (0, b.jsx)(U, {
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
    return (0, b.jsx)(q.Zo, { component: Q, props: e });
   }
   const ee = a.memo($);
   function te(e) {
    const t = (0, _.i)(),
     n = 'desktop' === t || 'ssr' === t,
     a = 'mobile' === t;
    return (0, b.jsxs)(b.Fragment, { children: [n && (0, b.jsx)(K, { ...e }), a && (0, b.jsx)(ee, { ...e })] });
   }
   function ne(e) {
    return (0, b.jsx)('svg', { width: '20', height: '20', 'aria-hidden': 'true', ...e, children: (0, b.jsxs)('g', { fill: '#7a7a7a', children: [(0, b.jsx)('path', { d: 'M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0' }), (0, b.jsx)('path', { d: 'M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0' })] }) });
   }
   const ae = { expandButton: 'expandButton_inbk', expandButtonIcon: 'expandButtonIcon_OBA1' };
   function ie(e) {
    let { toggleSidebar: t } = e;
    return (0, b.jsx)('div', { className: ae.expandButton, title: (0, d.I)({ id: 'theme.docs.sidebar.expandButtonTitle', message: 'Expand sidebar', description: 'The ARIA label and title attribute for expand button of doc sidebar' }), 'aria-label': (0, d.I)({ id: 'theme.docs.sidebar.expandButtonAriaLabel', message: 'Expand sidebar', description: 'The ARIA label and title attribute for expand button of doc sidebar' }), tabIndex: 0, role: 'button', onKeyDown: t, onClick: t, children: (0, b.jsx)(ne, { className: ae.expandButtonIcon }) });
   }
   const oe = { docSidebarContainer: 'docSidebarContainer_Kl_C', docSidebarContainerHidden: 'docSidebarContainerHidden_wpMJ', sidebarViewport: 'sidebarViewport_Av1C' };
   function se(e) {
    let { children: t } = e;
    const n = (0, l.V)();
    return (0, b.jsx)(a.Fragment, { children: t }, n?.name ?? 'noSidebar');
   }
   function re(e) {
    let { sidebar: t, hiddenSidebarContainer: n, setHiddenSidebarContainer: o } = e;
    const { pathname: r } = (0, x.TH)(),
     [l, d] = (0, a.useState)(!1),
     c = (0, a.useCallback)(() => {
      l && d(!1), !l && (0, p.n)() && d(!0), o((e) => !e);
     }, [o, l]);
    return (0, b.jsx)('aside', {
     className: (0, i.Z)(s.k.docs.docSidebarContainer, oe.docSidebarContainer, n && oe.docSidebarContainerHidden),
     onTransitionEnd: (e) => {
      e.currentTarget.classList.contains(oe.docSidebarContainer) && n && d(!0);
     },
     children: (0, b.jsx)(se, { children: (0, b.jsxs)('div', { className: (0, i.Z)(oe.sidebarViewport, l && oe.sidebarViewportHidden), children: [(0, b.jsx)(te, { sidebar: t, path: r, onCollapse: c, isHidden: l }), l && (0, b.jsx)(ie, { toggleSidebar: c })] }) }),
    });
   }
   const le = { docMainContainer: 'docMainContainer_I8lA', docMainContainerEnhanced: 'docMainContainerEnhanced_Do6G', docItemWrapperEnhanced: 'docItemWrapperEnhanced_MZ3t' };
   function de(e) {
    let { hiddenSidebarContainer: t, children: n } = e;
    const a = (0, l.V)();
    return (0, b.jsx)('main', { className: (0, i.Z)(le.docMainContainer, (t || !a) && le.docMainContainerEnhanced), children: (0, b.jsx)('div', { className: (0, i.Z)('container padding-top--md padding-bottom--lg', le.docItemWrapper, t && le.docItemWrapperEnhanced), children: n }) });
   }
   const ce = { docRoot: 'docRoot_uhSi', docsWrapper: 'docsWrapper_GG9F' };
   function ue(e) {
    let { children: t } = e;
    const n = (0, l.V)(),
     [i, o] = (0, a.useState)(!1);
    return (0, b.jsxs)('div', { className: ce.docsWrapper, children: [(0, b.jsx)(m, {}), (0, b.jsxs)('div', { className: ce.docRoot, children: [n && (0, b.jsx)(re, { sidebar: n.items, hiddenSidebarContainer: i, setHiddenSidebarContainer: o }), (0, b.jsx)(de, { hiddenSidebarContainer: i, children: t })] })] });
   }
   var he = n(72836);
   function be(e) {
    const t = (0, r.SN)(e);
    if (!t) return (0, b.jsx)(he.Z, {});
    const { docElement: n, sidebarName: a, sidebarItems: d } = t;
    return (0, b.jsx)(o.FG, { className: (0, i.Z)(s.k.page.docsDocPage), children: (0, b.jsx)(l.b, { name: a, items: d, children: (0, b.jsx)(ue, { children: n }) }) });
   }
  },
  72836: (e, t, n) => {
   n.d(t, { Z: () => r });
   n(75271);
   var a = n(4814),
    i = n(7512),
    o = n(91725),
    s = n(52676);
   function r(e) {
    let { className: t } = e;
    return (0, s.jsx)('main', { className: (0, a.Z)('container margin-vert--xl', t), children: (0, s.jsx)('div', { className: 'row', children: (0, s.jsxs)('div', { className: 'col col--6 col--offset-3', children: [(0, s.jsx)(o.Z, { as: 'h1', className: 'hero__title', children: (0, s.jsx)(i.Z, { id: 'theme.NotFound.title', description: 'The title of the 404 page', children: 'Page Not Found' }) }), (0, s.jsx)('p', { children: (0, s.jsx)(i.Z, { id: 'theme.NotFound.p1', description: 'The first paragraph of the 404 page', children: 'We could not find what you were looking for.' }) }), (0, s.jsx)('p', { children: (0, s.jsx)(i.Z, { id: 'theme.NotFound.p2', description: 'The 2nd paragraph of the 404 page', children: 'Please contact the owner of the site that linked you to the original URL and let them know their link is broken.' }) })] }) }) });
   }
  },
 },
]);
