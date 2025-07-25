'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [93089],
 {
  46918: (e, a, s) => {
   s.d(a, { Z: () => l });
   s(75271);
   var t = s(40217),
    r = s(49687),
    n = s(52676);
   function l(e) {
    const { metadata: a } = e,
     { previousPage: s, nextPage: l } = a;
    return (0, n.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, t.I)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [s && (0, n.jsx)(r.Z, { permalink: s, title: (0, n.jsx)(t.Z, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer Entries' }) }), l && (0, n.jsx)(r.Z, { permalink: l, title: (0, n.jsx)(t.Z, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older Entries' }), isNext: !0 })] });
   }
  },
  49687: (e, a, s) => {
   s.d(a, { Z: () => l });
   s(75271);
   var t = s(4814),
    r = s(83033),
    n = s(52676);
   function l(e) {
    const { permalink: a, title: s, subLabel: l, isNext: i } = e;
    return (0, n.jsxs)(r.Z, { className: (0, t.Z)('pagination-nav__link', i ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: a, children: [l && (0, n.jsx)('div', { className: 'pagination-nav__sublabel', children: l }), (0, n.jsx)('div', { className: 'pagination-nav__label', children: s })] });
   }
  },
  94818: (e, a, s) => {
   s.d(a, { C: () => c, n: () => i });
   var t = s(75271),
    r = s(40465),
    n = s(52676);
   const l = t.createContext(null);
   function i(e) {
    let { children: a, content: s, isBlogPostPage: r = !1 } = e;
    const i = (function (e) {
     let { content: a, isBlogPostPage: s } = e;
     return (0, t.useMemo)(() => ({ metadata: a.metadata, frontMatter: a.frontMatter, assets: a.assets, toc: a.toc, isBlogPostPage: s }), [a, s]);
    })({ content: s, isBlogPostPage: r });
    return (0, n.jsx)(l.Provider, { value: i, children: a });
   }
   function c() {
    const e = (0, t.useContext)(l);
    if (null === e) throw new r.i6('BlogPostProvider');
    return e;
   }
  },
  24009: (e, a, s) => {
   s.d(a, { Q: () => h });
   var t = s(57229),
    r = s(87573),
    n = s(92826),
    l = s(34616),
    i = s(16167),
    c = s(4814),
    d = s(75271),
    o = s(52676);
   const h = (e) => {
    let { breadcrumbs: a, ...s } = e;
    const h = [{ href: (0, n.Z)('/'), label: 'Home', rel: 'home' }, ...a],
     { pathname: m } = (0, r.TH)(),
     g = [...h].reverse().find((e) => e.href !== m);
    return (0, o.jsxs)(o.Fragment, {
     children: [
      (0, o.jsx)('div', {
       className: (0, c.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, o.jsx)(i.Qu, {
        ...s,
        label: 'breadcrumb',
        children: h.map((e, a, s) => {
         let { label: t, href: r, rel: n } = e,
          { length: l } = s;
         return (0, o.jsxs)(d.Fragment, { children: [(0, o.jsx)(i.yY, { href: r, current: a === l - 1, disabled: a === l - 1, rel: (0, c.Z)(n, { up: a === l - 2 }), children: t }), a < l - 1 && (0, o.jsx)(i.sc, { children: '/' })] }, a);
        }),
       }),
      }),
      g && (0, o.jsx)('div', { className: (0, c.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, o.jsx)(i.hE, { children: (0, o.jsxs)(t.r, { href: g.href, rel: g.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, o.jsx)(i.JO, { children: (0, o.jsx)(l.Z, {}) }), g.label] }) }) }),
     ],
    });
   };
  },
  35038: (e, a, s) => {
   s.d(a, { Zb: () => c, aY: () => i, um: () => d, wu: () => l });
   var t = s(16167),
    r = s(4814),
    n = s(52676);
   const l = (e) => {
     let { background: a, children: s, className: t, ...l } = e;
     return (0, n.jsx)('div', { className: (0, r.Z)('card__illustration', a && 'card__illustration--background', t), ...l, children: s });
    },
    i = (e) => (0, n.jsx)('div', { className: 'card__content', ...e }),
    c = (e) => {
     let { href: a, appearance: s, className: l, component: i = 'div', children: c } = e;
     const d = (e) => ('article' === i ? (0, n.jsx)('article', { ...e }) : 'section' === i ? (0, n.jsx)('section', { ...e }) : (0, n.jsx)('div', { ...e })),
      o = (0, n.jsx)(d, { className: (0, r.Z)('cardgroup__card', `cardgroup__card--${s}`, l), children: c });
     return a ? (0, n.jsx)(t.rU, { href: a, boxContent: !0, className: 'cardgroup__link', children: o }) : o;
    },
    d = (e) => {
     let { appearance: a = 'medium', children: s, className: t } = e;
     return (0, n.jsx)('div', { className: (0, r.Z)('cardgroup', `cardgroup--${a}`, t), children: s });
    };
  },
  29450: (e, a, s) => {
   s.d(a, { Z: () => i });
   var t = s(24009),
    r = s(95360),
    n = s(4814),
    l = s(52676);
   function i(e) {
    const { sidebar: a, toc: s, breadcrumbs: i = [], children: c, ...d } = e,
     o = a && a.items.length > 0;
    return (0, l.jsx)(r.Z, { ...d, children: (0, l.jsx)('div', { className: 'container margin-vert--md', children: (0, l.jsxs)('div', { className: 'row', children: [(0, l.jsx)('div', { className: 'col col--9 col--offset-1', children: (0, l.jsx)(t.Q, { breadcrumbs: i }) }), (0, l.jsx)('main', { className: (0, n.Z)('utrecht-document', 'utrecht-html', 'col', { 'col--7': o, 'col--9 col--offset-1': !o }), itemScope: !0, itemType: 'http://schema.org/Blog', children: c }), s && (0, l.jsx)('div', { className: 'col col--2', children: s })] }) }) });
   }
  },
  62987: (e, a, s) => {
   s.r(a), s.d(a, { default: () => p });
   var t = s(14225),
    r = s(65697),
    n = s(94699),
    l = s(46918),
    i = s(80286),
    c = s(87318),
    d = s(41115),
    o = s(4814),
    h = s(29450),
    m = s(52676);
   function g(e) {
    const { metadata: a } = e,
     {
      siteConfig: { title: s },
     } = (0, n.Z)(),
     { blogDescription: r, blogTitle: l, permalink: i } = a,
     d = '/' === i ? s : l;
    return (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(t.d, { title: d, description: r }), (0, m.jsx)(c.Z, { tag: 'blog_posts_list' })] });
   }
   function u(e) {
    const { metadata: a, items: s, sidebar: t } = e;
    return (0, m.jsxs)(h.Z, { sidebar: t, breadcrumbs: [{ href: '#', label: a.blogTitle }], children: [(0, m.jsx)(d.nL, { children: a.blogTitle }), (0, m.jsx)(i.Z, { items: s }), (0, m.jsx)(l.Z, { metadata: a })] });
   }
   function p(e) {
    return (0, m.jsxs)(t.FG, { className: (0, o.Z)(r.k.wrapper.blogPages, r.k.page.blogListPage), children: [(0, m.jsx)(g, { ...e }), (0, m.jsx)(u, { ...e })] });
   }
  },
  80286: (e, a, s) => {
   s.d(a, { Z: () => m });
   var t = s(57229),
    r = s(94818),
    n = s(35038),
    l = s(72315),
    i = (0, l.Z)('outline', 'user', 'IconUser', [
     ['path', { d: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0', key: 'svg-0' }],
     ['path', { d: 'M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2', key: 'svg-1' }],
    ]),
    c = (0, l.Z)('outline', 'calendar', 'IconCalendar', [
     ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z', key: 'svg-0' }],
     ['path', { d: 'M16 3v4', key: 'svg-1' }],
     ['path', { d: 'M8 3v4', key: 'svg-2' }],
     ['path', { d: 'M4 11h16', key: 'svg-3' }],
     ['path', { d: 'M11 15h1', key: 'svg-4' }],
     ['path', { d: 'M12 15v3', key: 'svg-5' }],
    ]),
    d = s(41115),
    o = s(4814),
    h = s(52676);
   function m(e) {
    let { items: a } = e;
    return (0, h.jsx)(n.um, {
     appearance: 'large',
     children: a.map((e) => {
      let { content: a } = e;
      return (0, h.jsx)(r.n, { content: a, children: (0, h.jsx)(n.Zb, { appearance: 'large', className: 'blog-card', children: (0, h.jsxs)(n.aY, { children: [(0, h.jsx)(d.XJ, { children: (0, h.jsx)(t.r, { to: a.metadata.permalink, className: (0, o.Z)('utrecht-link', 'blog-card__header-link'), children: a.metadata.title }) }), (0, h.jsx)('div', { children: a.metadata.description }), (0, h.jsxs)(d.k, { children: [a.metadata.authors.map((e) => (0, h.jsxs)(d.Ou, { className: (0, o.Z)('blog-card__badge', 'blog-card__badge--author'), children: [(0, h.jsx)(d.JO, { children: (0, h.jsx)(i, {}) }), (0, h.jsx)('span', { className: 'visually-hidden', children: 'auteur:' }), ' ', e.name] }, e.name)), (0, h.jsxs)(d.Ou, { className: (0, o.Z)('blog-card__badge', 'blog-card__badge--date'), children: [(0, h.jsx)(d.JO, { children: (0, h.jsx)(c, {}) }), (0, h.jsx)('span', { className: 'visually-hidden', children: 'publicatie datum:' }), ' ', (0, h.jsx)('time', { dateTime: a.metadata.date, children: a.metadata.formattedDate })] })] })] }) }) }, a.metadata.permalink);
     }),
    });
   }
  },
 },
]);
