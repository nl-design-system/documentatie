'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [46969],
 {
  3227(e, s, n) {
   n.d(s, { A: () => b });
   var i = n(3768),
    t = n(45282),
    a = n(1238),
    r = n(14537),
    l = n(13526),
    c = n(86070);
   function o({ href: e, icon: s = '', title: n, description: i, children: a }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(t.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [s, ' ', n] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [s, ' ', n] }), i && (0, c.jsx)('p', { className: 'cardDescription', children: i }), a] });
   }
   function d({ item: e }) {
    return (0, c.jsx)(o, { title: e.label, description: e.description, children: (0, c.jsx)(r.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, s) => (0, c.jsx)(r.Er, { children: 'link' === e.type ? (0, c.jsx)(t.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(t.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, s)) }) });
   }
   function h({ item: e }) {
    const s = (0, a.cC)(e.docId);
    return (0, c.jsx)(o, { href: e.href, title: e.label, description: e.description ?? s?.description });
   }
   function u({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(h, { item: e });
     case 'category':
      return (0, c.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function m({ className: e }) {
    const s = (0, i.$S)();
    return (0, c.jsx)(b, { items: s.items, className: e });
   }
   function b(e) {
    const { items: s, className: n } = e;
    if (!s) return (0, c.jsx)(m, { ...e });
    const t = (0, i.d1)(s);
    return (0, c.jsx)('section', { className: (0, l.A)('row', n), ...e, children: t.map((e, s) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(u, { item: e }) }, s)) });
   }
  },
  3768(e, s, n) {
   n.d(s, { $S: () => i, d1: () => t });
   n(32296);
   function i(...e) {
    return n(74949).$S(...e);
   }
   function t(...e) {
    return n(74949).d1(...e);
   }
  },
  9391(e, s, n) {
   n.d(s, { A: () => c });
   n(30758);
   var i = n(13526),
    t = n(63475),
    a = n(19499),
    r = n(23043),
    l = n(86070);
   function c({ className: e }) {
    const s = (0, r.r)();
    return s.badge ? (0, l.jsx)('span', { className: (0, i.A)(e, a.G.docs.docVersionBadge, 'badge badge--secondary'), children: (0, l.jsx)(t.A, { id: 'theme.docs.versionBadge.label', values: { versionLabel: s.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  15898(e, s, n) {
   n.r(s), n.d(s, { default: () => v });
   n(30758);
   var i = n(6016),
    t = n(1238),
    a = n(76595),
    r = n(3227),
    l = n(37115),
    c = n(47890),
    o = n(9391),
    d = n(47273),
    h = n(43995);
   const u = { generatedIndexPage: 'generatedIndexPage_G6XZ', title: 'title_qREQ' };
   var m = n(86070);
   function b({ categoryGeneratedIndex: e }) {
    return (0, m.jsx)(i.be, { title: e.title, description: e.description, keywords: e.keywords, image: (0, a.Ay)(e.image) });
   }
   function x({ categoryGeneratedIndex: e }) {
    const s = (0, t.$S)();
    return (0, m.jsxs)('div', { className: u.generatedIndexPage, children: [(0, m.jsx)(c.A, {}), (0, m.jsx)(d.A, {}), (0, m.jsx)(o.A, {}), (0, m.jsxs)('header', { children: [(0, m.jsx)(h.A, { as: 'h1', className: u.title, children: e.title }), e.description && (0, m.jsx)('p', { children: e.description })] }), (0, m.jsx)('article', { className: 'margin-top--lg', children: (0, m.jsx)(r.A, { items: s.items, className: u.list }) }), (0, m.jsx)('footer', { className: 'margin-top--md', children: (0, m.jsx)(l.A, { previous: e.navigation.previous, next: e.navigation.next }) })] });
   }
   function v(e) {
    return (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(b, { ...e }), (0, m.jsx)(x, { ...e })] });
   }
  },
  37115(e, s, n) {
   n.d(s, { A: () => l });
   n(30758);
   var i = n(13526),
    t = n(63475),
    a = n(71522),
    r = n(86070);
   function l(e) {
    const { className: s, previous: n, next: l } = e;
    return (0, r.jsxs)('nav', { className: (0, i.A)(s, 'pagination-nav'), 'aria-label': (0, t.T)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [n && (0, r.jsx)(a.A, { ...n, subLabel: (0, r.jsx)(t.A, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), l && (0, r.jsx)(a.A, { ...l, subLabel: (0, r.jsx)(t.A, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  45282(e, s, n) {
   n.d(s, { N: () => r });
   var i = n(83648),
    t = n(13526),
    a = n(86070);
   const r = ({ className: e, ...s }) => (0, a.jsx)(i.A, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...s });
  },
  47273(e, s, n) {
   n.d(s, { A: () => f });
   n(30758);
   var i = n(13526),
    t = n(19499),
    a = n(1238),
    r = n(20445),
    l = n(83648),
    c = n(63475),
    o = n(76595),
    d = n(86070);
   function h(e) {
    return (0, d.jsx)('svg', { viewBox: '0 0 24 24', ...e, children: (0, d.jsx)('path', { d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z', fill: 'currentColor' }) });
   }
   const u = 'breadcrumbHomeIcon_STkE';
   function m() {
    const e = (0, o.Ay)('/');
    return (0, d.jsx)('li', { className: 'breadcrumbs__item', children: (0, d.jsx)(l.A, { 'aria-label': (0, c.T)({ id: 'theme.docs.breadcrumbs.home', message: 'Home page', description: 'The ARIA label for the home page in the breadcrumbs' }), className: 'breadcrumbs__link', href: e, children: (0, d.jsx)(h, { className: u }) }) });
   }
   var b = n(94958),
    x = n(32296);
   function v(e) {
    const s = (function ({ breadcrumbs: e }) {
     const { siteConfig: s } = (0, x.A)();
     return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: e.filter((e) => e.href).map((e, n) => ({ '@type': 'ListItem', position: n + 1, name: e.label, item: `${s.url}${e.href}` })) };
    })({ breadcrumbs: e.breadcrumbs });
    return (0, d.jsx)(b.A, { children: (0, d.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(s) }) });
   }
   const j = 'breadcrumbsContainer_TIIe';
   function g({ children: e, href: s, isLast: n }) {
    const i = 'breadcrumbs__link';
    return n ? (0, d.jsx)('span', { className: i, children: e }) : s ? (0, d.jsx)(l.A, { className: i, href: s, children: (0, d.jsx)('span', { children: e }) }) : (0, d.jsx)('span', { className: i, children: e });
   }
   function p({ children: e, active: s }) {
    return (0, d.jsx)('li', { className: (0, i.A)('breadcrumbs__item', { 'breadcrumbs__item--active': s }), children: e });
   }
   function f() {
    const e = (0, a.OF)(),
     s = (0, r.Dt)();
    return e
     ? (0, d.jsxs)(d.Fragment, {
        children: [
         (0, d.jsx)(v, { breadcrumbs: e }),
         (0, d.jsx)('nav', {
          className: (0, i.A)(t.G.docs.docBreadcrumbs, j),
          'aria-label': (0, c.T)({ id: 'theme.docs.breadcrumbs.navAriaLabel', message: 'Breadcrumbs', description: 'The ARIA label for the breadcrumbs' }),
          children: (0, d.jsxs)('ul', {
           className: 'breadcrumbs',
           children: [
            s && (0, d.jsx)(m, {}),
            e.map((s, n) => {
             const i = n === e.length - 1,
              t = 'category' === s.type && s.linkUnlisted ? void 0 : s.href;
             return (0, d.jsx)(p, { active: i, children: (0, d.jsx)(g, { href: t, isLast: i, children: s.label }) }, n);
            }),
           ],
          }),
         }),
        ],
       })
     : null;
   }
  },
  47890(e, s, n) {
   n.d(s, { A: () => v });
   n(30758);
   var i = n(13526),
    t = n(32296),
    a = n(83648),
    r = n(63475),
    l = n(74949),
    c = n(19499),
    o = n(28724),
    d = n(23043),
    h = n(86070);
   const u = {
    unreleased: function ({ siteTitle: e, versionMetadata: s }) {
     return (0, h.jsx)(r.A, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: e, versionLabel: (0, h.jsx)('b', { children: s.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function ({ siteTitle: e, versionMetadata: s }) {
     return (0, h.jsx)(r.A, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: e, versionLabel: (0, h.jsx)('b', { children: s.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function m(e) {
    const s = u[e.versionMetadata.banner];
    return (0, h.jsx)(s, { ...e });
   }
   function b({ versionLabel: e, to: s, onClick: n }) {
    return (0, h.jsx)(r.A, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: e, latestVersionLink: (0, h.jsx)('b', { children: (0, h.jsx)(a.A, { to: s, onClick: n, children: (0, h.jsx)(r.A, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function x({ className: e, versionMetadata: s }) {
    const {
      siteConfig: { title: n },
     } = (0, t.A)(),
     { pluginId: a } = (0, l.vT)({ failfast: !0 }),
     { savePreferredVersionName: r } = (0, o.g1)(a),
     { latestDocSuggestion: d, latestVersionSuggestion: u } = (0, l.HW)(a),
     x = d ?? (v = u).docs.find((e) => e.id === v.mainDocId);
    var v;
    return (0, h.jsxs)('div', { className: (0, i.A)(e, c.G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, h.jsx)('div', { children: (0, h.jsx)(m, { siteTitle: n, versionMetadata: s }) }), (0, h.jsx)('div', { className: 'margin-top--md', children: (0, h.jsx)(b, { versionLabel: u.label, to: x.path, onClick: () => r(u.name) }) })] });
   }
   function v({ className: e }) {
    const s = (0, d.r)();
    return s.banner ? (0, h.jsx)(x, { className: e, versionMetadata: s }) : null;
   }
  },
  71522(e, s, n) {
   n.d(s, { A: () => r });
   n(30758);
   var i = n(13526),
    t = n(83648),
    a = n(86070);
   function r(e) {
    const { permalink: s, title: n, subLabel: r, isNext: l } = e;
    return (0, a.jsxs)(t.A, { className: (0, i.A)('pagination-nav__link', l ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: s, children: [r && (0, a.jsx)('div', { className: 'pagination-nav__sublabel', children: r }), (0, a.jsx)('div', { className: 'pagination-nav__label', children: n })] });
   }
  },
 },
]);
