'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [46969],
 {
  1436(e, n, s) {
   s.d(n, { A: () => p });
   var t = s(87580),
    a = s(53538),
    i = s(49816),
    r = s(29181),
    l = s(13526),
    o = s(86070);
   function c({ href: e, icon: n = '', title: s, description: t, children: i }) {
    return (0, o.jsxs)('div', { className: 'card', children: [e ? (0, o.jsx)(a.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', s] }) }) : (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', s] }), t && (0, o.jsx)('p', { className: 'cardDescription', children: t }), i] });
   }
   function d({ item: e }) {
    return (0, o.jsx)(c, { title: e.label, description: e.description, children: (0, o.jsx)(r.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, o.jsx)(r.Er, { children: 'link' === e.type ? (0, o.jsx)(a.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, o.jsxs)(a.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, o.jsx)(o.Fragment, {}) }, n)) }) });
   }
   function m({ item: e }) {
    const n = (0, i.cC)(e.docId);
    return (0, o.jsx)(c, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function u({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, o.jsx)(m, { item: e });
     case 'category':
      return (0, o.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function h({ className: e }) {
    const n = (0, t.$S)();
    return (0, o.jsx)(p, { items: n.items, className: e });
   }
   function p(e) {
    const { items: n, className: s } = e;
    if (!n) return (0, o.jsx)(h, { ...e });
    const a = (0, t.d1)(n);
    return (0, o.jsx)('section', { className: (0, l.A)('row', s), ...e, children: a.map((e, n) => (0, o.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, o.jsx)(u, { item: e }) }, n)) });
   }
  },
  10499(e, n, s) {
   s.d(n, { A: () => l });
   s(30758);
   var t = s(13526),
    a = s(24440),
    i = s(73098),
    r = s(86070);
   function l(e) {
    const { className: n, previous: s, next: l } = e;
    return (0, r.jsxs)('nav', { className: (0, t.A)(n, 'pagination-nav'), 'aria-label': (0, a.T)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [s && (0, r.jsx)(i.A, { ...s, subLabel: (0, r.jsx)(a.A, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), l && (0, r.jsx)(i.A, { ...l, subLabel: (0, r.jsx)(a.A, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  13981(e, n, s) {
   s.d(n, { A: () => f });
   s(30758);
   var t = s(13526),
    a = s(81943),
    i = s(49816),
    r = s(13441),
    l = s(41819),
    o = s(24440),
    c = s(18392),
    d = s(86070);
   function m(e) {
    return (0, d.jsx)('svg', { viewBox: '0 0 24 24', ...e, children: (0, d.jsx)('path', { d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z', fill: 'currentColor' }) });
   }
   const u = 'breadcrumbHomeIcon_nXN1';
   function h() {
    const e = (0, c.Ay)('/');
    return (0, d.jsx)('li', { className: 'breadcrumbs__item', children: (0, d.jsx)(l.A, { 'aria-label': (0, o.T)({ id: 'theme.docs.breadcrumbs.home', message: 'Home page', description: 'The ARIA label for the home page in the breadcrumbs' }), className: 'breadcrumbs__link', href: e, children: (0, d.jsx)(m, { className: u }) }) });
   }
   var p = s(26081),
    b = s(27331);
   function g(e) {
    const n = (function ({ breadcrumbs: e }) {
     const { siteConfig: n } = (0, b.A)();
     return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: e.filter((e) => e.href).map((e, s) => ({ '@type': 'ListItem', position: s + 1, name: e.label, item: `${n.url}${e.href}` })) };
    })({ breadcrumbs: e.breadcrumbs });
    return (0, d.jsx)(p.A, { children: (0, d.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(n) }) });
   }
   const v = 'breadcrumbsContainer_Bqeg';
   function x({ children: e, href: n, isLast: s }) {
    const t = 'breadcrumbs__link';
    return s ? (0, d.jsx)('span', { className: t, children: e }) : n ? (0, d.jsx)(l.A, { className: t, href: n, children: (0, d.jsx)('span', { children: e }) }) : (0, d.jsx)('span', { className: t, children: e });
   }
   function j({ children: e, active: n }) {
    return (0, d.jsx)('li', { className: (0, t.A)('breadcrumbs__item', { 'breadcrumbs__item--active': n }), children: e });
   }
   function f() {
    const e = (0, i.OF)(),
     n = (0, r.Dt)();
    return e
     ? (0, d.jsxs)(d.Fragment, {
        children: [
         (0, d.jsx)(g, { breadcrumbs: e }),
         (0, d.jsx)('nav', {
          className: (0, t.A)(a.G.docs.docBreadcrumbs, v),
          'aria-label': (0, o.T)({ id: 'theme.docs.breadcrumbs.navAriaLabel', message: 'Breadcrumbs', description: 'The ARIA label for the breadcrumbs' }),
          children: (0, d.jsxs)('ul', {
           className: 'breadcrumbs',
           children: [
            n && (0, d.jsx)(h, {}),
            e.map((n, s) => {
             const t = s === e.length - 1,
              a = 'category' === n.type && n.linkUnlisted ? void 0 : n.href;
             return (0, d.jsx)(j, { active: t, children: (0, d.jsx)(x, { href: a, isLast: t, children: n.label }) }, s);
            }),
           ],
          }),
         }),
        ],
       })
     : null;
   }
  },
  21402(e, n, s) {
   s.d(n, { A: () => g });
   s(30758);
   var t = s(13526),
    a = s(27331),
    i = s(41819),
    r = s(24440),
    l = s(79113),
    o = s(81943),
    c = s(76754),
    d = s(66373),
    m = s(86070);
   const u = {
    unreleased: function ({ siteTitle: e, versionMetadata: n }) {
     return (0, m.jsx)(r.A, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: e, versionLabel: (0, m.jsx)('b', { children: n.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function ({ siteTitle: e, versionMetadata: n }) {
     return (0, m.jsx)(r.A, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: e, versionLabel: (0, m.jsx)('b', { children: n.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function h(e) {
    const n = u[e.versionMetadata.banner];
    return (0, m.jsx)(n, { ...e });
   }
   function p({ versionLabel: e, to: n, onClick: s }) {
    return (0, m.jsx)(r.A, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: e, latestVersionLink: (0, m.jsx)('b', { children: (0, m.jsx)(i.A, { to: n, onClick: s, children: (0, m.jsx)(r.A, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function b({ className: e, versionMetadata: n }) {
    const {
      siteConfig: { title: s },
     } = (0, a.A)(),
     { pluginId: i } = (0, l.vT)({ failfast: !0 }),
     { savePreferredVersionName: r } = (0, c.g1)(i),
     { latestDocSuggestion: d, latestVersionSuggestion: u } = (0, l.HW)(i),
     b = d ?? (g = u).docs.find((e) => e.id === g.mainDocId);
    var g;
    return (0, m.jsxs)('div', { className: (0, t.A)(e, o.G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, m.jsx)('div', { children: (0, m.jsx)(h, { siteTitle: s, versionMetadata: n }) }), (0, m.jsx)('div', { className: 'margin-top--md', children: (0, m.jsx)(p, { versionLabel: u.label, to: b.path, onClick: () => r(u.name) }) })] });
   }
   function g({ className: e }) {
    const n = (0, d.r)();
    return n.banner ? (0, m.jsx)(b, { className: e, versionMetadata: n }) : null;
   }
  },
  46196(e, n, s) {
   (s.r(n), s.d(n, { default: () => g }));
   s(30758);
   var t = s(7644),
    a = s(49816),
    i = s(18392),
    r = s(1436),
    l = s(10499),
    o = s(21402),
    c = s(85127),
    d = s(13981),
    m = s(40579);
   const u = { generatedIndexPage: 'generatedIndexPage_vNdT', title: 'title_JsK5' };
   var h = s(86070);
   function p({ categoryGeneratedIndex: e }) {
    return (0, h.jsx)(t.be, { title: e.title, description: e.description, keywords: e.keywords, image: (0, i.Ay)(e.image) });
   }
   function b({ categoryGeneratedIndex: e }) {
    const n = (0, a.$S)();
    return (0, h.jsxs)('div', { className: u.generatedIndexPage, children: [(0, h.jsx)(o.A, {}), (0, h.jsx)(d.A, {}), (0, h.jsx)(c.A, {}), (0, h.jsxs)('header', { children: [(0, h.jsx)(m.A, { as: 'h1', className: u.title, children: e.title }), e.description && (0, h.jsx)('p', { children: e.description })] }), (0, h.jsx)('article', { className: 'margin-top--lg', children: (0, h.jsx)(r.A, { items: n.items, className: u.list }) }), (0, h.jsx)('footer', { className: 'margin-top--md', children: (0, h.jsx)(l.A, { previous: e.navigation.previous, next: e.navigation.next }) })] });
   }
   function g(e) {
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(p, { ...e }), (0, h.jsx)(b, { ...e })] });
   }
  },
  53538(e, n, s) {
   s.d(n, { F: () => r, N: () => l });
   var t = s(13526),
    a = s(76097),
    i = s(86070);
   const r = ({ children: e, ...n }) => {
     const { to: s, href: t, ...r } = n;
     let l = s || t;
     const o = new URL(l, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === o.origin ? (o.pathname.endsWith('/') || (0, a.QQ)(o.pathname) || (o.pathname = `${o.pathname}/`), (l = o.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: l, ...r, children: e }));
    },
    l = ({ className: e, ...n }) => (0, i.jsx)(r, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  73098(e, n, s) {
   s.d(n, { A: () => r });
   s(30758);
   var t = s(13526),
    a = s(41819),
    i = s(86070);
   function r(e) {
    const { permalink: n, title: s, subLabel: r, isNext: l } = e;
    return (0, i.jsxs)(a.A, { className: (0, t.A)('pagination-nav__link', l ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: n, children: [r && (0, i.jsx)('div', { className: 'pagination-nav__sublabel', children: r }), (0, i.jsx)('div', { className: 'pagination-nav__label', children: s })] });
   }
  },
  76097(e, n, s) {
   s.d(n, { bo: () => a, KF: () => u, mJ: () => b, VZ: () => T, cR: () => N, Pv: () => g, qZ: () => r, kD: () => f, QQ: () => _, B2: () => h, Pc: () => o, f4: () => l, GT: () => A, fX: () => i, eQ: () => j, B_: () => x, o_: () => v });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return m(d(n));
    },
    h = (e, n) => b(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(d(e.tasks.filter(({ name: e, value: s }) => '' !== s && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    b = (e) => m(d(e.projects.flatMap((e) => p(e)))),
    g = (e) => {
     const n = p(e),
      s = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: s }) => '' !== s && e.includes(n))
       .map(({ name: t, id: a, value: i }) => {
        const r = /^(.+) URL/.exec(t)[1],
         l = 'Storybook' === r ? `${s} (${n}) in Storybook van ${e.title}` : `${s} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: a, value: i, description: l };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    v = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((s) => ('object' == typeof e[s] && null !== e[s] ? f(e[s], [...n, s]) : []));
   }
   function A(e) {
    const n = new Map();
    function s(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || s(e).localeCompare(s(n)));
   }
   const N = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    T = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    k = new Set(['ics', 'json', 'pdf']),
    _ = (e) => {
     const n = e.split('/').pop() ?? '',
      s = n.split('.').pop()?.toLowerCase();
     return void 0 !== s && k.has(s);
    };
  },
  85127(e, n, s) {
   s.d(n, { A: () => o });
   s(30758);
   var t = s(13526),
    a = s(24440),
    i = s(81943),
    r = s(66373),
    l = s(86070);
   function o({ className: e }) {
    const n = (0, r.r)();
    return n.badge ? (0, l.jsx)('span', { className: (0, t.A)(e, i.G.docs.docVersionBadge, 'badge badge--secondary'), children: (0, l.jsx)(a.A, { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  87580(e, n, s) {
   s.d(n, { $S: () => t, d1: () => a });
   s(27331);
   function t(...e) {
    return s(79113).$S(...e);
   }
   function a(...e) {
    return s(79113).d1(...e);
   }
  },
 },
]);
