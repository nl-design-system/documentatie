'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [64212],
 {
  64855: (s, t, e) => {
   e.d(t, { ZD: () => l, uz: () => u });
   e(30758);
   var a = e(40359),
    o = e(47895);
   e(86070);
   function r() {
    const { selectMessage: s } = (0, o.W)();
    return (t) => s(t, (0, a.T)({ id: 'theme.blog.post.plurals', description: 'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One post|{count} posts' }, { count: t }));
   }
   function l(s) {
    const t = r();
    return (0, a.T)({ id: 'theme.blog.tagTitle', description: 'The title of the page for a blog tag', message: '{nPosts} tagged with "{tagName}"' }, { nPosts: t(s.count), tagName: s.label });
   }
   const u = () => (0, a.T)({ id: 'theme.blog.authorsList.pageTitle', message: 'Authors', description: 'The title of the authors page' });
  },
  77868: (s, t, e) => {
   e.r(t), e.d(t, { default: () => m });
   e(30758);
   var a = e(13526),
    o = e(85970),
    r = e(76493),
    l = e(64855),
    u = e(71462),
    n = e(27889),
    i = e(60054),
    h = e(72487);
   const c = { authorListItem: 'authorListItem_R0JN' };
   var g = e(86070);
   function p({ author: s }) {
    return (0, g.jsx)('li', { className: c.authorListItem, children: (0, g.jsx)(h.A, { as: 'h2', author: s, count: s.count }) });
   }
   function d({ authors: s }) {
    return (0, g.jsx)('section', { className: (0, a.A)('margin-vert--lg', c.authorsListSection), children: (0, g.jsx)('ul', { children: s.map((s) => (0, g.jsx)(p, { author: s }, s.key)) }) });
   }
   function m({ authors: s, sidebar: t }) {
    const e = (0, l.uz)();
    return (0, g.jsxs)(o.e3, { className: (0, a.A)(r.G.wrapper.blogPages, r.G.page.blogAuthorsListPage), children: [(0, g.jsx)(o.be, { title: e }), (0, g.jsx)(n.A, { tag: 'blog_authors_list' }), (0, g.jsxs)(u.A, { sidebar: t, children: [(0, g.jsx)(i.A, { as: 'h1', children: e }), (0, g.jsx)(d, { authors: s })] })] });
   }
  },
 },
]);
