'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94368],
 {
  62346: (e, t, n) => {
   n.r(t), n.d(t, { default: () => ce });
   var a = n(75271),
    o = n(4814),
    i = n(14225),
    s = n(65697),
    r = n(73436),
    l = n(3559),
    c = n(40217),
    d = n(86697),
    u = n(8853);
   const h = { backToTopButton: 'backToTopButton_y2Un', backToTopButtonShow: 'backToTopButtonShow_iBPc' };
   var m = n(52676);
   function b() {
    const { shown: e, scrollToTop: t } = (function (e) {
     let { threshold: t } = e;
     const [n, o] = (0, a.useState)(!1),
      i = (0, a.useRef)(!1),
      { startScroll: s, cancelScroll: r } = (0, d.Ct)();
     return (
      (0, d.RF)((e, n) => {
       let { scrollY: a } = e;
       const s = n?.scrollY;
       s && (i.current ? (i.current = !1) : a >= s ? (r(), o(!1)) : a < t ? o(!1) : a + window.innerHeight < document.documentElement.scrollHeight && o(!0));
      }),
      (0, u.S)((e) => {
       e.location.hash && ((i.current = !0), o(!1));
      }),
      { shown: n, scrollToTop: () => s(0) }
     );
    })({ threshold: 300 });
    return (0, m.jsx)('button', { 'aria-label': (0, c.I)({ id: 'theme.BackToTopButton.buttonAriaLabel', message: 'Scroll back to top', description: 'The ARIA label for the back to top button' }), className: (0, o.Z)('clean-btn', s.k.common.backToTopButton, h.backToTopButton, e && h.backToTopButtonShow), type: 'button', onClick: t });
   }
   var p = n(48539),
    x = n(87573),
    g = n(68175),
    j = n(72929),
    v = n(76529),
    k = n(72315),
    f = (0, k.Z)('outline', 'arrow-bar-to-left', 'IconArrowBarToLeft', [
     ['path', { d: 'M10 12l10 0', key: 'svg-0' }],
     ['path', { d: 'M10 12l4 4', key: 'svg-1' }],
     ['path', { d: 'M10 12l4 -4', key: 'svg-2' }],
     ['path', { d: 'M4 4l0 16', key: 'svg-3' }],
    ]),
    _ = (0, k.Z)('outline', 'arrow-bar-to-right', 'IconArrowBarToRight', [
     ['path', { d: 'M14 12l-10 0', key: 'svg-0' }],
     ['path', { d: 'M14 12l-4 4', key: 'svg-1' }],
     ['path', { d: 'M14 12l-4 -4', key: 'svg-2' }],
     ['path', { d: 'M20 4l0 16', key: 'svg-3' }],
    ]),
    C = n(74326),
    S = n(40465);
   const I = Symbol('EmptyContext'),
    N = a.createContext(I);
   function y(e) {
    let { children: t } = e;
    const [n, o] = (0, a.useState)(null),
     i = (0, a.useMemo)(() => ({ expandedItem: n, setExpandedItem: o }), [n]);
    return (0, m.jsx)(N.Provider, { value: i, children: t });
   }
   var T = n(57229),
    Z = n(96401),
    w = n(97674),
    M = (0, k.Z)('outline', 'chevron-down', 'IconChevronDown', [['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]]),
    A = (0, k.Z)('outline', 'chevron-up', 'IconChevronUp', [['path', { d: 'M6 15l6 -6l6 6', key: 'svg-0' }]]),
    B = n(16167);
   function L(e) {
    let { categoryLabel: t, collapsed: n, onClick: a } = e;
    return (0, m.jsx)(B.zx, { appearance: 'subtle-button', 'aria-label': (0, c.I)({ id: 'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel', message: "Toggle the collapsible sidebar category '{label}'", description: 'The ARIA label to toggle the collapsible sidebar category' }, { label: t }), type: 'button', className: 'clean-btn', onClick: a, children: (0, m.jsx)(B.JO, { children: n ? (0, m.jsx)(M, {}) : (0, m.jsx)(A, {}) }) });
   }
   function E(e) {
    let { item: t, onItemClick: n, activePath: i, level: l, index: c, ...d } = e;
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
     f = (0, r._F)(t, i),
     { collapsed: _, setCollapsed: C } = (0, Z.u)({ initialState: () => !!b && !f && t.collapsed }),
     { expandedItem: y, setExpandedItem: M } = (function () {
      const e = (0, a.useContext)(N);
      if (e === I) throw new S.i6('DocSidebarItemsExpandedStateProvider');
      return e;
     })(),
     A = function (e) {
      void 0 === e && (e = !_), M(e ? null : c), C(e);
     };
    return (
     (function (e) {
      let { isActive: t, collapsed: n, updateCollapsed: o } = e;
      const i = (0, S.D9)(t);
      (0, a.useEffect)(() => {
       t && !i && n && o(!1);
      }, [t, i, n, o]);
     })({ isActive: f, collapsed: _, updateCollapsed: A }),
     (0, a.useEffect)(() => {
      b && null != y && y !== c && v && C(!0);
     }, [b, y, c, C, v]),
     (0, m.jsxs)('li', {
      className: (0, o.Z)(s.k.docs.docSidebarItemCategory, s.k.docs.docSidebarItemCategoryLevel(l), 'menu__list-item', { 'menu__list-item--collapsed': _ }),
      children: [
       (0, m.jsxs)('div', {
        className: (0, o.Z)('menu__list-item-collapsible', { 'sidebar__main-category': g }),
        children: [
         g ? h : (0, m.jsx)(T.r, { className: (0, o.Z)('menu__link', 'utrecht-link', { 'menu__link--sublist': b, 'menu__link--sublist-caret': !x && b }), href: b ? (k ?? '#') : k, ...d, children: h }),
         x &&
          b &&
          (0, m.jsx)(L, {
           categoryLabel: h,
           onClick: (e) => {
            e.preventDefault(), A();
           },
           collapsed: _,
          }),
        ],
       }),
       (0, m.jsx)(Z.z, { lazy: !0, as: 'ul', className: 'menu__list', collapsed: _, children: (0, m.jsx)(D, { items: u, tabIndex: _ ? -1 : 0, onItemClick: n, activePath: i, level: l + 1 }) }),
      ],
     })
    );
   }
   function H(e) {
    let { item: t, level: n, index: a } = e;
    const { value: i, defaultStyle: r, className: l } = t;
    return (0, m.jsx)('li', { className: (0, o.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(n), r && ['menuHtmlItem', 'menu__list-item'], l), dangerouslySetInnerHTML: { __html: i } }, a);
   }
   var R = n(98986),
    F = n(53968);
   function P(e) {
    let { item: t, onItemClick: n, activePath: a, level: i, index: l, ...c } = e;
    const { href: d, label: u, className: h, autoAddBaseUrl: b } = t,
     p = (0, r._F)(t, a),
     x = (0, R.Z)(d);
    return (0, m.jsx)('li', { className: (0, o.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(i), 'menu__list-item', h), children: (0, m.jsxs)(T.r, { className: (0, o.Z)('menu__link', !x && 'menuExternalLink', { 'menu__link--active': p }, 'utrecht-link'), autoAddBaseUrl: b, 'aria-current': p ? 'page' : void 0, to: d, ...(x && { onClick: n ? () => n(t) : void 0 }), ...c, children: [u, !x && (0, m.jsx)(F.Z, {})] }) }, u);
   }
   function V(e) {
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
   function W(e) {
    let { items: t, ...n } = e;
    return (0, m.jsx)(y, { children: t.map((e, t) => (0, m.jsx)(V, { item: e, index: t, ...n }, t)) });
   }
   const D = (0, a.memo)(W);
   function U(e) {
    let { path: t, sidebar: n, className: i } = e;
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
    return (0, m.jsx)('nav', { 'aria-label': (0, c.I)({ id: 'theme.docs.sidebar.navAriaLabel', message: 'Docs sidebar', description: 'The ARIA label for the sidebar navigation' }), className: (0, o.Z)('menu thin-scrollbar', 'menu', r && 'menuWithAnnouncementBar', i), children: (0, m.jsx)('ul', { className: (0, o.Z)(s.k.docs.docSidebarMenu, 'menu__list'), children: (0, m.jsx)(D, { items: n, activePath: t, level: 1 }) }) });
   }
   function z(e) {
    let { path: t, sidebar: n, onCollapse: i, isHidden: s } = e;
    const {
      navbar: { hideOnScroll: r },
     } = (0, j.L)(),
     { isNavbarVisible: l } = (0, v.c)(r),
     c = (0, a.useId)();
    return (0, m.jsxs)('div', { className: (0, o.Z)('sidebar', r && 'sidebarWithHideableNavbar', s && 'sidebarHidden', l && 'sidebarWithNavbar'), children: [(0, m.jsx)(B.zx, { appearance: 'subtle-button', onClick: i, className: (0, o.Z)('sidebar__toggle-button', s && 'sidebar__toggle-button--icon-only'), 'aria-controls': c, 'aria-label': s ? 'Toon sidebar' : 'Verberg sidebar', 'aria-expanded': !s, children: s ? (0, m.jsx)(m.Fragment, { children: (0, m.jsx)(_, {}) }) : (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(f, {}), ' Verberg'] }) }), (0, m.jsx)('div', { id: c, className: (0, o.Z)('sidebar__content', s && 'sidebar__content--hidden'), children: (0, m.jsx)(U, { path: t, sidebar: n }) })] });
   }
   const q = a.memo(z);
   var Y = n(74069),
    K = n(74234);
   const O = (e) => {
    let { sidebar: t, path: n } = e;
    const a = (0, K.e)();
    return (0, m.jsx)('ul', {
     className: (0, o.Z)(s.k.docs.docSidebarMenu, 'menu__list'),
     children: (0, m.jsx)(D, {
      items: t,
      activePath: n,
      onItemClick: (e) => {
       'category' === e.type && e.href && a.toggle(), 'link' === e.type && a.toggle();
      },
      level: 1,
     }),
    });
   };
   function G(e) {
    return (0, m.jsx)(Y.Zo, { component: O, props: e });
   }
   const J = (0, a.memo)(G);
   function Q(e) {
    const t = (0, g.i)(),
     n = 'desktop' === t || 'ssr' === t,
     a = 'mobile' === t;
    return (0, m.jsxs)(m.Fragment, { children: [n && (0, m.jsx)(q, { ...e }), a && (0, m.jsx)(J, { ...e })] });
   }
   function X(e) {
    return (0, m.jsx)('svg', { width: '20', height: '20', 'aria-hidden': 'true', ...e, children: (0, m.jsxs)('g', { fill: '#7a7a7a', children: [(0, m.jsx)('path', { d: 'M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0' }), (0, m.jsx)('path', { d: 'M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0' })] }) });
   }
   const $ = { expandButton: 'expandButton_HE0P', expandButtonIcon: 'expandButtonIcon_q8m8' };
   function ee(e) {
    let { toggleSidebar: t } = e;
    return (0, m.jsx)('div', { className: $.expandButton, title: (0, c.I)({ id: 'theme.docs.sidebar.expandButtonTitle', message: 'Expand sidebar', description: 'The ARIA label and title attribute for expand button of doc sidebar' }), 'aria-label': (0, c.I)({ id: 'theme.docs.sidebar.expandButtonAriaLabel', message: 'Expand sidebar', description: 'The ARIA label and title attribute for expand button of doc sidebar' }), tabIndex: 0, role: 'button', onKeyDown: t, onClick: t, children: (0, m.jsx)(X, { className: $.expandButtonIcon }) });
   }
   const te = { docSidebarContainer: 'docSidebarContainer_xdMa', docSidebarContainerHidden: 'docSidebarContainerHidden_Vqoh', sidebarViewport: 'sidebarViewport_qyvf' };
   function ne(e) {
    let { children: t } = e;
    const n = (0, l.V)();
    return (0, m.jsx)(a.Fragment, { children: t }, n?.name ?? 'noSidebar');
   }
   function ae(e) {
    let { sidebar: t, hiddenSidebarContainer: n, setHiddenSidebarContainer: i } = e;
    const { pathname: r } = (0, x.TH)(),
     [l, c] = (0, a.useState)(!1),
     d = (0, a.useCallback)(() => {
      l && c(!1), !l && (0, p.n)() && c(!0), i((e) => !e);
     }, [i, l]);
    return (0, m.jsx)('aside', {
     className: (0, o.Z)(s.k.docs.docSidebarContainer, te.docSidebarContainer, n && te.docSidebarContainerHidden),
     onTransitionEnd: (e) => {
      e.currentTarget.classList.contains(te.docSidebarContainer) && n && c(!0);
     },
     children: (0, m.jsx)(ne, { children: (0, m.jsxs)('div', { className: (0, o.Z)(te.sidebarViewport, l && te.sidebarViewportHidden), children: [(0, m.jsx)(Q, { sidebar: t, path: r, onCollapse: d, isHidden: l }), l && (0, m.jsx)(ee, { toggleSidebar: d })] }) }),
    });
   }
   const oe = { docMainContainer: 'docMainContainer_HqCc', docMainContainerEnhanced: 'docMainContainerEnhanced_RU3U', docItemWrapperEnhanced: 'docItemWrapperEnhanced_FRKU' };
   function ie(e) {
    let { hiddenSidebarContainer: t, children: n } = e;
    const a = (0, l.V)();
    return (0, m.jsx)('main', { className: (0, o.Z)(oe.docMainContainer, (t || !a) && oe.docMainContainerEnhanced), children: (0, m.jsx)('div', { className: (0, o.Z)('container padding-top--md padding-bottom--lg', oe.docItemWrapper, t && oe.docItemWrapperEnhanced), children: n }) });
   }
   const se = { docRoot: 'docRoot_kCcV', docsWrapper: 'docsWrapper_Dh2W' };
   function re(e) {
    let { children: t } = e;
    const n = (0, l.V)(),
     [o, i] = (0, a.useState)(!1);
    return (0, m.jsxs)('div', { className: se.docsWrapper, children: [(0, m.jsx)(b, {}), (0, m.jsxs)('div', { className: se.docRoot, children: [n && (0, m.jsx)(ae, { sidebar: n.items, hiddenSidebarContainer: o, setHiddenSidebarContainer: i }), (0, m.jsx)(ie, { hiddenSidebarContainer: o, children: t })] })] });
   }
   var le = n(58049);
   function ce(e) {
    const t = (0, r.SN)(e);
    if (!t) return (0, m.jsx)(le.Z, {});
    const { docElement: n, sidebarName: a, sidebarItems: c } = t;
    return (0, m.jsx)(i.FG, { className: (0, o.Z)(s.k.page.docsDocPage), children: (0, m.jsx)(l.b, { name: a, items: c, children: (0, m.jsx)(re, { children: n }) }) });
   }
  },
  58049: (e, t, n) => {
   n.d(t, { Z: () => r });
   n(75271);
   var a = n(4814),
    o = n(40217),
    i = n(6709),
    s = n(52676);
   function r(e) {
    let { className: t } = e;
    return (0, s.jsx)('main', { className: (0, a.Z)('container margin-vert--xl', t), children: (0, s.jsx)('div', { className: 'row', children: (0, s.jsxs)('div', { className: 'col col--6 col--offset-3', children: [(0, s.jsx)(i.Z, { as: 'h1', className: 'hero__title', children: (0, s.jsx)(o.Z, { id: 'theme.NotFound.title', description: 'The title of the 404 page', children: 'Page Not Found' }) }), (0, s.jsx)('p', { children: (0, s.jsx)(o.Z, { id: 'theme.NotFound.p1', description: 'The first paragraph of the 404 page', children: 'We could not find what you were looking for.' }) }), (0, s.jsx)('p', { children: (0, s.jsx)(o.Z, { id: 'theme.NotFound.p2', description: 'The 2nd paragraph of the 404 page', children: 'Please contact the owner of the site that linked you to the original URL and let them know their link is broken.' }) })] }) }) });
   }
  },
 },
]);
