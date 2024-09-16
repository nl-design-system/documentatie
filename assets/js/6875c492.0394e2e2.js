/*! For license information please see 6875c492.0394e2e2.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [48610],
 {
  68933: (e, a, r) => {
   r.d(a, { Z: () => l });
   r(75271);
   var t = r(7512),
    s = r(6348),
    n = r(52676);
   function l(e) {
    const { metadata: a } = e,
     { previousPage: r, nextPage: l } = a;
    return (0, n.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, t.I)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [r && (0, n.jsx)(s.Z, { permalink: r, title: (0, n.jsx)(t.Z, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer Entries' }) }), l && (0, n.jsx)(s.Z, { permalink: l, title: (0, n.jsx)(t.Z, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older Entries' }), isNext: !0 })] });
   }
  },
  85878: (e, a, r) => {
   r.r(a), r.d(a, { default: () => j });
   r(75271);
   var t = r(4814),
    s = r(7512),
    n = r(30935),
    l = r(17310),
    c = r(61902),
    o = r(90441),
    i = r(29450),
    d = r(68933),
    u = r(68734),
    g = r(72479),
    h = r(12970),
    m = r(91725),
    p = r(52676);
   function _(e) {
    const a = (function () {
     const { selectMessage: e } = (0, n.c)();
     return (a) => e(a, (0, s.I)({ id: 'theme.blog.post.plurals', description: 'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One post|{count} posts' }, { count: a }));
    })();
    return (0, s.I)({ id: 'theme.blog.tagTitle', description: 'The title of the page for a blog tag', message: '{nPosts} tagged with "{tagName}"' }, { nPosts: a(e.count), tagName: e.label });
   }
   function x(e) {
    let { tag: a } = e;
    const r = _(a);
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(l.d, { title: r }), (0, p.jsx)(u.Z, { tag: 'blog_tags_posts' })] });
   }
   function b(e) {
    let { tag: a, items: r, sidebar: t, listMetadata: n } = e;
    const l = _(a);
    return (0, p.jsxs)(i.Z, { sidebar: t, children: [a.unlisted && (0, p.jsx)(h.Z, {}), (0, p.jsxs)('header', { className: 'margin-bottom--xl', children: [(0, p.jsx)(m.Z, { as: 'h1', children: l }), (0, p.jsx)(o.Z, { href: a.allTagsPath, children: (0, p.jsx)(s.Z, { id: 'theme.tags.tagsPageLink', description: 'The label of the link targeting the tag list page', children: 'View All Tags' }) })] }), (0, p.jsx)(g.Z, { items: r }), (0, p.jsx)(d.Z, { metadata: n })] });
   }
   function j(e) {
    return (0, p.jsxs)(l.FG, { className: (0, t.Z)(c.k.wrapper.blogPages, c.k.page.blogTagPostListPage), children: [(0, p.jsx)(x, { ...e }), (0, p.jsx)(b, { ...e })] });
   }
  },
  6348: (e, a, r) => {
   r.d(a, { Z: () => l });
   r(75271);
   var t = r(4814),
    s = r(90441),
    n = r(52676);
   function l(e) {
    const { permalink: a, title: r, subLabel: l, isNext: c } = e;
    return (0, n.jsxs)(s.Z, { className: (0, t.Z)('pagination-nav__link', c ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: a, children: [l && (0, n.jsx)('div', { className: 'pagination-nav__sublabel', children: l }), (0, n.jsx)('div', { className: 'pagination-nav__label', children: r })] });
   }
  },
  42082: (e, a, r) => {
   r.d(a, { C: () => o, n: () => c });
   var t = r(75271),
    s = r(15053),
    n = r(52676);
   const l = t.createContext(null);
   function c(e) {
    let { children: a, content: r, isBlogPostPage: s = !1 } = e;
    const c = (function (e) {
     let { content: a, isBlogPostPage: r } = e;
     return (0, t.useMemo)(() => ({ metadata: a.metadata, frontMatter: a.frontMatter, assets: a.assets, toc: a.toc, isBlogPostPage: r }), [a, r]);
    })({ content: r, isBlogPostPage: s });
    return (0, n.jsx)(l.Provider, { value: c, children: a });
   }
   function o() {
    const e = (0, t.useContext)(l);
    if (null === e) throw new s.i6('BlogPostProvider');
    return e;
   }
  },
  30935: (e, a, r) => {
   r.d(a, { c: () => i });
   var t = r(75271),
    s = r(87502);
   const n = ['zero', 'one', 'two', 'few', 'many', 'other'];
   function l(e) {
    return n.filter((a) => e.includes(a));
   }
   const c = { locale: 'en', pluralForms: l(['one', 'other']), select: (e) => (1 === e ? 'one' : 'other') };
   function o() {
    const {
     i18n: { currentLocale: e },
    } = (0, s.Z)();
    return (0, t.useMemo)(() => {
     try {
      return (function (e) {
       const a = new Intl.PluralRules(e);
       return { locale: e, pluralForms: l(a.resolvedOptions().pluralCategories), select: (e) => a.select(e) };
      })(e);
     } catch (a) {
      return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${a.message}\n`), c;
     }
    }, [e]);
   }
   function i() {
    const e = o();
    return {
     selectMessage: (a, r) =>
      (function (e, a, r) {
       const t = e.split('|');
       if (1 === t.length) return t[0];
       t.length > r.pluralForms.length && console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(',')}), but the message contains ${t.length}: ${e}`);
       const s = r.select(a),
        n = r.pluralForms.indexOf(s);
       return t[Math.min(n, t.length - 1)];
      })(r, a, e),
    };
   }
  },
  89846: (e, a, r) => {
   r.d(a, { Q: () => m });
   var t = r(90441),
    s = r(3225),
    n = r(46744),
    l = r(55525),
    c = r(46506),
    o = r(4814),
    i = r(75271);
   const d = 'breadcrumbs__73z',
    u = 'breadcrumbs--mobile_QwgF',
    g = 'breadcrumbs--desktop_v9Xv';
   var h = r(52676);
   const m = (e) => {
    let { breadcrumbs: a, ...r } = e;
    const m = [{ href: (0, n.Z)('/'), label: 'Home', rel: 'home' }, ...a],
     { pathname: p } = (0, s.TH)(),
     _ = [...m].reverse().find((e) => e.href !== p);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)('div', {
       className: (0, o.Z)(d, g),
       children: (0, h.jsx)(c.Qu, {
        ...r,
        children: m.map((e, a, r) => {
         let { label: t, href: s, rel: n } = e,
          { length: l } = r;
         return (0, h.jsxs)(i.Fragment, { children: [(0, h.jsx)(c.yY, { href: s, current: a === l - 1, disabled: a === l - 1, rel: (0, o.Z)(n, { up: a === l - 2 }), children: t }), a < l - 1 && (0, h.jsx)(c.sc, { children: '/' })] }, a);
        }),
       }),
      }),
      _ && (0, h.jsx)('div', { className: (0, o.Z)(d, u), children: (0, h.jsx)(c.hE, { children: (0, h.jsxs)(t.Z, { href: _.href, rel: _.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, h.jsx)(c.JO, { children: (0, h.jsx)(l.Z, {}) }), _.label] }) }) }),
     ],
    });
   };
  },
  68963: (e, a, r) => {
   r.d(a, { Zb: () => i, aY: () => o, um: () => d, wu: () => c });
   var t = r(46506),
    s = r(4814);
   r(75271);
   const n = { cardgroup: 'cardgroup_0VVt', 'cardgroup--small': 'cardgroup--small_BDzz', 'cardgroup--medium': 'cardgroup--medium_xS6r', 'cardgroup--large': 'cardgroup--large_Tjo8', cardgroup__card: 'cardgroup__card_emnt', 'cardgroup__card--small': 'cardgroup__card--small_bxfC', 'cardgroup__card--large': 'cardgroup__card--large_PGe3', cardgroup__link: 'cardgroup__link_YISR', card__illustration: 'card__illustration_MVXv', 'card__illustration--background': 'card__illustration--background_cTcZ', card__content: 'card__content_LYKG' };
   var l = r(52676);
   const c = (e) => {
     let { background: a, children: r, className: t, ...c } = e;
     return (0, l.jsx)('div', { className: (0, s.Z)(n.card__illustration, a && n['card__illustration--background'], t), ...c, children: r });
    },
    o = (e) => (0, l.jsx)('div', { className: (0, s.Z)(n.card__content), ...e }),
    i = (e) => {
     let { href: a, appearance: r, className: c, component: o = 'div', children: i } = e;
     const d = (e) => ('article' === o ? (0, l.jsx)('article', { ...e }) : 'section' === o ? (0, l.jsx)('section', { ...e }) : (0, l.jsx)('div', { ...e })),
      u = (0, l.jsx)(d, { className: (0, s.Z)(n.cardgroup__card, n[`cardgroup__card--${r}`], c), children: i });
     return a ? (0, l.jsx)(t.rU, { href: a, boxContent: !0, className: n.cardgroup__link, children: u }) : u;
    },
    d = (e) => {
     let { appearance: a = 'medium', children: r, className: t } = e;
     return (0, l.jsx)('div', { className: (0, s.Z)(n.cardgroup, n[`cardgroup--${a}`], t), children: r });
    };
  },
  29450: (e, a, r) => {
   r.d(a, { Z: () => c });
   var t = r(89846),
    s = r(38889),
    n = r(4814),
    l = (r(75271), r(52676));
   function c(e) {
    const { sidebar: a, toc: r, breadcrumbs: c = [], children: o, ...i } = e,
     d = a && a.items.length > 0;
    return (0, l.jsx)(s.Z, { ...i, children: (0, l.jsx)('div', { className: 'container margin-vert--md', children: (0, l.jsxs)('div', { className: 'row', children: [(0, l.jsx)('div', { className: 'col col--9 col--offset-1', children: (0, l.jsx)(t.Q, { breadcrumbs: c }) }), (0, l.jsx)('main', { className: (0, n.Z)('utrecht-document', 'utrecht-html', 'col', { 'col--7': d, 'col--9 col--offset-1': !d }), itemScope: !0, itemType: 'http://schema.org/Blog', children: o }), r && (0, l.jsx)('div', { className: 'col col--2', children: r })] }) }) });
   }
  },
  72479: (e, a, r) => {
   r.d(a, { Z: () => g });
   var t = r(90441),
    s = r(42082),
    n = r(68963),
    l = r(4839),
    c = (0, r(69804).Z)('outline', 'calendar', 'IconCalendar', [
     ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z', key: 'svg-0' }],
     ['path', { d: 'M16 3v4', key: 'svg-1' }],
     ['path', { d: 'M8 3v4', key: 'svg-2' }],
     ['path', { d: 'M4 11h16', key: 'svg-3' }],
     ['path', { d: 'M11 15h1', key: 'svg-4' }],
     ['path', { d: 'M12 15v3', key: 'svg-5' }],
    ]),
    o = r(56150),
    i = r(4814);
   r(75271);
   const d = { 'blog-card': 'blog-card_ZodC', 'blog-card__header-link': 'blog-card__header-link_rMVL', 'blog-card__badge': 'blog-card__badge_bQ4F' };
   var u = r(52676);
   function g(e) {
    let { items: a } = e;
    return (0, u.jsx)(n.um, {
     appearance: 'large',
     children: a.map((e) => {
      let { content: a } = e;
      return (0, u.jsx)(s.n, { content: a, children: (0, u.jsx)(n.Zb, { appearance: 'large', className: d['blog-card'], children: (0, u.jsxs)(n.aY, { children: [(0, u.jsx)(o.XJ, { children: (0, u.jsx)(t.Z, { to: a.metadata.permalink, className: (0, i.Z)('utrecht-link', d['blog-card__header-link']), children: a.metadata.title }) }), (0, u.jsx)('div', { children: a.metadata.description }), (0, u.jsxs)(o.k, { children: [a.metadata.authors.map((e) => (0, u.jsxs)(o.Ou, { className: (0, i.Z)(d['blog-card__badge'], d['blog-card__badge--author']), children: [(0, u.jsx)(o.JO, { children: (0, u.jsx)(l.Z, {}) }), (0, u.jsx)('span', { className: 'visually-hidden', children: 'auteur:' }), ' ', e.name] }, e.name)), (0, u.jsxs)(o.Ou, { className: (0, i.Z)(d['blog-card__badge'], d['blog-card__badge--date']), children: [(0, u.jsx)(o.JO, { children: (0, u.jsx)(c, {}) }), (0, u.jsx)('span', { className: 'visually-hidden', children: 'publicatie datum:' }), ' ', (0, u.jsx)('time', { dateTime: a.metadata.date, children: a.metadata.formattedDate })] })] })] }) }) }, a.metadata.permalink);
     }),
    });
   }
  },
  12970: (e, a, r) => {
   r.d(a, { Z: () => l });
   r(75271), r(7512);
   var t = r(93176),
    s = r(52676);
   function n() {
    return (0, s.jsx)(t.Z, { children: (0, s.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function l() {
    return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(n, {}) });
   }
  },
  4839: (e, a, r) => {
   r.d(a, { Z: () => t });
   var t = (0, r(69804).Z)('outline', 'user', 'IconUser', [
    ['path', { d: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0', key: 'svg-0' }],
    ['path', { d: 'M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2', key: 'svg-1' }],
   ]);
  },
 },
]);
