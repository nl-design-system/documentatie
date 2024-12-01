'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94368],
 {
  68428: (e, t, n) => {
   n.r(t), n.d(t, { default: () => ce });
   var a = n(75271),
    i = n(4814),
    o = n(43023),
    s = n(51229),
    r = n(13894),
    l = n(54963),
    c = n(23818),
    d = n(32566),
    u = n(12769);
   const h = { backToTopButton: 'backToTopButton_fuSd', backToTopButtonShow: 'backToTopButtonShow_lPq4' };
   var m = n(52676);
   function b() {
    const { shown: e, scrollToTop: t } = (function (e) {
     let { threshold: t } = e;
     const [n, i] = (0, a.useState)(!1),
      o = (0, a.useRef)(!1),
      { startScroll: s, cancelScroll: r } = (0, d.Ct)();
     return (
      (0, d.RF)((e, n) => {
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
    return (0, m.jsx)('button', { 'aria-label': (0, c.I)({ id: 'theme.BackToTopButton.buttonAriaLabel', message: 'Scroll back to top', description: 'The ARIA label for the back to top button' }), className: (0, i.Z)('clean-btn', s.k.common.backToTopButton, h.backToTopButton, e && h.backToTopButtonShow), type: 'button', onClick: t });
   }
   var p = n(55004),
    x = n(58610),
    g = n(33773),
    j = n(38723),
    v = n(34289),
    k = n(69804),
    _ = (0, k.Z)('outline', 'arrow-bar-to-left', 'IconArrowBarToLeft', [
     ['path', { d: 'M10 12l10 0', key: 'svg-0' }],
     ['path', { d: 'M10 12l4 4', key: 'svg-1' }],
     ['path', { d: 'M10 12l4 -4', key: 'svg-2' }],
     ['path', { d: 'M4 4l0 16', key: 'svg-3' }],
    ]),
    f = (0, k.Z)('outline', 'arrow-bar-to-right', 'IconArrowBarToRight', [
     ['path', { d: 'M14 12l-10 0', key: 'svg-0' }],
     ['path', { d: 'M14 12l-4 4', key: 'svg-1' }],
     ['path', { d: 'M14 12l-4 -4', key: 'svg-2' }],
     ['path', { d: 'M20 4l0 16', key: 'svg-3' }],
    ]),
    C = n(97034),
    S = n(76403);
   const I = Symbol('EmptyContext'),
    N = a.createContext(I);
   function T(e) {
    let { children: t } = e;
    const [n, i] = (0, a.useState)(null),
     o = (0, a.useMemo)(() => ({ expandedItem: n, setExpandedItem: i }), [n]);
    return (0, m.jsx)(N.Provider, { value: o, children: t });
   }
   var y = n(95071),
    Z = n(81818),
    w = n(5312),
    A = (0, k.Z)('outline', 'chevron-down', 'IconChevronDown', [['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]]),
    M = (0, k.Z)('outline', 'chevron-up', 'IconChevronUp', [['path', { d: 'M6 15l6 -6l6 6', key: 'svg-0' }]]),
    L = n(31916);
   function B(e) {
    let { categoryLabel: t, collapsed: n, onClick: a } = e;
    return (0, m.jsx)(L.zx, { appearance: 'subtle-button', 'aria-label': (0, c.I)({ id: 'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel', message: "Toggle the collapsible sidebar category '{label}'", description: 'The ARIA label to toggle the collapsible sidebar category' }, { label: t }), type: 'button', className: 'clean-btn', onClick: a, children: (0, m.jsx)(L.JO, { children: n ? (0, m.jsx)(A, {}) : (0, m.jsx)(M, {}) }) });
   }
   function E(e) {
    let { item: t, onItemClick: n, activePath: o, level: l, index: c, ...d } = e;
    const { items: u, label: h, collapsible: b, className: p, href: x } = t,
     g = 'sidebar__main-category' === p,
     {
      docs: {
       sidebar: { autoCollapseCategories: v },
      },
     } = (0, j.L)(),
     k = (function (e) {
      const t = (0, w.Z)();
      return (0, a.useMemo)(() => (e.href ? e.href : !t && e.collapsible ? (0, r.LM)(e) : void 0), [e, t]);
     })(t),
     _ = (0, r._F)(t, o),
     { collapsed: f, setCollapsed: C } = (0, Z.u)({ initialState: () => !!b && !_ && t.collapsed }),
     { expandedItem: T, setExpandedItem: A } = (function () {
      const e = (0, a.useContext)(N);
      if (e === I) throw new S.i6('DocSidebarItemsExpandedStateProvider');
      return e;
     })(),
     M = function (e) {
      void 0 === e && (e = !f), A(e ? null : c), C(e);
     };
    return (
     (function (e) {
      let { isActive: t, collapsed: n, updateCollapsed: i } = e;
      const o = (0, S.D9)(t);
      (0, a.useEffect)(() => {
       t && !o && n && i(!1);
      }, [t, o, n, i]);
     })({ isActive: _, collapsed: f, updateCollapsed: M }),
     (0, a.useEffect)(() => {
      b && null != T && T !== c && v && C(!0);
     }, [b, T, c, C, v]),
     (0, m.jsxs)('li', {
      className: (0, i.Z)(s.k.docs.docSidebarItemCategory, s.k.docs.docSidebarItemCategoryLevel(l), 'menu__list-item', { 'menu__list-item--collapsed': f }),
      children: [
       (0, m.jsxs)('div', {
        className: (0, i.Z)('menu__list-item-collapsible', { 'sidebar__main-category': g }),
        children: [
         g ? h : (0, m.jsx)(y.Z, { className: (0, i.Z)('menu__link', 'utrecht-link', { 'menu__link--sublist': b, 'menu__link--sublist-caret': !x && b }), href: b ? (k ?? '#') : k, ...d, children: h }),
         x &&
          b &&
          (0, m.jsx)(B, {
           categoryLabel: h,
           onClick: (e) => {
            e.preventDefault(), M();
           },
           collapsed: f,
          }),
        ],
       }),
       (0, m.jsx)(Z.z, { lazy: !0, as: 'ul', className: 'menu__list', collapsed: f, children: (0, m.jsx)(V, { items: u, tabIndex: f ? -1 : 0, onItemClick: n, activePath: o, level: l + 1 }) }),
      ],
     })
    );
   }
   function H(e) {
    let { item: t, level: n, index: a } = e;
    const { value: o, defaultStyle: r, className: l } = t;
    return (0, m.jsx)('li', { className: (0, i.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(n), r && ['menuHtmlItem', 'menu__list-item'], l), dangerouslySetInnerHTML: { __html: o } }, a);
   }
   var F = n(39936),
    R = n(33793);
   function P(e) {
    let { item: t, onItemClick: n, activePath: a, level: o, index: l, ...c } = e;
    const { href: d, label: u, className: h, autoAddBaseUrl: b } = t,
     p = (0, r._F)(t, a),
     x = (0, F.Z)(d);
    return (0, m.jsx)('li', { className: (0, i.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(o), 'menu__list-item', h), children: (0, m.jsxs)(y.Z, { className: (0, i.Z)('menu__link', !x && 'menuExternalLink', { 'menu__link--active': p }, 'utrecht-link'), autoAddBaseUrl: b, 'aria-current': p ? 'page' : void 0, to: d, ...(x && { onClick: n ? () => n(t) : void 0 }), ...c, children: [u, !x && (0, m.jsx)(R.Z, {})] }) }, u);
   }
   function W(e) {
    let { item: t, ...n } = e;
    switch (t.type) {
     case 'category':
      return (0, m.jsx)(E, { item: t, ...n });
     case 'html':
      return (0, m.jsx)(H, { item: t, ...n });
     default:
      return (0, m.jsx)(P, { item: t, ...n });
    }
   }
   function D(e) {
    let { items: t, ...n } = e;
    return (0, m.jsx)(T, { children: t.map((e, t) => (0, m.jsx)(W, { item: e, index: t, ...n }, t)) });
   }
   const V = (0, a.memo)(D);
   function U(e) {
    let { path: t, sidebar: n, className: o } = e;
    const r = (function () {
     const { isActive: e } = (0, C.nT)(),
      [t, n] = (0, a.useState)(e);
     return (
      (0, d.RF)(
       (t) => {
        let { scrollY: a } = t;
        e && n(0 === a);
       },
       [e],
      ),
      e && t
     );
    })();
    return (0, m.jsx)('nav', { 'aria-label': (0, c.I)({ id: 'theme.docs.sidebar.navAriaLabel', message: 'Docs sidebar', description: 'The ARIA label for the sidebar navigation' }), className: (0, i.Z)('menu thin-scrollbar', 'menu', r && 'menuWithAnnouncementBar', o), children: (0, m.jsx)('ul', { className: (0, i.Z)(s.k.docs.docSidebarMenu, 'menu__list'), children: (0, m.jsx)(V, { items: n, activePath: t, level: 1 }) }) });
   }
   function z(e) {
    let { path: t, sidebar: n, onCollapse: o, isHidden: s } = e;
    const {
      navbar: { hideOnScroll: r },
     } = (0, j.L)(),
     { isNavbarVisible: l } = (0, v.c)(r),
     c = (0, a.useId)();
    return (0, m.jsxs)('div', { className: (0, i.Z)('sidebar', r && 'sidebarWithHideableNavbar', s && 'sidebarHidden', l && 'sidebarWithNavbar'), children: [(0, m.jsx)(L.zx, { appearance: 'subtle-button', onClick: o, className: (0, i.Z)('sidebar__toggle-button', s && 'sidebar__toggle-button--icon-only'), 'aria-controls': c, 'aria-label': s ? 'Toon sidebar' : 'Verberg sidebar', 'aria-expanded': !s, children: s ? (0, m.jsx)(m.Fragment, { children: (0, m.jsx)(f, {}) }) : (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(_, {}), ' Verberg'] }) }), (0, m.jsx)('div', { id: c, 'aria-expanded': !s, className: (0, i.Z)('sidebar__content', s && 'sidebar__content--hidden'), children: (0, m.jsx)(U, { path: t, sidebar: n }) })] });
   }
   const Y = a.memo(z);
   var G = n(773),
    O = n(47769);
   const q = (e) => {
    let { sidebar: t, path: n } = e;
    const a = (0, O.e)();
    return (0, m.jsx)('ul', {
     className: (0, i.Z)(s.k.docs.docSidebarMenu, 'menu__list'),
     children: (0, m.jsx)(V, {
      items: t,
      activePath: n,
      onItemClick: (e) => {
       'category' === e.type && e.href && a.toggle(), 'link' === e.type && a.toggle();
      },
      level: 1,
     }),
    });
   };
   function J(e) {
    return (0, m.jsx)(G.Zo, { component: q, props: e });
   }
   const K = (0, a.memo)(J);
   function Q(e) {
    const t = (0, g.i)(),
     n = 'desktop' === t || 'ssr' === t,
     a = 'mobile' === t;
    return (0, m.jsxs)(m.Fragment, { children: [n && (0, m.jsx)(Y, { ...e }), a && (0, m.jsx)(K, { ...e })] });
   }
   function X(e) {
    return (0, m.jsx)('svg', { width: '20', height: '20', 'aria-hidden': 'true', ...e, children: (0, m.jsxs)('g', { fill: '#7a7a7a', children: [(0, m.jsx)('path', { d: 'M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0' }), (0, m.jsx)('path', { d: 'M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0' })] }) });
   }
   const $ = { expandButton: 'expandButton_DUDF', expandButtonIcon: 'expandButtonIcon_m5kA' };
   function ee(e) {
    let { toggleSidebar: t } = e;
    return (0, m.jsx)('div', { className: $.expandButton, title: (0, c.I)({ id: 'theme.docs.sidebar.expandButtonTitle', message: 'Expand sidebar', description: 'The ARIA label and title attribute for expand button of doc sidebar' }), 'aria-label': (0, c.I)({ id: 'theme.docs.sidebar.expandButtonAriaLabel', message: 'Expand sidebar', description: 'The ARIA label and title attribute for expand button of doc sidebar' }), tabIndex: 0, role: 'button', onKeyDown: t, onClick: t, children: (0, m.jsx)(X, { className: $.expandButtonIcon }) });
   }
   const te = { docSidebarContainer: 'docSidebarContainer_UTTr', docSidebarContainerHidden: 'docSidebarContainerHidden_CXE_', sidebarViewport: 'sidebarViewport_h2ZS' };
   function ne(e) {
    let { children: t } = e;
    const n = (0, l.V)();
    return (0, m.jsx)(a.Fragment, { children: t }, n?.name ?? 'noSidebar');
   }
   function ae(e) {
    let { sidebar: t, hiddenSidebarContainer: n, setHiddenSidebarContainer: o } = e;
    const { pathname: r } = (0, x.TH)(),
     [l, c] = (0, a.useState)(!1),
     d = (0, a.useCallback)(() => {
      l && c(!1), !l && (0, p.n)() && c(!0), o((e) => !e);
     }, [o, l]);
    return (0, m.jsx)('aside', {
     className: (0, i.Z)(s.k.docs.docSidebarContainer, te.docSidebarContainer, n && te.docSidebarContainerHidden),
     onTransitionEnd: (e) => {
      e.currentTarget.classList.contains(te.docSidebarContainer) && n && c(!0);
     },
     children: (0, m.jsx)(ne, { children: (0, m.jsxs)('div', { className: (0, i.Z)(te.sidebarViewport, l && te.sidebarViewportHidden), children: [(0, m.jsx)(Q, { sidebar: t, path: r, onCollapse: d, isHidden: l }), l && (0, m.jsx)(ee, { toggleSidebar: d })] }) }),
    });
   }
   const ie = { docMainContainer: 'docMainContainer_ogxn', docMainContainerEnhanced: 'docMainContainerEnhanced_Ati8', docItemWrapperEnhanced: 'docItemWrapperEnhanced_ATUG' };
   function oe(e) {
    let { hiddenSidebarContainer: t, children: n } = e;
    const a = (0, l.V)();
    return (0, m.jsx)('main', { className: (0, i.Z)(ie.docMainContainer, (t || !a) && ie.docMainContainerEnhanced), children: (0, m.jsx)('div', { className: (0, i.Z)('container padding-top--md padding-bottom--lg', ie.docItemWrapper, t && ie.docItemWrapperEnhanced), children: n }) });
   }
   const se = { docRoot: 'docRoot_ZQ8x', docsWrapper: 'docsWrapper_Sitb' };
   function re(e) {
    let { children: t } = e;
    const n = (0, l.V)(),
     [i, o] = (0, a.useState)(!1);
    return (0, m.jsxs)('div', { className: se.docsWrapper, children: [(0, m.jsx)(b, {}), (0, m.jsxs)('div', { className: se.docRoot, children: [n && (0, m.jsx)(ae, { sidebar: n.items, hiddenSidebarContainer: i, setHiddenSidebarContainer: o }), (0, m.jsx)(oe, { hiddenSidebarContainer: i, children: t })] })] });
   }
   var le = n(96399);
   function ce(e) {
    const t = (0, r.SN)(e);
    if (!t) return (0, m.jsx)(le.Z, {});
    const { docElement: n, sidebarName: a, sidebarItems: c } = t;
    return (0, m.jsx)(o.FG, { className: (0, i.Z)(s.k.page.docsDocPage), children: (0, m.jsx)(l.b, { name: a, items: c, children: (0, m.jsx)(re, { children: n }) }) });
   }
  },
  96399: (e, t, n) => {
   n.d(t, { Z: () => r });
   n(75271);
   var a = n(4814),
    i = n(23818),
    o = n(80889),
    s = n(52676);
   function r(e) {
    let { className: t } = e;
    return (0, s.jsx)('main', { className: (0, a.Z)('container margin-vert--xl', t), children: (0, s.jsx)('div', { className: 'row', children: (0, s.jsxs)('div', { className: 'col col--6 col--offset-3', children: [(0, s.jsx)(o.Z, { as: 'h1', className: 'hero__title', children: (0, s.jsx)(i.Z, { id: 'theme.NotFound.title', description: 'The title of the 404 page', children: 'Page Not Found' }) }), (0, s.jsx)('p', { children: (0, s.jsx)(i.Z, { id: 'theme.NotFound.p1', description: 'The first paragraph of the 404 page', children: 'We could not find what you were looking for.' }) }), (0, s.jsx)('p', { children: (0, s.jsx)(i.Z, { id: 'theme.NotFound.p2', description: 'The 2nd paragraph of the 404 page', children: 'Please contact the owner of the site that linked you to the original URL and let them know their link is broken.' }) })] }) }) });
   }
  },
 },
]);
