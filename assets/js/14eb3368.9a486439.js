'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9817],
 {
  4690: (e, s, n) => {
   n.d(s, { Z: () => r });
   n(75271);
   var t = n(7512),
    i = n(6348),
    a = n(52676);
   function r(e) {
    const { previous: s, next: n } = e;
    return (0, a.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, t.I)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [s && (0, a.jsx)(i.Z, { ...s, subLabel: (0, a.jsx)(t.Z, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), n && (0, a.jsx)(i.Z, { ...n, subLabel: (0, a.jsx)(t.Z, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  24586: (e, s, n) => {
   n.d(s, { Z: () => c });
   n(75271);
   var t = n(4814),
    i = n(7512),
    a = n(61902),
    r = n(91395),
    l = n(52676);
   function c(e) {
    let { className: s } = e;
    const n = (0, r.E)();
    return n.badge ? (0, l.jsx)('span', { className: (0, t.Z)(s, a.k.docs.docVersionBadge, 'badge badge--secondary'), children: (0, l.jsx)(i.Z, { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  83760: (e, s, n) => {
   n.d(s, { Z: () => v });
   n(75271);
   var t = n(4814),
    i = n(87502),
    a = n(90441),
    r = n(7512),
    l = n(2813),
    c = n(61902),
    o = n(49818),
    d = n(91395),
    h = n(52676);
   const u = {
    unreleased: function (e) {
     let { siteTitle: s, versionMetadata: n } = e;
     return (0, h.jsx)(r.Z, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: s, versionLabel: (0, h.jsx)('b', { children: n.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function (e) {
     let { siteTitle: s, versionMetadata: n } = e;
     return (0, h.jsx)(r.Z, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: s, versionLabel: (0, h.jsx)('b', { children: n.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function m(e) {
    const s = u[e.versionMetadata.banner];
    return (0, h.jsx)(s, { ...e });
   }
   function x(e) {
    let { versionLabel: s, to: n, onClick: t } = e;
    return (0, h.jsx)(r.Z, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: s, latestVersionLink: (0, h.jsx)('b', { children: (0, h.jsx)(a.Z, { to: n, onClick: t, children: (0, h.jsx)(r.Z, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function b(e) {
    let { className: s, versionMetadata: n } = e;
    const {
      siteConfig: { title: a },
     } = (0, i.Z)(),
     { pluginId: r } = (0, l.gA)({ failfast: !0 }),
     { savePreferredVersionName: d } = (0, o.J)(r),
     { latestDocSuggestion: u, latestVersionSuggestion: b } = (0, l.Jo)(r),
     v = u ?? (j = b).docs.find((e) => e.id === j.mainDocId);
    var j;
    return (0, h.jsxs)('div', { className: (0, t.Z)(s, c.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, h.jsx)('div', { children: (0, h.jsx)(m, { siteTitle: a, versionMetadata: n }) }), (0, h.jsx)('div', { className: 'margin-top--md', children: (0, h.jsx)(x, { versionLabel: b.label, to: v.path, onClick: () => d(b.name) }) })] });
   }
   function v(e) {
    let { className: s } = e;
    const n = (0, d.E)();
    return n.banner ? (0, h.jsx)(b, { className: s, versionMetadata: n }) : null;
   }
  },
  6348: (e, s, n) => {
   n.d(s, { Z: () => r });
   n(75271);
   var t = n(4814),
    i = n(90441),
    a = n(52676);
   function r(e) {
    const { permalink: s, title: n, subLabel: r, isNext: l } = e;
    return (0, a.jsxs)(i.Z, { className: (0, t.Z)('pagination-nav__link', l ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: s, children: [r && (0, a.jsx)('div', { className: 'pagination-nav__sublabel', children: r }), (0, a.jsx)('div', { className: 'pagination-nav__label', children: n })] });
   }
  },
  89846: (e, s, n) => {
   n.d(s, { Q: () => x });
   var t = n(90441),
    i = n(3225),
    a = n(46744),
    r = n(55525),
    l = n(46506),
    c = n(4814),
    o = n(75271);
   const d = 'breadcrumbs__73z',
    h = 'breadcrumbs--mobile_QwgF',
    u = 'breadcrumbs--desktop_v9Xv';
   var m = n(52676);
   const x = (e) => {
    let { breadcrumbs: s, ...n } = e;
    const x = [{ href: (0, a.Z)('/'), label: 'Home', rel: 'home' }, ...s],
     { pathname: b } = (0, i.TH)(),
     v = [...x].reverse().find((e) => e.href !== b);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsx)('div', {
       className: (0, c.Z)(d, u),
       children: (0, m.jsx)(l.Qu, {
        ...n,
        label: 'breadcrumb',
        children: x.map((e, s, n) => {
         let { label: t, href: i, rel: a } = e,
          { length: r } = n;
         return (0, m.jsxs)(o.Fragment, { children: [(0, m.jsx)(l.yY, { href: i, current: s === r - 1, disabled: s === r - 1, rel: (0, c.Z)(a, { up: s === r - 2 }), children: t }), s < r - 1 && (0, m.jsx)(l.sc, { children: '/' })] }, s);
        }),
       }),
      }),
      v && (0, m.jsx)('div', { className: (0, c.Z)(d, h), children: (0, m.jsx)(l.hE, { children: (0, m.jsxs)(t.Z, { href: v.href, rel: v.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, m.jsx)(l.JO, { children: (0, m.jsx)(r.Z, {}) }), v.label] }) }) }),
     ],
    });
   };
  },
  9637: (e, s, n) => {
   n.d(s, { Z: () => l });
   var t = n(61902),
    i = n(34221),
    a = n(89846),
    r = (n(75271), n(52676));
   function l() {
    const e = (0, i.s1)()?.map((e) => ('category' === e.type ? { ...e, ...e.items.find((e) => 'link' === e.type), label: e.label } : { href: e.href, label: e.label })) || [];
    return (0, r.jsx)(a.Q, { breadcrumbs: e, className: t.k.docs.docBreadcrumbs });
   }
  },
  20537: (e, s, n) => {
   n.d(s, { Z: () => x });
   var t = n(34221),
    i = n(90441),
    a = n(56150),
    r = n(4814);
   n(75271);
   const l = { card: 'card_l9fv', cardLink: 'cardLink_MxSo', cardTitle: 'cardTitle_HoSo', cardDescription: 'cardDescription_c27F' };
   var c = n(52676);
   function o(e) {
    let { href: s, icon: n = '', title: t, description: a, children: o } = e;
    return (0, c.jsxs)('div', { className: (0, r.Z)('card', l.card), children: [s ? (0, c.jsx)(i.Z, { href: s, className: (0, r.Z)(l.cardLink, 'utrecht-link'), children: (0, c.jsxs)('h2', { className: (0, r.Z)(l.cardTitle), children: [n, ' ', t] }) }) : (0, c.jsxs)('h2', { className: (0, r.Z)(l.cardTitle), children: [n, ' ', t] }), a && (0, c.jsx)('p', { className: (0, r.Z)(l.cardDescription), children: a }), o] });
   }
   function d(e) {
    let { item: s } = e;
    return (0, c.jsx)(o, { title: s.label, description: s.description, children: (0, c.jsx)(a.QI, { children: s.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, s) => (0, c.jsx)(a.AS, { children: 'link' === e.type ? (0, c.jsx)(i.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(i.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, s)) }) });
   }
   function h(e) {
    let { item: s } = e;
    const n = (0, t.xz)(s.docId);
    return (0, c.jsx)(o, { linkDescription: s.label, href: s.href, title: s.label, description: s.description ?? n?.description });
   }
   function u(e) {
    let { item: s } = e;
    switch (s.type) {
     case 'link':
      return (0, c.jsx)(h, { item: s });
     case 'category':
      return (0, c.jsx)(d, { item: s });
     default:
      throw new Error(`unknown item type ${JSON.stringify(s)}`);
    }
   }
   function m(e) {
    let { className: s } = e;
    const n = (0, t.jA)();
    return (0, c.jsx)(x, { items: n.items, className: s });
   }
   function x(e) {
    const { items: s, className: n } = e;
    if (!s) return (0, c.jsx)(m, { ...e });
    const i = (0, t.MN)(s);
    return (0, c.jsx)('section', { className: (0, r.Z)('row', n), children: i.map((e, s) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(u, { item: e }) }, s)) });
   }
  },
  56541: (e, s, n) => {
   n.r(s), n.d(s, { default: () => v });
   var t = n(17310),
    i = n(34221),
    a = n(46744),
    r = n(9637),
    l = n(20537),
    c = n(4690),
    o = n(24586),
    d = n(83760),
    h = n(91725);
   n(75271);
   const u = { generatedIndexPage: 'generatedIndexPage_jE6W', list: 'list_XVd1', title: 'title__lw4', 'navbar__items--right': 'navbar__items--right_fTHD' };
   var m = n(52676);
   function x(e) {
    let { categoryGeneratedIndex: s } = e;
    return (0, m.jsx)(t.d, { title: s.title, description: s.description, keywords: s.keywords, image: (0, a.Z)(s.image) });
   }
   function b(e) {
    let { categoryGeneratedIndex: s } = e;
    const n = (0, i.jA)();
    return (0, m.jsxs)('div', { className: u.generatedIndexPage, children: [(0, m.jsx)(d.Z, {}), (0, m.jsx)(r.Z, {}), (0, m.jsx)(o.Z, {}), (0, m.jsxs)('header', { children: [(0, m.jsx)(h.Z, { as: 'h1', className: u.title, children: s.title }), s.description && (0, m.jsx)('p', { children: s.description })] }), (0, m.jsx)('article', { className: 'margin-top--lg', children: (0, m.jsx)(l.Z, { items: n.items, className: u.list }) }), (0, m.jsx)('footer', { className: 'margin-top--lg', children: (0, m.jsx)(c.Z, { previous: s.navigation.previous, next: s.navigation.next }) })] });
   }
   function v(e) {
    return (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(x, { ...e }), (0, m.jsx)(b, { ...e })] });
   }
  },
 },
]);
