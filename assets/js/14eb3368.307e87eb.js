'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9817],
 {
  4690: (e, s, n) => {
   n.d(s, { Z: () => r });
   n(75271);
   var i = n(7512),
    t = n(6348),
    a = n(52676);
   function r(e) {
    const { previous: s, next: n } = e;
    return (0, a.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, i.I)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [s && (0, a.jsx)(t.Z, { ...s, subLabel: (0, a.jsx)(i.Z, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), n && (0, a.jsx)(t.Z, { ...n, subLabel: (0, a.jsx)(i.Z, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  24586: (e, s, n) => {
   n.d(s, { Z: () => o });
   n(75271);
   var i = n(4814),
    t = n(7512),
    a = n(61902),
    r = n(91395),
    l = n(52676);
   function o(e) {
    let { className: s } = e;
    const n = (0, r.E)();
    return n.badge ? (0, l.jsx)('span', { className: (0, i.Z)(s, a.k.docs.docVersionBadge, 'badge badge--secondary'), children: (0, l.jsx)(t.Z, { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  83760: (e, s, n) => {
   n.d(s, { Z: () => j });
   n(75271);
   var i = n(4814),
    t = n(87502),
    a = n(90441),
    r = n(7512),
    l = n(2813),
    o = n(61902),
    c = n(49818),
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
   function b(e) {
    let { versionLabel: s, to: n, onClick: i } = e;
    return (0, h.jsx)(r.Z, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: s, latestVersionLink: (0, h.jsx)('b', { children: (0, h.jsx)(a.Z, { to: n, onClick: i, children: (0, h.jsx)(r.Z, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function x(e) {
    let { className: s, versionMetadata: n } = e;
    const {
      siteConfig: { title: a },
     } = (0, t.Z)(),
     { pluginId: r } = (0, l.gA)({ failfast: !0 }),
     { savePreferredVersionName: d } = (0, c.J)(r),
     { latestDocSuggestion: u, latestVersionSuggestion: x } = (0, l.Jo)(r),
     j = u ?? (v = x).docs.find((e) => e.id === v.mainDocId);
    var v;
    return (0, h.jsxs)('div', { className: (0, i.Z)(s, o.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, h.jsx)('div', { children: (0, h.jsx)(m, { siteTitle: a, versionMetadata: n }) }), (0, h.jsx)('div', { className: 'margin-top--md', children: (0, h.jsx)(b, { versionLabel: x.label, to: j.path, onClick: () => d(x.name) }) })] });
   }
   function j(e) {
    let { className: s } = e;
    const n = (0, d.E)();
    return n.banner ? (0, h.jsx)(x, { className: s, versionMetadata: n }) : null;
   }
  },
  6348: (e, s, n) => {
   n.d(s, { Z: () => r });
   n(75271);
   var i = n(4814),
    t = n(90441),
    a = n(52676);
   function r(e) {
    const { permalink: s, title: n, subLabel: r, isNext: l } = e;
    return (0, a.jsxs)(t.Z, { className: (0, i.Z)('pagination-nav__link', l ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: s, children: [r && (0, a.jsx)('div', { className: 'pagination-nav__sublabel', children: r }), (0, a.jsx)('div', { className: 'pagination-nav__label', children: n })] });
   }
  },
  24009: (e, s, n) => {
   n.d(s, { Q: () => h });
   var i = n(90441),
    t = n(3225),
    a = n(46744),
    r = n(55525),
    l = n(46506),
    o = n(4814),
    c = n(75271),
    d = n(52676);
   const h = (e) => {
    let { breadcrumbs: s, ...n } = e;
    const h = [{ href: (0, a.Z)('/'), label: 'Home', rel: 'home' }, ...s],
     { pathname: u } = (0, t.TH)(),
     m = [...h].reverse().find((e) => e.href !== u);
    return (0, d.jsxs)(d.Fragment, {
     children: [
      (0, d.jsx)('div', {
       className: (0, o.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, d.jsx)(l.Qu, {
        ...n,
        label: 'breadcrumb',
        children: h.map((e, s, n) => {
         let { label: i, href: t, rel: a } = e,
          { length: r } = n;
         return (0, d.jsxs)(c.Fragment, { children: [(0, d.jsx)(l.yY, { href: t, current: s === r - 1, disabled: s === r - 1, rel: (0, o.Z)(a, { up: s === r - 2 }), children: i }), s < r - 1 && (0, d.jsx)(l.sc, { children: '/' })] }, s);
        }),
       }),
      }),
      m && (0, d.jsx)('div', { className: (0, o.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, d.jsx)(l.hE, { children: (0, d.jsxs)(i.Z, { href: m.href, rel: m.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, d.jsx)(l.JO, { children: (0, d.jsx)(r.Z, {}) }), m.label] }) }) }),
     ],
    });
   };
  },
  9637: (e, s, n) => {
   n.d(s, { Z: () => l });
   var i = n(61902),
    t = n(34221),
    a = n(24009),
    r = (n(75271), n(52676));
   function l() {
    const e = (0, t.s1)()?.map((e) => ('category' === e.type ? { ...e, ...e.items.find((e) => 'link' === e.type), label: e.label } : { href: e.href, label: e.label })) || [];
    return (0, r.jsx)(a.Q, { breadcrumbs: e, className: i.k.docs.docBreadcrumbs });
   }
  },
  39772: (e, s, n) => {
   n.d(s, { Z: () => m });
   var i = n(34221),
    t = n(90441),
    a = n(56150),
    r = n(4814),
    l = (n(75271), n(52676));
   function o(e) {
    let { href: s, icon: n = '', title: i, description: a, children: o } = e;
    return (0, l.jsxs)('div', { className: 'card', children: [s ? (0, l.jsx)(t.Z, { href: s, className: (0, r.Z)('cardLink', 'utrecht-link'), children: (0, l.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, l.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), a && (0, l.jsx)('p', { className: 'cardDescription', children: a }), o] });
   }
   function c(e) {
    let { item: s } = e;
    return (0, l.jsx)(o, { title: s.label, description: s.description, children: (0, l.jsx)(a.QI, { children: s.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, s) => (0, l.jsx)(a.AS, { children: 'link' === e.type ? (0, l.jsx)(t.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, l.jsxs)(t.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, l.jsx)(l.Fragment, {}) }, s)) }) });
   }
   function d(e) {
    let { item: s } = e;
    const n = (0, i.xz)(s.docId);
    return (0, l.jsx)(o, { linkDescription: s.label, href: s.href, title: s.label, description: s.description ?? n?.description });
   }
   function h(e) {
    let { item: s } = e;
    switch (s.type) {
     case 'link':
      return (0, l.jsx)(d, { item: s });
     case 'category':
      return (0, l.jsx)(c, { item: s });
     default:
      throw new Error(`unknown item type ${JSON.stringify(s)}`);
    }
   }
   function u(e) {
    let { className: s } = e;
    const n = (0, i.jA)();
    return (0, l.jsx)(m, { items: n.items, className: s });
   }
   function m(e) {
    const { items: s, className: n } = e;
    if (!s) return (0, l.jsx)(u, { ...e });
    const t = (0, i.MN)(s);
    return (0, l.jsx)('section', { className: (0, r.Z)('row', n), children: t.map((e, s) => (0, l.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, l.jsx)(h, { item: e }) }, s)) });
   }
  },
  75789: (e, s, n) => {
   n.r(s), n.d(s, { default: () => x });
   var i = n(17310),
    t = n(34221),
    a = n(46744),
    r = n(9637),
    l = n(39772),
    o = n(4690),
    c = n(24586),
    d = n(83760),
    h = n(91725),
    u = (n(75271), n(52676));
   function m(e) {
    let { categoryGeneratedIndex: s } = e;
    return (0, u.jsx)(i.d, { title: s.title, description: s.description, keywords: s.keywords, image: (0, a.Z)(s.image) });
   }
   function b(e) {
    let { categoryGeneratedIndex: s } = e;
    const n = (0, t.jA)();
    return (0, u.jsxs)('div', { className: 'generatedIndexPage', children: [(0, u.jsx)(d.Z, {}), (0, u.jsx)(r.Z, {}), (0, u.jsx)(c.Z, {}), (0, u.jsxs)('header', { children: [(0, u.jsx)(h.Z, { as: 'h1', className: 'title', children: s.title }), s.description && (0, u.jsx)('p', { children: s.description })] }), (0, u.jsx)('article', { className: 'margin-top--lg', children: (0, u.jsx)(l.Z, { items: n.items, className: 'list' }) }), (0, u.jsx)('footer', { className: 'margin-top--lg', children: (0, u.jsx)(o.Z, { previous: s.navigation.previous, next: s.navigation.next }) })] });
   }
   function x(e) {
    return (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(m, { ...e }), (0, u.jsx)(b, { ...e })] });
   }
  },
 },
]);
