'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [35268],
 {
  11584(e, t, a) {
   a.d(t, { A: () => r });
   a(30758);
   var s = a(74438),
    n = a(55018),
    i = a(86070);
   function r({ items: e, component: t = n.A }) {
    return (0, i.jsx)(i.Fragment, { children: e.map(({ content: e }) => (0, i.jsx)(s.in, { content: e, children: (0, i.jsx)(t, { children: (0, i.jsx)(e, {}) }) }, e.metadata.permalink)) });
   }
  },
  16557(e, t, a) {
   a.d(t, { A: () => j });
   a(30758);
   var s = a(13526),
    n = a(63475),
    i = a(19499),
    r = a(83648);
   const l = 'iconEdit_AU1i';
   var o = a(86070);
   function d({ className: e, ...t }) {
    return (0, o.jsx)('svg', { fill: 'currentColor', height: '20', width: '20', viewBox: '0 0 40 40', className: (0, s.A)(l, e), 'aria-hidden': 'true', ...t, children: (0, o.jsx)('g', { children: (0, o.jsx)('path', { d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z' }) }) });
   }
   function c({ editUrl: e }) {
    return (0, o.jsxs)(r.A, { to: e, className: i.G.common.editThisPage, children: [(0, o.jsx)(d, {}), (0, o.jsx)(n.A, { id: 'theme.common.editThisPage', description: 'The link label to edit the current page', children: 'Edit this page' })] });
   }
   var m = a(81246);
   function h({ lastUpdatedAt: e }) {
    const t = new Date(e),
     a = (0, m.i)({ day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(t);
    return (0, o.jsx)(n.A, { id: 'theme.lastUpdated.atDate', description: 'The words used to describe on which date a page has been last updated', values: { date: (0, o.jsx)('b', { children: (0, o.jsx)('time', { dateTime: t.toISOString(), itemProp: 'dateModified', children: a }) }) }, children: ' on {date}' });
   }
   function u({ lastUpdatedBy: e }) {
    return (0, o.jsx)(n.A, { id: 'theme.lastUpdated.byUser', description: 'The words used to describe by who the page has been last updated', values: { user: (0, o.jsx)('b', { children: e }) }, children: ' by {user}' });
   }
   function g({ lastUpdatedAt: e, lastUpdatedBy: t }) {
    return (0, o.jsxs)('span', { className: i.G.common.lastUpdated, children: [(0, o.jsx)(n.A, { id: 'theme.lastUpdated.lastUpdatedAtBy', description: 'The sentence used to display when a page has been last updated, and by who', values: { atDate: e ? (0, o.jsx)(h, { lastUpdatedAt: e }) : '', byUser: t ? (0, o.jsx)(u, { lastUpdatedBy: t }) : '' }, children: 'Last updated{atDate}{byUser}' }), !1] });
   }
   const p = 'lastUpdated_pVQo',
    x = 'noPrint_rT2f';
   function j({ className: e, editUrl: t, lastUpdatedAt: a, lastUpdatedBy: n }) {
    return (0, o.jsxs)('div', { className: (0, s.A)('row', e), children: [(0, o.jsx)('div', { className: (0, s.A)('col', x), children: t && (0, o.jsx)(c, { editUrl: t }) }), (0, o.jsx)('div', { className: (0, s.A)('col', p), children: (a || n) && (0, o.jsx)(g, { lastUpdatedAt: a, lastUpdatedBy: n }) })] });
   }
  },
  27125(e, t, a) {
   a.d(t, { A: () => r });
   a(30758);
   var s = a(63475),
    n = a(71522),
    i = a(86070);
   function r(e) {
    const { metadata: t } = e,
     { previousPage: a, nextPage: r } = t;
    return (0, i.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, s.T)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [a && (0, i.jsx)(n.A, { permalink: a, title: (0, i.jsx)(s.A, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer entries' }) }), r && (0, i.jsx)(n.A, { permalink: r, title: (0, i.jsx)(s.A, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older entries' }), isNext: !0 })] });
   }
  },
  55018(e, t, a) {
   a.d(t, { A: () => C });
   a(30758);
   var s = a(13526),
    n = a(74438),
    i = a(86070);
   function r({ children: e, className: t }) {
    return (0, i.jsx)('article', { className: t, children: e });
   }
   var l = a(83648);
   const o = 'title_qlHA';
   function d({ className: e }) {
    const { metadata: t, isBlogPostPage: a } = (0, n.e7)(),
     { permalink: r, title: d } = t,
     c = a ? 'h1' : 'h2';
    return (0, i.jsx)(c, { className: (0, s.A)(o, e), children: a ? d : (0, i.jsx)(l.A, { to: r, children: d }) });
   }
   var c = a(63475),
    m = a(74621),
    h = a(81246);
   const u = 'container_poU8';
   function g({ readingTime: e }) {
    const t = (function () {
     const { selectMessage: e } = (0, m.W)();
     return (t) => {
      const a = Math.ceil(t);
      return e(a, (0, c.T)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: a }));
     };
    })();
    return (0, i.jsx)(i.Fragment, { children: t(e) });
   }
   function p({ date: e, formattedDate: t }) {
    return (0, i.jsx)('time', { dateTime: e, children: t });
   }
   function x() {
    return (0, i.jsx)(i.Fragment, { children: ' \xb7 ' });
   }
   function j({ className: e }) {
    const { metadata: t } = (0, n.e7)(),
     { date: a, readingTime: r } = t,
     l = (0, h.i)({ day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    return (0, i.jsxs)('div', { className: (0, s.A)(u, 'margin-vert--md', e), children: [(0, i.jsx)(p, { date: a, formattedDate: ((o = a), l.format(new Date(o))) }), void 0 !== r && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(x, {}), (0, i.jsx)(g, { readingTime: r })] })] });
    var o;
   }
   var A = a(91566);
   const b = 'authorCol_R7XV',
    v = 'imageOnlyAuthorRow__ojw',
    f = 'imageOnlyAuthorCol_sMmV';
   function N({ className: e }) {
    const {
     metadata: { authors: t },
     assets: a,
    } = (0, n.e7)();
    if (0 === t.length) return null;
    const r = t.every(({ name: e }) => !e),
     l = 1 === t.length;
    return (0, i.jsx)('div', { className: (0, s.A)('margin-top--md margin-bottom--sm', r ? v : 'row', e), children: t.map((e, t) => (0, i.jsx)('div', { className: (0, s.A)(!r && (l ? 'col col--12' : 'col col--6'), r ? f : b), children: (0, i.jsx)(A.A, { author: { ...e, imageURL: a.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function U() {
    return (0, i.jsxs)('header', { children: [(0, i.jsx)(d, {}), (0, i.jsx)(j, {}), (0, i.jsx)(N, {})] });
   }
   var T = a(99939),
    _ = a(85963);
   function w({ children: e, className: t }) {
    const { isBlogPostPage: a } = (0, n.e7)();
    return (0, i.jsx)('div', { id: a ? T.LU : void 0, className: (0, s.A)('markdown', t), children: (0, i.jsx)(_.A, { children: e }) });
   }
   var y = a(19499),
    k = a(16557),
    P = a(94484);
   function B() {
    return (0, i.jsx)('b', { children: (0, i.jsx)(c.A, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read more' }) });
   }
   function L(e) {
    const { blogPostTitle: t, ...a } = e;
    return (0, i.jsx)(l.A, { 'aria-label': (0, c.T)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...a, children: (0, i.jsx)(B, {}) });
   }
   function R() {
    const { metadata: e, isBlogPostPage: t } = (0, n.e7)(),
     { tags: a, title: r, editUrl: l, hasTruncateMarker: o, lastUpdatedBy: d, lastUpdatedAt: c } = e,
     m = !t && o,
     h = a.length > 0;
    if (!(h || m || l)) return null;
    if (t) {
     const e = !!(l || c || d);
     return (0, i.jsxs)('footer', { className: 'docusaurus-mt-lg', children: [h && (0, i.jsx)('div', { className: (0, s.A)('row', 'margin-top--sm', y.G.blog.blogFooterEditMetaRow), children: (0, i.jsx)('div', { className: 'col', children: (0, i.jsx)(P.A, { tags: a }) }) }), e && (0, i.jsx)(k.A, { className: (0, s.A)('margin-top--sm', y.G.blog.blogFooterEditMetaRow), editUrl: l, lastUpdatedAt: c, lastUpdatedBy: d })] });
    }
    return (0, i.jsxs)('footer', { className: 'row docusaurus-mt-lg', children: [h && (0, i.jsx)('div', { className: (0, s.A)('col', { 'col--9': m }), children: (0, i.jsx)(P.A, { tags: a }) }), m && (0, i.jsx)('div', { className: (0, s.A)('col text--right', { 'col--3': h }), children: (0, i.jsx)(L, { blogPostTitle: r, to: e.permalink }) })] });
   }
   function C({ children: e, className: t }) {
    const a = (function () {
     const { isBlogPostPage: e } = (0, n.e7)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, i.jsxs)(r, { className: (0, s.A)(a, t), children: [(0, i.jsx)(U, {}), (0, i.jsx)(w, { children: e }), (0, i.jsx)(R, {})] });
   }
  },
  58796(e, t, a) {
   a.d(t, { A: () => d });
   a(30758);
   var s = a(13526),
    n = a(83648);
   const i = 'tag_JwFX',
    r = 'tagRegular_pSBk',
    l = 'tagWithCount_x6X6';
   var o = a(86070);
   function d({ permalink: e, label: t, count: a, description: d }) {
    return (0, o.jsxs)(n.A, { rel: 'tag', href: e, title: d, className: (0, s.A)(i, a ? l : r), children: [t, a && (0, o.jsx)('span', { children: a })] });
   }
  },
  71522(e, t, a) {
   a.d(t, { A: () => r });
   a(30758);
   var s = a(13526),
    n = a(83648),
    i = a(86070);
   function r(e) {
    const { permalink: t, title: a, subLabel: r, isNext: l } = e;
    return (0, i.jsxs)(n.A, { className: (0, s.A)('pagination-nav__link', l ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: t, children: [r && (0, i.jsx)('div', { className: 'pagination-nav__sublabel', children: r }), (0, i.jsx)('div', { className: 'pagination-nav__label', children: a })] });
   }
  },
  81246(e, t, a) {
   a.d(t, { i: () => n });
   var s = a(32296);
   function n(e = {}) {
    const {
      i18n: { currentLocale: t },
     } = (0, s.A)(),
     a = (function () {
      const {
       i18n: { currentLocale: e, localeConfigs: t },
      } = (0, s.A)();
      return t[e].calendar;
     })();
    return new Intl.DateTimeFormat(t, { calendar: a, ...e });
   }
  },
  94484(e, t, a) {
   a.d(t, { A: () => d });
   a(30758);
   var s = a(13526),
    n = a(63475),
    i = a(58796);
   const r = 'tags_EY8n',
    l = 'tag_grtc';
   var o = a(86070);
   function d({ tags: e }) {
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('b', { children: (0, o.jsx)(n.A, { id: 'theme.tags.tagsListLabel', description: 'The label alongside a tag list', children: 'Tags:' }) }), (0, o.jsx)('ul', { className: (0, s.A)(r, 'padding--none', 'margin-left--sm'), children: e.map((e) => (0, o.jsx)('li', { className: l, children: (0, o.jsx)(i.A, { ...e }) }, e.permalink)) })] });
   }
  },
 },
]);
