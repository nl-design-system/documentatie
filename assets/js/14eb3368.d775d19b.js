'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9817],
 {
  69051: (e, s, n) => {
   n.d(s, { Z: () => a });
   n(75271);
   var t = n(42800),
    i = n(75545),
    r = n(52676);
   function a(e) {
    const { previous: s, next: n } = e;
    return (0, r.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, t.I)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [s && (0, r.jsx)(i.Z, { ...s, subLabel: (0, r.jsx)(t.Z, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), n && (0, r.jsx)(i.Z, { ...n, subLabel: (0, r.jsx)(t.Z, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  99312: (e, s, n) => {
   n.d(s, { Z: () => o });
   n(75271);
   var t = n(4814),
    i = n(42800),
    r = n(52035),
    a = n(65881),
    l = n(52676);
   function o(e) {
    let { className: s } = e;
    const n = (0, a.E)();
    return n.badge ? (0, l.jsx)('span', { className: (0, t.Z)(s, r.k.docs.docVersionBadge, 'badge badge--secondary'), children: (0, l.jsx)(i.Z, { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  96097: (e, s, n) => {
   n.d(s, { Z: () => j });
   n(75271);
   var t = n(4814),
    i = n(84084),
    r = n(44679),
    a = n(42800),
    l = n(92829),
    o = n(52035),
    c = n(67891),
    d = n(65881),
    h = n(52676);
   const u = {
    unreleased: function (e) {
     let { siteTitle: s, versionMetadata: n } = e;
     return (0, h.jsx)(a.Z, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: s, versionLabel: (0, h.jsx)('b', { children: n.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function (e) {
     let { siteTitle: s, versionMetadata: n } = e;
     return (0, h.jsx)(a.Z, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: s, versionLabel: (0, h.jsx)('b', { children: n.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function m(e) {
    const s = u[e.versionMetadata.banner];
    return (0, h.jsx)(s, { ...e });
   }
   function x(e) {
    let { versionLabel: s, to: n, onClick: t } = e;
    return (0, h.jsx)(a.Z, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: s, latestVersionLink: (0, h.jsx)('b', { children: (0, h.jsx)(r.Z, { to: n, onClick: t, children: (0, h.jsx)(a.Z, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function b(e) {
    let { className: s, versionMetadata: n } = e;
    const {
      siteConfig: { title: r },
     } = (0, i.Z)(),
     { pluginId: a } = (0, l.gA)({ failfast: !0 }),
     { savePreferredVersionName: d } = (0, c.J)(a),
     { latestDocSuggestion: u, latestVersionSuggestion: b } = (0, l.Jo)(a),
     j = u ?? (v = b).docs.find((e) => e.id === v.mainDocId);
    var v;
    return (0, h.jsxs)('div', { className: (0, t.Z)(s, o.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, h.jsx)('div', { children: (0, h.jsx)(m, { siteTitle: r, versionMetadata: n }) }), (0, h.jsx)('div', { className: 'margin-top--md', children: (0, h.jsx)(x, { versionLabel: b.label, to: j.path, onClick: () => d(b.name) }) })] });
   }
   function j(e) {
    let { className: s } = e;
    const n = (0, d.E)();
    return n.banner ? (0, h.jsx)(b, { className: s, versionMetadata: n }) : null;
   }
  },
  75545: (e, s, n) => {
   n.d(s, { Z: () => a });
   n(75271);
   var t = n(4814),
    i = n(44679),
    r = n(52676);
   function a(e) {
    const { permalink: s, title: n, subLabel: a, isNext: l } = e;
    return (0, r.jsxs)(i.Z, { className: (0, t.Z)('pagination-nav__link', l ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: s, children: [a && (0, r.jsx)('div', { className: 'pagination-nav__sublabel', children: a }), (0, r.jsx)('div', { className: 'pagination-nav__label', children: n })] });
   }
  },
  24009: (e, s, n) => {
   n.d(s, { Q: () => h });
   var t = n(57229),
    i = n(87573),
    r = n(95765),
    a = n(34616),
    l = n(28439),
    o = n(4814),
    c = n(75271),
    d = n(52676);
   const h = (e) => {
    let { breadcrumbs: s, ...n } = e;
    const h = (0, r.Z)('/'),
     { pathname: u } = (0, i.TH)(),
     m = [{ href: h, label: 'Home', rel: 'home' }, ...s].map((e) => {
      return { ...e, href: ((s = e.href), 'string' == typeof s && !1 === s.endsWith('/') ? `${s}/` : s) };
      var s;
     }),
     x = [...m].reverse().find((e) => e.href !== u);
    return (0, d.jsxs)(d.Fragment, {
     children: [
      (0, d.jsx)('div', {
       className: (0, o.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, d.jsx)(l.Qu, {
        ...n,
        label: 'breadcrumb',
        children: m.map((e, s, n) => {
         let { label: t, href: i, rel: r } = e,
          { length: a } = n;
         return (0, d.jsxs)(c.Fragment, { children: [(0, d.jsx)(l.yY, { href: i, current: s === a - 1, disabled: s === a - 1, rel: (0, o.Z)(r, { up: s === a - 2 }), children: t }), s < a - 1 && (0, d.jsx)(l.sc, { children: '/' })] }, s);
        }),
       }),
      }),
      x && (0, d.jsx)('div', { className: (0, o.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, d.jsx)(l.hE, { children: (0, d.jsxs)(t.r, { href: x.href, rel: x.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, d.jsx)(l.JO, { children: (0, d.jsx)(a.Z, {}) }), x.label] }) }) }),
     ],
    });
   };
  },
  9637: (e, s, n) => {
   n.d(s, { Z: () => l });
   var t = n(52035),
    i = n(17542),
    r = n(24009),
    a = n(52676);
   function l() {
    const e = (0, i.s1)()?.map((e) => ({ href: e.href, label: e.label })) || [];
    return (0, a.jsx)(r.Q, { breadcrumbs: e, className: t.k.docs.docBreadcrumbs });
   }
  },
  39772: (e, s, n) => {
   n.d(s, { Z: () => m });
   var t = n(17542),
    i = n(57229),
    r = n(35076),
    a = n(4814),
    l = n(52676);
   function o(e) {
    let { href: s, icon: n = '', title: t, description: r, children: o } = e;
    return (0, l.jsxs)('div', { className: 'card', children: [s ? (0, l.jsx)(i.r, { href: s, className: (0, a.Z)('cardLink', 'utrecht-link'), children: (0, l.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }) }) : (0, l.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }), r && (0, l.jsx)('p', { className: 'cardDescription', children: r }), o] });
   }
   function c(e) {
    let { item: s } = e;
    return (0, l.jsx)(o, { title: s.label, description: s.description, children: (0, l.jsx)(r.QI, { children: s.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, s) => (0, l.jsx)(r.AS, { children: 'link' === e.type ? (0, l.jsx)(i.r, { to: e.href, children: e.label }) : 'category' === e.type ? (0, l.jsxs)(i.r, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, l.jsx)(l.Fragment, {}) }, s)) }) });
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
    return (0, l.jsx)('section', { className: (0, a.Z)('row', n), children: i.map((e, s) => (0, l.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, l.jsx)(h, { item: e }) }, s)) });
   }
  },
  75789: (e, s, n) => {
   n.r(s), n.d(s, { default: () => b });
   var t = n(69378),
    i = n(17542),
    r = n(95765),
    a = n(9637),
    l = n(39772),
    o = n(69051),
    c = n(99312),
    d = n(96097),
    h = n(34893),
    u = n(52676);
   function m(e) {
    let { categoryGeneratedIndex: s } = e;
    return (0, u.jsx)(t.d, { title: s.title, description: s.description, keywords: s.keywords, image: (0, r.Z)(s.image) });
   }
   function x(e) {
    let { categoryGeneratedIndex: s } = e;
    const n = (0, i.jA)();
    return (0, u.jsxs)('div', { className: 'generatedIndexPage', children: [(0, u.jsx)(d.Z, {}), (0, u.jsx)(a.Z, {}), (0, u.jsx)(c.Z, {}), (0, u.jsxs)('header', { children: [(0, u.jsx)(h.Z, { as: 'h1', className: 'title', children: s.title }), s.description && (0, u.jsx)('p', { children: s.description })] }), (0, u.jsx)('article', { className: 'margin-top--lg', children: (0, u.jsx)(l.Z, { items: n.items, className: 'list' }) }), (0, u.jsx)('footer', { className: 'margin-top--lg', children: (0, u.jsx)(o.Z, { previous: s.navigation.previous, next: s.navigation.next }) })] });
   }
   function b(e) {
    return (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(m, { ...e }), (0, u.jsx)(x, { ...e })] });
   }
  },
 },
]);
