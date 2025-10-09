/*! For license information please see a6aa9e1f.f2274e05.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [93089],
 {
  24574: (e, a, t) => {
   t.d(a, { Z: () => l });
   t(75271);
   var s = t(42800),
    r = t(75545),
    n = t(52676);
   function l(e) {
    const { metadata: a } = e,
     { previousPage: t, nextPage: l } = a;
    return (0, n.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, s.I)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [t && (0, n.jsx)(r.Z, { permalink: t, title: (0, n.jsx)(s.Z, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer Entries' }) }), l && (0, n.jsx)(r.Z, { permalink: l, title: (0, n.jsx)(s.Z, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older Entries' }), isNext: !0 })] });
   }
  },
  75545: (e, a, t) => {
   t.d(a, { Z: () => l });
   t(75271);
   var s = t(4814),
    r = t(44679),
    n = t(52676);
   function l(e) {
    const { permalink: a, title: t, subLabel: l, isNext: i } = e;
    return (0, n.jsxs)(r.Z, { className: (0, s.Z)('pagination-nav__link', i ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: a, children: [l && (0, n.jsx)('div', { className: 'pagination-nav__sublabel', children: l }), (0, n.jsx)('div', { className: 'pagination-nav__label', children: t })] });
   }
  },
  84831: (e, a, t) => {
   t.d(a, { C: () => c, n: () => i });
   var s = t(75271),
    r = t(49052),
    n = t(52676);
   const l = s.createContext(null);
   function i(e) {
    let { children: a, content: t, isBlogPostPage: r = !1 } = e;
    const i = (function (e) {
     let { content: a, isBlogPostPage: t } = e;
     return (0, s.useMemo)(() => ({ metadata: a.metadata, frontMatter: a.frontMatter, assets: a.assets, toc: a.toc, isBlogPostPage: t }), [a, t]);
    })({ content: t, isBlogPostPage: r });
    return (0, n.jsx)(l.Provider, { value: i, children: a });
   }
   function c() {
    const e = (0, s.useContext)(l);
    if (null === e) throw new r.i6('BlogPostProvider');
    return e;
   }
  },
  24009: (e, a, t) => {
   t.d(a, { Q: () => h });
   var s = t(57229),
    r = t(87573),
    n = t(95765),
    l = t(34616),
    i = t(28439),
    c = t(4814),
    d = t(75271),
    o = t(52676);
   const h = (e) => {
    let { breadcrumbs: a, ...t } = e;
    const h = (0, n.Z)('/'),
     { pathname: m } = (0, r.TH)(),
     g = [{ href: h, label: 'Home', rel: 'home' }, ...a].map((e) => {
      return { ...e, href: ((a = e.href), 'string' == typeof a && !1 === a.endsWith('/') ? `${a}/` : a) };
      var a;
     }),
     u = [...g].reverse().find((e) => e.href !== m);
    return (0, o.jsxs)(o.Fragment, {
     children: [
      (0, o.jsx)('div', {
       className: (0, c.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, o.jsx)(i.Qu, {
        ...t,
        label: 'breadcrumb',
        children: g.map((e, a, t) => {
         let { label: s, href: r, rel: n } = e,
          { length: l } = t;
         return (0, o.jsxs)(d.Fragment, { children: [(0, o.jsx)(i.yY, { href: r, current: a === l - 1, disabled: a === l - 1, rel: (0, c.Z)(n, { up: a === l - 2 }), children: s }), a < l - 1 && (0, o.jsx)(i.sc, { children: '/' })] }, a);
        }),
       }),
      }),
      u && (0, o.jsx)('div', { className: (0, c.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, o.jsx)(i.hE, { children: (0, o.jsxs)(s.r, { href: u.href, rel: u.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, o.jsx)(i.JO, { children: (0, o.jsx)(l.Z, {}) }), u.label] }) }) }),
     ],
    });
   };
  },
  35038: (e, a, t) => {
   t.d(a, { Zb: () => c, aY: () => i, um: () => d, wu: () => l });
   var s = t(28439),
    r = t(4814),
    n = t(52676);
   const l = (e) => {
     let { background: a, children: t, className: s, ...l } = e;
     return (0, n.jsx)('div', { className: (0, r.Z)('card__illustration', a && 'card__illustration--background', s), ...l, children: t });
    },
    i = (e) => (0, n.jsx)('div', { className: 'card__content', ...e }),
    c = (e) => {
     let { href: a, appearance: t, className: l, component: i = 'div', children: c } = e;
     const d = (e) => ('article' === i ? (0, n.jsx)('article', { ...e }) : 'section' === i ? (0, n.jsx)('section', { ...e }) : (0, n.jsx)('div', { ...e })),
      o = (0, n.jsx)(d, { className: (0, r.Z)('cardgroup__card', `cardgroup__card--${t}`, l), children: c });
     return a ? (0, n.jsx)(s.rU, { href: a, boxContent: !0, className: 'cardgroup__link', children: o }) : o;
    },
    d = (e) => {
     let { appearance: a = 'medium', children: t, className: s } = e;
     return (0, n.jsx)('div', { className: (0, r.Z)('cardgroup', `cardgroup--${a}`, s), children: t });
    };
  },
  29450: (e, a, t) => {
   t.d(a, { Z: () => i });
   var s = t(24009),
    r = t(77e3),
    n = t(4814),
    l = t(52676);
   function i(e) {
    const { sidebar: a, toc: t, breadcrumbs: i = [], children: c, ...d } = e,
     o = a && a.items.length > 0;
    return (0, l.jsx)(r.Z, { ...d, children: (0, l.jsx)('div', { className: 'container margin-vert--md', children: (0, l.jsxs)('div', { className: 'row', children: [(0, l.jsx)('div', { className: 'col col--9 col--offset-1', children: (0, l.jsx)(s.Q, { breadcrumbs: i }) }), (0, l.jsx)('main', { className: (0, n.Z)('utrecht-document', 'utrecht-html', 'col', { 'col--7': o, 'col--9 col--offset-1': !o }), itemScope: !0, itemType: 'http://schema.org/Blog', children: c }), t && (0, l.jsx)('div', { className: 'col col--2', children: t })] }) }) });
   }
  },
  62987: (e, a, t) => {
   t.r(a), t.d(a, { default: () => p });
   var s = t(69378),
    r = t(52035),
    n = t(84084),
    l = t(24574),
    i = t(35480),
    c = t(83613),
    d = t(35076),
    o = t(4814),
    h = t(29450),
    m = t(52676);
   function g(e) {
    const { metadata: a } = e,
     {
      siteConfig: { title: t },
     } = (0, n.Z)(),
     { blogDescription: r, blogTitle: l, permalink: i } = a,
     d = '/' === i ? t : l;
    return (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(s.d, { title: d, description: r }), (0, m.jsx)(c.Z, { tag: 'blog_posts_list' })] });
   }
   function u(e) {
    const { metadata: a, items: t, sidebar: s } = e;
    return (0, m.jsxs)(h.Z, { sidebar: s, breadcrumbs: [{ href: '#', label: a.blogTitle }], children: [(0, m.jsx)(d.nL, { children: a.blogTitle }), (0, m.jsx)(i.Z, { items: t }), (0, m.jsx)(l.Z, { metadata: a })] });
   }
   function p(e) {
    return (0, m.jsxs)(s.FG, { className: (0, o.Z)(r.k.wrapper.blogPages, r.k.page.blogListPage), children: [(0, m.jsx)(g, { ...e }), (0, m.jsx)(u, { ...e })] });
   }
  },
  35480: (e, a, t) => {
   t.d(a, { Z: () => h });
   var s = t(57229),
    r = t(84831),
    n = t(35038),
    l = t(12649),
    i = (0, t(72315).Z)('outline', 'calendar', 'IconCalendar', [
     ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z', key: 'svg-0' }],
     ['path', { d: 'M16 3v4', key: 'svg-1' }],
     ['path', { d: 'M8 3v4', key: 'svg-2' }],
     ['path', { d: 'M4 11h16', key: 'svg-3' }],
     ['path', { d: 'M11 15h1', key: 'svg-4' }],
     ['path', { d: 'M12 15v3', key: 'svg-5' }],
    ]),
    c = t(35076),
    d = t(4814),
    o = t(52676);
   function h(e) {
    let { items: a } = e;
    return (0, o.jsx)(n.um, {
     appearance: 'large',
     children: a.map((e) => {
      let { content: a } = e;
      return (0, o.jsx)(r.n, { content: a, children: (0, o.jsx)(n.Zb, { appearance: 'large', className: 'blog-card', children: (0, o.jsxs)(n.aY, { children: [(0, o.jsx)(c.XJ, { children: (0, o.jsx)(s.r, { to: a.metadata.permalink, className: (0, d.Z)('utrecht-link', 'blog-card__header-link'), children: a.metadata.title }) }), (0, o.jsx)('div', { children: a.metadata.description }), (0, o.jsxs)(c.k, { children: [a.metadata.authors.map((e) => (0, o.jsxs)(c.Ou, { className: (0, d.Z)('blog-card__badge', 'blog-card__badge--author'), children: [(0, o.jsx)(c.JO, { children: (0, o.jsx)(l.Z, {}) }), (0, o.jsx)('span', { className: 'visually-hidden', children: 'auteur:' }), ' ', e.name] }, e.name)), (0, o.jsxs)(c.Ou, { className: (0, d.Z)('blog-card__badge', 'blog-card__badge--date'), children: [(0, o.jsx)(c.JO, { children: (0, o.jsx)(i, {}) }), (0, o.jsx)('span', { className: 'visually-hidden', children: 'publicatie datum:' }), ' ', (0, o.jsx)('time', { dateTime: a.metadata.date, children: a.metadata.formattedDate })] })] })] }) }) }, a.metadata.permalink);
     }),
    });
   }
  },
  12649: (e, a, t) => {
   t.d(a, { Z: () => s });
   var s = (0, t(72315).Z)('outline', 'user', 'IconUser', [
    ['path', { d: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0', key: 'svg-0' }],
    ['path', { d: 'M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2', key: 'svg-1' }],
   ]);
  },
 },
]);
