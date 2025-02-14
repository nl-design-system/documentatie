'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [53608],
 {
  63423: (e, s, t) => {
   t.r(s), t.d(s, { default: () => o });
   t(75271);
   var r = t(83033),
    a = t(40217),
    i = t(14225),
    n = t(95360),
    l = t(6709),
    c = t(52676);
   function d(e) {
    let { year: s, posts: t } = e;
    return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(l.Z, { as: 'h3', id: s, children: s }), (0, c.jsx)('ul', { children: t.map((e) => (0, c.jsx)('li', { children: (0, c.jsxs)(r.Z, { to: e.metadata.permalink, children: [e.metadata.formattedDate, ' - ', e.metadata.title] }) }, e.metadata.date)) })] });
   }
   function h(e) {
    let { years: s } = e;
    return (0, c.jsx)('section', { className: 'margin-vert--lg', children: (0, c.jsx)('div', { className: 'container', children: (0, c.jsx)('div', { className: 'row', children: s.map((e, s) => (0, c.jsx)('div', { className: 'col col--4 margin-vert--lg', children: (0, c.jsx)(d, { ...e }) }, s)) }) }) });
   }
   function o(e) {
    let { archive: s } = e;
    const t = (0, a.I)({ id: 'theme.blog.archive.title', message: 'Archive', description: 'The page & hero title of the blog archive page' }),
     r = (0, a.I)({ id: 'theme.blog.archive.description', message: 'Archive', description: 'The page & hero description of the blog archive page' }),
     d = (function (e) {
      const s = e.reduce((e, s) => {
       const t = s.metadata.date.split('-')[0],
        r = e.get(t) ?? [];
       return e.set(t, [s, ...r]);
      }, new Map());
      return Array.from(s, (e) => {
       let [s, t] = e;
       return { year: s, posts: t };
      });
     })(s.blogPosts);
    return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(i.d, { title: t, description: r }), (0, c.jsxs)(n.Z, { children: [(0, c.jsx)('header', { className: 'hero hero--primary', children: (0, c.jsxs)('div', { className: 'container', children: [(0, c.jsx)(l.Z, { as: 'h1', className: 'hero__title', children: t }), (0, c.jsx)('p', { className: 'hero__subtitle', children: r })] }) }), (0, c.jsx)('main', { children: d.length > 0 && (0, c.jsx)(h, { years: d }) })] })] });
   }
  },
 },
]);
