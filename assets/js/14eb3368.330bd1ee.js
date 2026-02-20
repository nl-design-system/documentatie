'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [46969],
 {
  3227(e, s, n) {
   n.d(s, { A: () => b });
   var t = n(60316),
    i = n(45282),
    r = n(2264),
    a = n(29181),
    l = n(13526),
    c = n(86070);
   function o({ href: e, icon: s = '', title: n, description: t, children: r }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(i.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [s, ' ', n] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [s, ' ', n] }), t && (0, c.jsx)('p', { className: 'cardDescription', children: t }), r] });
   }
   function d({ item: e }) {
    return (0, c.jsx)(o, { title: e.label, description: e.description, children: (0, c.jsx)(a.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, s) => (0, c.jsx)(a.Er, { children: 'link' === e.type ? (0, c.jsx)(i.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(i.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, s)) }) });
   }
   function h({ item: e }) {
    const s = (0, r.cC)(e.docId);
    return (0, c.jsx)(o, { href: e.href, title: e.label, description: e.description ?? s?.description });
   }
   function m({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(h, { item: e });
     case 'category':
      return (0, c.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function u({ className: e }) {
    const s = (0, t.$S)();
    return (0, c.jsx)(b, { items: s.items, className: e });
   }
   function b(e) {
    const { items: s, className: n } = e;
    if (!s) return (0, c.jsx)(u, { ...e });
    const i = (0, t.d1)(s);
    return (0, c.jsx)('section', { className: (0, l.A)('row', n), ...e, children: i.map((e, s) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(m, { item: e }) }, s)) });
   }
  },
  3710(e, s, n) {
   (n.r(s), n.d(s, { default: () => p }));
   n(30758);
   var t = n(86332),
    i = n(2264),
    r = n(63320),
    a = n(3227),
    l = n(7619),
    c = n(92410),
    o = n(88519),
    d = n(87836),
    h = n(39470);
   const m = { generatedIndexPage: 'generatedIndexPage_vNdT', title: 'title_JsK5' };
   var u = n(86070);
   function b({ categoryGeneratedIndex: e }) {
    return (0, u.jsx)(t.be, { title: e.title, description: e.description, keywords: e.keywords, image: (0, r.Ay)(e.image) });
   }
   function x({ categoryGeneratedIndex: e }) {
    const s = (0, i.$S)();
    return (0, u.jsxs)('div', { className: m.generatedIndexPage, children: [(0, u.jsx)(c.A, {}), (0, u.jsx)(d.A, {}), (0, u.jsx)(o.A, {}), (0, u.jsxs)('header', { children: [(0, u.jsx)(h.A, { as: 'h1', className: m.title, children: e.title }), e.description && (0, u.jsx)('p', { children: e.description })] }), (0, u.jsx)('article', { className: 'margin-top--lg', children: (0, u.jsx)(a.A, { items: s.items, className: m.list }) }), (0, u.jsx)('footer', { className: 'margin-top--md', children: (0, u.jsx)(l.A, { previous: e.navigation.previous, next: e.navigation.next }) })] });
   }
   function p(e) {
    return (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(b, { ...e }), (0, u.jsx)(x, { ...e })] });
   }
  },
  7619(e, s, n) {
   n.d(s, { A: () => l });
   n(30758);
   var t = n(13526),
    i = n(18236),
    r = n(52266),
    a = n(86070);
   function l(e) {
    const { className: s, previous: n, next: l } = e;
    return (0, a.jsxs)('nav', { className: (0, t.A)(s, 'pagination-nav'), 'aria-label': (0, i.T)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [n && (0, a.jsx)(r.A, { ...n, subLabel: (0, a.jsx)(i.A, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), l && (0, a.jsx)(r.A, { ...l, subLabel: (0, a.jsx)(i.A, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  45282(e, s, n) {
   n.d(s, { F: () => r, N: () => a });
   var t = n(13526),
    i = n(86070);
   const r = ({ children: e, ...s }) => {
     const { to: n, href: t, ...r } = s;
     let a = n || t;
     const l = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? ((l.pathname = l.pathname.endsWith('/') ? l.pathname : `${l.pathname}/`), (a = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: a, ...r, children: e }));
    },
    a = ({ className: e, ...s }) => (0, i.jsx)(r, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...s });
  },
  52266(e, s, n) {
   n.d(s, { A: () => a });
   n(30758);
   var t = n(13526),
    i = n(63195),
    r = n(86070);
   function a(e) {
    const { permalink: s, title: n, subLabel: a, isNext: l } = e;
    return (0, r.jsxs)(i.A, { className: (0, t.A)('pagination-nav__link', l ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: s, children: [a && (0, r.jsx)('div', { className: 'pagination-nav__sublabel', children: a }), (0, r.jsx)('div', { className: 'pagination-nav__label', children: n })] });
   }
  },
  60316(e, s, n) {
   n.d(s, { $S: () => t, d1: () => i });
   n(74147);
   function t(...e) {
    return n(97819).$S(...e);
   }
   function i(...e) {
    return n(97819).d1(...e);
   }
  },
  87836(e, s, n) {
   n.d(s, { A: () => f });
   n(30758);
   var t = n(13526),
    i = n(71639),
    r = n(2264),
    a = n(29281),
    l = n(63195),
    c = n(18236),
    o = n(63320),
    d = n(86070);
   function h(e) {
    return (0, d.jsx)('svg', { viewBox: '0 0 24 24', ...e, children: (0, d.jsx)('path', { d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z', fill: 'currentColor' }) });
   }
   const m = 'breadcrumbHomeIcon_nXN1';
   function u() {
    const e = (0, o.Ay)('/');
    return (0, d.jsx)('li', { className: 'breadcrumbs__item', children: (0, d.jsx)(l.A, { 'aria-label': (0, c.T)({ id: 'theme.docs.breadcrumbs.home', message: 'Home page', description: 'The ARIA label for the home page in the breadcrumbs' }), className: 'breadcrumbs__link', href: e, children: (0, d.jsx)(h, { className: m }) }) });
   }
   var b = n(70241),
    x = n(74147);
   function p(e) {
    const s = (function ({ breadcrumbs: e }) {
     const { siteConfig: s } = (0, x.A)();
     return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: e.filter((e) => e.href).map((e, n) => ({ '@type': 'ListItem', position: n + 1, name: e.label, item: `${s.url}${e.href}` })) };
    })({ breadcrumbs: e.breadcrumbs });
    return (0, d.jsx)(b.A, { children: (0, d.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(s) }) });
   }
   const v = 'breadcrumbsContainer_Bqeg';
   function g({ children: e, href: s, isLast: n }) {
    const t = 'breadcrumbs__link';
    return n ? (0, d.jsx)('span', { className: t, children: e }) : s ? (0, d.jsx)(l.A, { className: t, href: s, children: (0, d.jsx)('span', { children: e }) }) : (0, d.jsx)('span', { className: t, children: e });
   }
   function j({ children: e, active: s }) {
    return (0, d.jsx)('li', { className: (0, t.A)('breadcrumbs__item', { 'breadcrumbs__item--active': s }), children: e });
   }
   function f() {
    const e = (0, r.OF)(),
     s = (0, a.Dt)();
    return e
     ? (0, d.jsxs)(d.Fragment, {
        children: [
         (0, d.jsx)(p, { breadcrumbs: e }),
         (0, d.jsx)('nav', {
          className: (0, t.A)(i.G.docs.docBreadcrumbs, v),
          'aria-label': (0, c.T)({ id: 'theme.docs.breadcrumbs.navAriaLabel', message: 'Breadcrumbs', description: 'The ARIA label for the breadcrumbs' }),
          children: (0, d.jsxs)('ul', {
           className: 'breadcrumbs',
           children: [
            s && (0, d.jsx)(u, {}),
            e.map((s, n) => {
             const t = n === e.length - 1,
              i = 'category' === s.type && s.linkUnlisted ? void 0 : s.href;
             return (0, d.jsx)(j, { active: t, children: (0, d.jsx)(g, { href: i, isLast: t, children: s.label }) }, n);
            }),
           ],
          }),
         }),
        ],
       })
     : null;
   }
  },
  88519(e, s, n) {
   n.d(s, { A: () => c });
   n(30758);
   var t = n(13526),
    i = n(18236),
    r = n(71639),
    a = n(21093),
    l = n(86070);
   function c({ className: e }) {
    const s = (0, a.r)();
    return s.badge ? (0, l.jsx)('span', { className: (0, t.A)(e, r.G.docs.docVersionBadge, 'badge badge--secondary'), children: (0, l.jsx)(i.A, { id: 'theme.docs.versionBadge.label', values: { versionLabel: s.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  92410(e, s, n) {
   n.d(s, { A: () => p });
   n(30758);
   var t = n(13526),
    i = n(74147),
    r = n(63195),
    a = n(18236),
    l = n(97819),
    c = n(71639),
    o = n(13714),
    d = n(21093),
    h = n(86070);
   const m = {
    unreleased: function ({ siteTitle: e, versionMetadata: s }) {
     return (0, h.jsx)(a.A, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: e, versionLabel: (0, h.jsx)('b', { children: s.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function ({ siteTitle: e, versionMetadata: s }) {
     return (0, h.jsx)(a.A, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: e, versionLabel: (0, h.jsx)('b', { children: s.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function u(e) {
    const s = m[e.versionMetadata.banner];
    return (0, h.jsx)(s, { ...e });
   }
   function b({ versionLabel: e, to: s, onClick: n }) {
    return (0, h.jsx)(a.A, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: e, latestVersionLink: (0, h.jsx)('b', { children: (0, h.jsx)(r.A, { to: s, onClick: n, children: (0, h.jsx)(a.A, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function x({ className: e, versionMetadata: s }) {
    const {
      siteConfig: { title: n },
     } = (0, i.A)(),
     { pluginId: r } = (0, l.vT)({ failfast: !0 }),
     { savePreferredVersionName: a } = (0, o.g1)(r),
     { latestDocSuggestion: d, latestVersionSuggestion: m } = (0, l.HW)(r),
     x = d ?? (p = m).docs.find((e) => e.id === p.mainDocId);
    var p;
    return (0, h.jsxs)('div', { className: (0, t.A)(e, c.G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, h.jsx)('div', { children: (0, h.jsx)(u, { siteTitle: n, versionMetadata: s }) }), (0, h.jsx)('div', { className: 'margin-top--md', children: (0, h.jsx)(b, { versionLabel: m.label, to: x.path, onClick: () => a(m.name) }) })] });
   }
   function p({ className: e }) {
    const s = (0, d.r)();
    return s.banner ? (0, h.jsx)(x, { className: e, versionMetadata: s }) : null;
   }
  },
 },
]);
