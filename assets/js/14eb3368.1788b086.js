'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9817],
 {
  79924: (e, s, t) => {
   t.d(s, { Z: () => j });
   t(75271);
   var n = t(4814),
    i = t(52035),
    a = t(17542),
    r = t(46725),
    l = t(44679),
    c = t(42800),
    o = t(95765),
    d = t(52676);
   function m(e) {
    return (0, d.jsx)('svg', { viewBox: '0 0 24 24', ...e, children: (0, d.jsx)('path', { d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z', fill: 'currentColor' }) });
   }
   const h = { breadcrumbHomeIcon: 'breadcrumbHomeIcon_FTKm' };
   function u() {
    const e = (0, o.Z)('/');
    return (0, d.jsx)('li', { className: 'breadcrumbs__item', children: (0, d.jsx)(l.Z, { 'aria-label': (0, c.I)({ id: 'theme.docs.breadcrumbs.home', message: 'Home page', description: 'The ARIA label for the home page in the breadcrumbs' }), className: 'breadcrumbs__link', href: e, children: (0, d.jsx)(m, { className: h.breadcrumbHomeIcon }) }) });
   }
   const b = { breadcrumbsContainer: 'breadcrumbsContainer_QqW2' };
   function x(e) {
    let { children: s, href: t, isLast: n } = e;
    const i = 'breadcrumbs__link';
    return n ? (0, d.jsx)('span', { className: i, itemProp: 'name', children: s }) : t ? (0, d.jsx)(l.Z, { className: i, href: t, itemProp: 'item', children: (0, d.jsx)('span', { itemProp: 'name', children: s }) }) : (0, d.jsx)('span', { className: i, children: s });
   }
   function v(e) {
    let { children: s, active: t, index: i, addMicrodata: a } = e;
    return (0, d.jsxs)('li', { ...(a && { itemScope: !0, itemProp: 'itemListElement', itemType: 'https://schema.org/ListItem' }), className: (0, n.Z)('breadcrumbs__item', { 'breadcrumbs__item--active': t }), children: [s, (0, d.jsx)('meta', { itemProp: 'position', content: String(i + 1) })] });
   }
   function j() {
    const e = (0, a.s1)(),
     s = (0, r.Ns)();
    return e
     ? (0, d.jsx)('nav', {
        className: (0, n.Z)(i.k.docs.docBreadcrumbs, b.breadcrumbsContainer),
        'aria-label': (0, c.I)({ id: 'theme.docs.breadcrumbs.navAriaLabel', message: 'Breadcrumbs', description: 'The ARIA label for the breadcrumbs' }),
        children: (0, d.jsxs)('ul', {
         className: 'breadcrumbs',
         itemScope: !0,
         itemType: 'https://schema.org/BreadcrumbList',
         children: [
          s && (0, d.jsx)(u, {}),
          e.map((s, t) => {
           const n = t === e.length - 1,
            i = 'category' === s.type && s.linkUnlisted ? void 0 : s.href;
           return (0, d.jsx)(v, { active: n, index: t, addMicrodata: !!i, children: (0, d.jsx)(x, { href: i, isLast: n, children: s.label }) }, t);
          }),
         ],
        }),
       })
     : null;
   }
  },
  10374: (e, s, t) => {
   t.r(s), t.d(s, { default: () => v });
   t(75271);
   var n = t(69378),
    i = t(17542),
    a = t(95765),
    r = t(39772),
    l = t(69051),
    c = t(96097),
    o = t(99312),
    d = t(79924),
    m = t(34893);
   const h = { generatedIndexPage: 'generatedIndexPage_bWxL', list: 'list_jG5X', title: 'title_e6ks' };
   var u = t(52676);
   function b(e) {
    let { categoryGeneratedIndex: s } = e;
    return (0, u.jsx)(n.d, { title: s.title, description: s.description, keywords: s.keywords, image: (0, a.Z)(s.image) });
   }
   function x(e) {
    let { categoryGeneratedIndex: s } = e;
    const t = (0, i.jA)();
    return (0, u.jsxs)('div', { className: h.generatedIndexPage, children: [(0, u.jsx)(c.Z, {}), (0, u.jsx)(d.Z, {}), (0, u.jsx)(o.Z, {}), (0, u.jsxs)('header', { children: [(0, u.jsx)(m.Z, { as: 'h1', className: h.title, children: s.title }), s.description && (0, u.jsx)('p', { children: s.description })] }), (0, u.jsx)('article', { className: 'margin-top--lg', children: (0, u.jsx)(r.Z, { items: t.items, className: h.list }) }), (0, u.jsx)('footer', { className: 'margin-top--lg', children: (0, u.jsx)(l.Z, { previous: s.navigation.previous, next: s.navigation.next }) })] });
   }
   function v(e) {
    return (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(b, { ...e }), (0, u.jsx)(x, { ...e })] });
   }
  },
  69051: (e, s, t) => {
   t.d(s, { Z: () => r });
   t(75271);
   var n = t(42800),
    i = t(75545),
    a = t(52676);
   function r(e) {
    const { previous: s, next: t } = e;
    return (0, a.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, n.I)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [s && (0, a.jsx)(i.Z, { ...s, subLabel: (0, a.jsx)(n.Z, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), t && (0, a.jsx)(i.Z, { ...t, subLabel: (0, a.jsx)(n.Z, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  99312: (e, s, t) => {
   t.d(s, { Z: () => c });
   t(75271);
   var n = t(4814),
    i = t(42800),
    a = t(52035),
    r = t(65881),
    l = t(52676);
   function c(e) {
    let { className: s } = e;
    const t = (0, r.E)();
    return t.badge ? (0, l.jsx)('span', { className: (0, n.Z)(s, a.k.docs.docVersionBadge, 'badge badge--secondary'), children: (0, l.jsx)(i.Z, { id: 'theme.docs.versionBadge.label', values: { versionLabel: t.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  96097: (e, s, t) => {
   t.d(s, { Z: () => v });
   t(75271);
   var n = t(4814),
    i = t(84084),
    a = t(44679),
    r = t(42800),
    l = t(92829),
    c = t(52035),
    o = t(67891),
    d = t(65881),
    m = t(52676);
   const h = {
    unreleased: function (e) {
     let { siteTitle: s, versionMetadata: t } = e;
     return (0, m.jsx)(r.Z, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: s, versionLabel: (0, m.jsx)('b', { children: t.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function (e) {
     let { siteTitle: s, versionMetadata: t } = e;
     return (0, m.jsx)(r.Z, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: s, versionLabel: (0, m.jsx)('b', { children: t.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function u(e) {
    const s = h[e.versionMetadata.banner];
    return (0, m.jsx)(s, { ...e });
   }
   function b(e) {
    let { versionLabel: s, to: t, onClick: n } = e;
    return (0, m.jsx)(r.Z, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: s, latestVersionLink: (0, m.jsx)('b', { children: (0, m.jsx)(a.Z, { to: t, onClick: n, children: (0, m.jsx)(r.Z, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function x(e) {
    let { className: s, versionMetadata: t } = e;
    const {
      siteConfig: { title: a },
     } = (0, i.Z)(),
     { pluginId: r } = (0, l.gA)({ failfast: !0 }),
     { savePreferredVersionName: d } = (0, o.J)(r),
     { latestDocSuggestion: h, latestVersionSuggestion: x } = (0, l.Jo)(r),
     v = h ?? (j = x).docs.find((e) => e.id === j.mainDocId);
    var j;
    return (0, m.jsxs)('div', { className: (0, n.Z)(s, c.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, m.jsx)('div', { children: (0, m.jsx)(u, { siteTitle: a, versionMetadata: t }) }), (0, m.jsx)('div', { className: 'margin-top--md', children: (0, m.jsx)(b, { versionLabel: x.label, to: v.path, onClick: () => d(x.name) }) })] });
   }
   function v(e) {
    let { className: s } = e;
    const t = (0, d.E)();
    return t.banner ? (0, m.jsx)(x, { className: s, versionMetadata: t }) : null;
   }
  },
  75545: (e, s, t) => {
   t.d(s, { Z: () => r });
   t(75271);
   var n = t(4814),
    i = t(44679),
    a = t(52676);
   function r(e) {
    const { permalink: s, title: t, subLabel: r, isNext: l } = e;
    return (0, a.jsxs)(i.Z, { className: (0, n.Z)('pagination-nav__link', l ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: s, children: [r && (0, a.jsx)('div', { className: 'pagination-nav__sublabel', children: r }), (0, a.jsx)('div', { className: 'pagination-nav__label', children: t })] });
   }
  },
  57229: (e, s, t) => {
   t.d(s, { r: () => r });
   var n = t(44679),
    i = t(4814),
    a = t(52676);
   const r = (e) => {
    let { className: s, ...t } = e;
    return (0, a.jsx)(n.Z, { className: (0, i.W)('utrecht-link', 'utrecht-link--html-a', s), ...t });
   };
  },
  39772: (e, s, t) => {
   t.d(s, { Z: () => u });
   var n = t(17542),
    i = t(57229),
    a = t(74824),
    r = t(4814),
    l = t(52676);
   function c(e) {
    let { href: s, icon: t = '', title: n, description: a, children: c } = e;
    return (0, l.jsxs)('div', { className: 'card', children: [s ? (0, l.jsx)(i.r, { href: s, className: (0, r.Z)('cardLink', 'utrecht-link'), children: (0, l.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', n] }) }) : (0, l.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', n] }), a && (0, l.jsx)('p', { className: 'cardDescription', children: a }), c] });
   }
   function o(e) {
    let { item: s } = e;
    return (0, l.jsx)(c, { title: s.label, description: s.description, children: (0, l.jsx)(a.QI, { children: s.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, s) => (0, l.jsx)(a.AS, { children: 'link' === e.type ? (0, l.jsx)(i.r, { to: e.href, children: e.label }) : 'category' === e.type ? (0, l.jsxs)(i.r, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, l.jsx)(l.Fragment, {}) }, s)) }) });
   }
   function d(e) {
    let { item: s } = e;
    const t = (0, n.xz)(s.docId);
    return (0, l.jsx)(c, { href: s.href, title: s.label, description: s.description ?? t?.description });
   }
   function m(e) {
    let { item: s } = e;
    switch (s.type) {
     case 'link':
      return (0, l.jsx)(d, { item: s });
     case 'category':
      return (0, l.jsx)(o, { item: s });
     default:
      throw new Error(`unknown item type ${JSON.stringify(s)}`);
    }
   }
   function h(e) {
    let { className: s } = e;
    const t = (0, n.jA)();
    return (0, l.jsx)(u, { items: t.items, className: s });
   }
   function u(e) {
    const { items: s, className: t } = e;
    if (!s) return (0, l.jsx)(h, { ...e });
    const i = (0, n.MN)(s);
    return (0, l.jsx)('section', { className: (0, r.Z)('row', t), children: i.map((e, s) => (0, l.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, l.jsx)(m, { item: e }) }, s)) });
   }
  },
 },
]);
