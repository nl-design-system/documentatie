/*! For license information please see 6875c492.8de2a939.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [48610],
 {
  68933: (e, a, t) => {
   t.d(a, { Z: () => l });
   t(75271);
   var s = t(7512),
    n = t(6348),
    r = t(52676);
   function l(e) {
    const { metadata: a } = e,
     { previousPage: t, nextPage: l } = a;
    return (0, r.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, s.I)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [t && (0, r.jsx)(n.Z, { permalink: t, title: (0, r.jsx)(s.Z, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer Entries' }) }), l && (0, r.jsx)(n.Z, { permalink: l, title: (0, r.jsx)(s.Z, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older Entries' }), isNext: !0 })] });
   }
  },
  85878: (e, a, t) => {
   t.r(a), t.d(a, { default: () => v });
   t(75271);
   var s = t(4814),
    n = t(7512),
    r = t(30935),
    l = t(17310),
    i = t(61902),
    c = t(90441),
    o = t(29450),
    d = t(68933),
    u = t(68734),
    h = t(67032),
    m = t(12970),
    g = t(91725),
    p = t(52676);
   function x(e) {
    const a = (function () {
     const { selectMessage: e } = (0, r.c)();
     return (a) => e(a, (0, n.I)({ id: 'theme.blog.post.plurals', description: 'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One post|{count} posts' }, { count: a }));
    })();
    return (0, n.I)({ id: 'theme.blog.tagTitle', description: 'The title of the page for a blog tag', message: '{nPosts} tagged with "{tagName}"' }, { nPosts: a(e.count), tagName: e.label });
   }
   function b(e) {
    let { tag: a } = e;
    const t = x(a);
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(l.d, { title: t }), (0, p.jsx)(u.Z, { tag: 'blog_tags_posts' })] });
   }
   function j(e) {
    let { tag: a, items: t, sidebar: s, listMetadata: r } = e;
    const l = x(a);
    return (0, p.jsxs)(o.Z, { sidebar: s, children: [a.unlisted && (0, p.jsx)(m.Z, {}), (0, p.jsxs)('header', { className: 'margin-bottom--xl', children: [(0, p.jsx)(g.Z, { as: 'h1', children: l }), (0, p.jsx)(c.Z, { href: a.allTagsPath, children: (0, p.jsx)(n.Z, { id: 'theme.tags.tagsPageLink', description: 'The label of the link targeting the tag list page', children: 'View All Tags' }) })] }), (0, p.jsx)(h.Z, { items: t }), (0, p.jsx)(d.Z, { metadata: r })] });
   }
   function v(e) {
    return (0, p.jsxs)(l.FG, { className: (0, s.Z)(i.k.wrapper.blogPages, i.k.page.blogTagPostListPage), children: [(0, p.jsx)(b, { ...e }), (0, p.jsx)(j, { ...e })] });
   }
  },
  6348: (e, a, t) => {
   t.d(a, { Z: () => l });
   t(75271);
   var s = t(4814),
    n = t(90441),
    r = t(52676);
   function l(e) {
    const { permalink: a, title: t, subLabel: l, isNext: i } = e;
    return (0, r.jsxs)(n.Z, { className: (0, s.Z)('pagination-nav__link', i ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: a, children: [l && (0, r.jsx)('div', { className: 'pagination-nav__sublabel', children: l }), (0, r.jsx)('div', { className: 'pagination-nav__label', children: t })] });
   }
  },
  42082: (e, a, t) => {
   t.d(a, { C: () => c, n: () => i });
   var s = t(75271),
    n = t(15053),
    r = t(52676);
   const l = s.createContext(null);
   function i(e) {
    let { children: a, content: t, isBlogPostPage: n = !1 } = e;
    const i = (function (e) {
     let { content: a, isBlogPostPage: t } = e;
     return (0, s.useMemo)(() => ({ metadata: a.metadata, frontMatter: a.frontMatter, assets: a.assets, toc: a.toc, isBlogPostPage: t }), [a, t]);
    })({ content: t, isBlogPostPage: n });
    return (0, r.jsx)(l.Provider, { value: i, children: a });
   }
   function c() {
    const e = (0, s.useContext)(l);
    if (null === e) throw new n.i6('BlogPostProvider');
    return e;
   }
  },
  30935: (e, a, t) => {
   t.d(a, { c: () => o });
   var s = t(75271),
    n = t(87502);
   const r = ['zero', 'one', 'two', 'few', 'many', 'other'];
   function l(e) {
    return r.filter((a) => e.includes(a));
   }
   const i = { locale: 'en', pluralForms: l(['one', 'other']), select: (e) => (1 === e ? 'one' : 'other') };
   function c() {
    const {
     i18n: { currentLocale: e },
    } = (0, n.Z)();
    return (0, s.useMemo)(() => {
     try {
      return (function (e) {
       const a = new Intl.PluralRules(e);
       return { locale: e, pluralForms: l(a.resolvedOptions().pluralCategories), select: (e) => a.select(e) };
      })(e);
     } catch (a) {
      return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${a.message}\n`), i;
     }
    }, [e]);
   }
   function o() {
    const e = c();
    return {
     selectMessage: (a, t) =>
      (function (e, a, t) {
       const s = e.split('|');
       if (1 === s.length) return s[0];
       s.length > t.pluralForms.length && console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(',')}), but the message contains ${s.length}: ${e}`);
       const n = t.select(a),
        r = t.pluralForms.indexOf(n);
       return s[Math.min(r, s.length - 1)];
      })(t, a, e),
    };
   }
  },
  24009: (e, a, t) => {
   t.d(a, { Q: () => u });
   var s = t(90441),
    n = t(3225),
    r = t(46744),
    l = t(55525),
    i = t(46506),
    c = t(4814),
    o = t(75271),
    d = t(52676);
   const u = (e) => {
    let { breadcrumbs: a, ...t } = e;
    const u = [{ href: (0, r.Z)('/'), label: 'Home', rel: 'home' }, ...a],
     { pathname: h } = (0, n.TH)(),
     m = [...u].reverse().find((e) => e.href !== h);
    return (0, d.jsxs)(d.Fragment, {
     children: [
      (0, d.jsx)('div', {
       className: (0, c.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, d.jsx)(i.Qu, {
        ...t,
        label: 'breadcrumb',
        children: u.map((e, a, t) => {
         let { label: s, href: n, rel: r } = e,
          { length: l } = t;
         return (0, d.jsxs)(o.Fragment, { children: [(0, d.jsx)(i.yY, { href: n, current: a === l - 1, disabled: a === l - 1, rel: (0, c.Z)(r, { up: a === l - 2 }), children: s }), a < l - 1 && (0, d.jsx)(i.sc, { children: '/' })] }, a);
        }),
       }),
      }),
      m && (0, d.jsx)('div', { className: (0, c.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, d.jsx)(i.hE, { children: (0, d.jsxs)(s.Z, { href: m.href, rel: m.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, d.jsx)(i.JO, { children: (0, d.jsx)(l.Z, {}) }), m.label] }) }) }),
     ],
    });
   };
  },
  35038: (e, a, t) => {
   t.d(a, { Zb: () => c, aY: () => i, um: () => o, wu: () => l });
   var s = t(46506),
    n = t(4814),
    r = (t(75271), t(52676));
   const l = (e) => {
     let { background: a, children: t, className: s, ...l } = e;
     return (0, r.jsx)('div', { className: (0, n.Z)('card__illustration', a && 'card__illustration--background', s), ...l, children: t });
    },
    i = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    c = (e) => {
     let { href: a, appearance: t, className: l, component: i = 'div', children: c } = e;
     const o = (e) => ('article' === i ? (0, r.jsx)('article', { ...e }) : 'section' === i ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      d = (0, r.jsx)(o, { className: (0, n.Z)('cardgroup__card', `cardgroup__card--${t}`, l), children: c });
     return a ? (0, r.jsx)(s.rU, { href: a, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    o = (e) => {
     let { appearance: a = 'medium', children: t, className: s } = e;
     return (0, r.jsx)('div', { className: (0, n.Z)('cardgroup', `cardgroup--${a}`, s), children: t });
    };
  },
  29450: (e, a, t) => {
   t.d(a, { Z: () => i });
   var s = t(24009),
    n = t(92931),
    r = t(4814),
    l = (t(75271), t(52676));
   function i(e) {
    const { sidebar: a, toc: t, breadcrumbs: i = [], children: c, ...o } = e,
     d = a && a.items.length > 0;
    return (0, l.jsx)(n.Z, { ...o, children: (0, l.jsx)('div', { className: 'container margin-vert--md', children: (0, l.jsxs)('div', { className: 'row', children: [(0, l.jsx)('div', { className: 'col col--9 col--offset-1', children: (0, l.jsx)(s.Q, { breadcrumbs: i }) }), (0, l.jsx)('main', { className: (0, r.Z)('utrecht-document', 'utrecht-html', 'col', { 'col--7': d, 'col--9 col--offset-1': !d }), itemScope: !0, itemType: 'http://schema.org/Blog', children: c }), t && (0, l.jsx)('div', { className: 'col col--2', children: t })] }) }) });
   }
  },
  67032: (e, a, t) => {
   t.d(a, { Z: () => u });
   var s = t(90441),
    n = t(42082),
    r = t(35038),
    l = t(4839),
    i = (0, t(69804).Z)('outline', 'calendar', 'IconCalendar', [
     ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z', key: 'svg-0' }],
     ['path', { d: 'M16 3v4', key: 'svg-1' }],
     ['path', { d: 'M8 3v4', key: 'svg-2' }],
     ['path', { d: 'M4 11h16', key: 'svg-3' }],
     ['path', { d: 'M11 15h1', key: 'svg-4' }],
     ['path', { d: 'M12 15v3', key: 'svg-5' }],
    ]),
    c = t(56150),
    o = t(4814),
    d = (t(75271), t(52676));
   function u(e) {
    let { items: a } = e;
    return (0, d.jsx)(r.um, {
     appearance: 'large',
     children: a.map((e) => {
      let { content: a } = e;
      return (0, d.jsx)(n.n, { content: a, children: (0, d.jsx)(r.Zb, { appearance: 'large', className: 'blog-card', children: (0, d.jsxs)(r.aY, { children: [(0, d.jsx)(c.XJ, { children: (0, d.jsx)(s.Z, { to: a.metadata.permalink, className: (0, o.Z)('utrecht-link', 'blog-card__header-link'), children: a.metadata.title }) }), (0, d.jsx)('div', { children: a.metadata.description }), (0, d.jsxs)(c.k, { children: [a.metadata.authors.map((e) => (0, d.jsxs)(c.Ou, { className: (0, o.Z)('blog-card__badge', 'blog-card__badge--author'), children: [(0, d.jsx)(c.JO, { children: (0, d.jsx)(l.Z, {}) }), (0, d.jsx)('span', { className: 'visually-hidden', children: 'auteur:' }), ' ', e.name] }, e.name)), (0, d.jsxs)(c.Ou, { className: (0, o.Z)('blog-card__badge', 'blog-card__badge--date'), children: [(0, d.jsx)(c.JO, { children: (0, d.jsx)(i, {}) }), (0, d.jsx)('span', { className: 'visually-hidden', children: 'publicatie datum:' }), ' ', (0, d.jsx)('time', { dateTime: a.metadata.date, children: a.metadata.formattedDate })] })] })] }) }) }, a.metadata.permalink);
     }),
    });
   }
  },
  12970: (e, a, t) => {
   t.d(a, { Z: () => l });
   t(75271), t(7512);
   var s = t(93176),
    n = t(52676);
   function r() {
    return (0, n.jsx)(s.Z, { children: (0, n.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function l() {
    return (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(r, {}) });
   }
  },
  4839: (e, a, t) => {
   t.d(a, { Z: () => s });
   var s = (0, t(69804).Z)('outline', 'user', 'IconUser', [
    ['path', { d: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0', key: 'svg-0' }],
    ['path', { d: 'M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2', key: 'svg-1' }],
   ]);
  },
 },
]);
