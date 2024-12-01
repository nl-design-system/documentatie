'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9817],
 {
  59187: (e, s, n) => {
   n.d(s, { Z: () => r });
   n(75271);
   var t = n(23818),
    i = n(59724),
    a = n(52676);
   function r(e) {
    const { previous: s, next: n } = e;
    return (0, a.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, t.I)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [s && (0, a.jsx)(i.Z, { ...s, subLabel: (0, a.jsx)(t.Z, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), n && (0, a.jsx)(i.Z, { ...n, subLabel: (0, a.jsx)(t.Z, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  37350: (e, s, n) => {
   n.d(s, { Z: () => o });
   n(75271);
   var t = n(4814),
    i = n(23818),
    a = n(51229),
    r = n(89701),
    l = n(52676);
   function o(e) {
    let { className: s } = e;
    const n = (0, r.E)();
    return n.badge ? (0, l.jsx)('span', { className: (0, t.Z)(s, a.k.docs.docVersionBadge, 'badge badge--secondary'), children: (0, l.jsx)(i.Z, { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  93436: (e, s, n) => {
   n.d(s, { Z: () => j });
   n(75271);
   var t = n(4814),
    i = n(63304),
    a = n(95071),
    r = n(23818),
    l = n(54945),
    o = n(51229),
    c = n(55310),
    d = n(89701),
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
     { savePreferredVersionName: d } = (0, c.J)(r),
     { latestDocSuggestion: u, latestVersionSuggestion: b } = (0, l.Jo)(r),
     j = u ?? (v = b).docs.find((e) => e.id === v.mainDocId);
    var v;
    return (0, h.jsxs)('div', { className: (0, t.Z)(s, o.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, h.jsx)('div', { children: (0, h.jsx)(m, { siteTitle: a, versionMetadata: n }) }), (0, h.jsx)('div', { className: 'margin-top--md', children: (0, h.jsx)(x, { versionLabel: b.label, to: j.path, onClick: () => d(b.name) }) })] });
   }
   function j(e) {
    let { className: s } = e;
    const n = (0, d.E)();
    return n.banner ? (0, h.jsx)(b, { className: s, versionMetadata: n }) : null;
   }
  },
  59724: (e, s, n) => {
   n.d(s, { Z: () => r });
   n(75271);
   var t = n(4814),
    i = n(95071),
    a = n(52676);
   function r(e) {
    const { permalink: s, title: n, subLabel: r, isNext: l } = e;
    return (0, a.jsxs)(i.Z, { className: (0, t.Z)('pagination-nav__link', l ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: s, children: [r && (0, a.jsx)('div', { className: 'pagination-nav__sublabel', children: r }), (0, a.jsx)('div', { className: 'pagination-nav__label', children: n })] });
   }
  },
  24009: (e, s, n) => {
   n.d(s, { Q: () => h });
   var t = n(95071),
    i = n(58610),
    a = n(40185),
    r = n(55525),
    l = n(31916),
    o = n(4814),
    c = n(75271),
    d = n(52676);
   const h = (e) => {
    let { breadcrumbs: s, ...n } = e;
    const h = [{ href: (0, a.Z)('/'), label: 'Home', rel: 'home' }, ...s],
     { pathname: u } = (0, i.TH)(),
     m = [...h].reverse().find((e) => e.href !== u);
    return (0, d.jsxs)(d.Fragment, {
     children: [
      (0, d.jsx)('div', {
       className: (0, o.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, d.jsx)(l.Qu, {
        ...n,
        label: 'breadcrumb',
        children: h.map((e, s, n) => {
         let { label: t, href: i, rel: a } = e,
          { length: r } = n;
         return (0, d.jsxs)(c.Fragment, { children: [(0, d.jsx)(l.yY, { href: i, current: s === r - 1, disabled: s === r - 1, rel: (0, o.Z)(a, { up: s === r - 2 }), children: t }), s < r - 1 && (0, d.jsx)(l.sc, { children: '/' })] }, s);
        }),
       }),
      }),
      m && (0, d.jsx)('div', { className: (0, o.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, d.jsx)(l.hE, { children: (0, d.jsxs)(t.Z, { href: m.href, rel: m.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, d.jsx)(l.JO, { children: (0, d.jsx)(r.Z, {}) }), m.label] }) }) }),
     ],
    });
   };
  },
  9637: (e, s, n) => {
   n.d(s, { Z: () => l });
   var t = n(51229),
    i = n(13894),
    a = n(24009),
    r = n(52676);
   function l() {
    const e = (0, i.s1)()?.map((e) => ('category' === e.type ? { ...e, ...e.items.find((e) => 'link' === e.type), label: e.label } : { href: e.href, label: e.label })) || [];
    return (0, r.jsx)(a.Q, { breadcrumbs: e, className: t.k.docs.docBreadcrumbs });
   }
  },
  39772: (e, s, n) => {
   n.d(s, { Z: () => m });
   var t = n(13894),
    i = n(95071),
    a = n(95674),
    r = n(4814),
    l = n(52676);
   function o(e) {
    let { href: s, icon: n = '', title: t, description: a, children: o } = e;
    return (0, l.jsxs)('div', { className: 'card', children: [s ? (0, l.jsx)(i.Z, { href: s, className: (0, r.Z)('cardLink', 'utrecht-link'), children: (0, l.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }) }) : (0, l.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }), a && (0, l.jsx)('p', { className: 'cardDescription', children: a }), o] });
   }
   function c(e) {
    let { item: s } = e;
    return (0, l.jsx)(o, { title: s.label, description: s.description, children: (0, l.jsx)(a.QI, { children: s.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, s) => (0, l.jsx)(a.AS, { children: 'link' === e.type ? (0, l.jsx)(i.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, l.jsxs)(i.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, l.jsx)(l.Fragment, {}) }, s)) }) });
   }
   function d(e) {
    let { item: s } = e;
    const n = (0, t.xz)(s.docId);
    return (0, l.jsx)(o, { href: s.href, title: s.label, description: s.description ?? n?.description });
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
    const n = (0, t.jA)();
    return (0, l.jsx)(m, { items: n.items, className: s });
   }
   function m(e) {
    const { items: s, className: n } = e;
    if (!s) return (0, l.jsx)(u, { ...e });
    const i = (0, t.MN)(s);
    return (0, l.jsx)('section', { className: (0, r.Z)('row', n), children: i.map((e, s) => (0, l.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, l.jsx)(h, { item: e }) }, s)) });
   }
  },
  75789: (e, s, n) => {
   n.r(s), n.d(s, { default: () => b });
   var t = n(43023),
    i = n(13894),
    a = n(40185),
    r = n(9637),
    l = n(39772),
    o = n(59187),
    c = n(37350),
    d = n(93436),
    h = n(80889),
    u = n(52676);
   function m(e) {
    let { categoryGeneratedIndex: s } = e;
    return (0, u.jsx)(t.d, { title: s.title, description: s.description, keywords: s.keywords, image: (0, a.Z)(s.image) });
   }
   function x(e) {
    let { categoryGeneratedIndex: s } = e;
    const n = (0, i.jA)();
    return (0, u.jsxs)('div', { className: 'generatedIndexPage', children: [(0, u.jsx)(d.Z, {}), (0, u.jsx)(r.Z, {}), (0, u.jsx)(c.Z, {}), (0, u.jsxs)('header', { children: [(0, u.jsx)(h.Z, { as: 'h1', className: 'title', children: s.title }), s.description && (0, u.jsx)('p', { children: s.description })] }), (0, u.jsx)('article', { className: 'margin-top--lg', children: (0, u.jsx)(l.Z, { items: n.items, className: 'list' }) }), (0, u.jsx)('footer', { className: 'margin-top--lg', children: (0, u.jsx)(o.Z, { previous: s.navigation.previous, next: s.navigation.next }) })] });
   }
   function b(e) {
    return (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(m, { ...e }), (0, u.jsx)(x, { ...e })] });
   }
  },
 },
]);
