'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64013],
 {
  73670: (e, r, s) => {
   s.r(r), s.d(r, { default: () => j });
   s(75271);
   var t = s(4814),
    a = s(40217);
   const l = () => (0, a.I)({ id: 'theme.tags.tagsPageTitle', message: 'Tags', description: 'The title of the tag list page' });
   var n = s(14225),
    c = s(65697),
    i = s(29450),
    h = s(70923),
    d = s(6709);
   const o = { tag: 'tag_hYj3' };
   var m = s(52676);
   function u(e) {
    let { letterEntry: r } = e;
    return (0, m.jsxs)('article', { children: [(0, m.jsx)(d.Z, { as: 'h2', id: r.letter, children: r.letter }), (0, m.jsx)('ul', { className: 'padding--none', children: r.tags.map((e) => (0, m.jsx)('li', { className: o.tag, children: (0, m.jsx)(h.Z, { ...e }) }, e.permalink)) }), (0, m.jsx)('hr', {})] });
   }
   function g(e) {
    let { tags: r } = e;
    const s = (function (e) {
     const r = {};
     return (
      Object.values(e).forEach((e) => {
       const s = (function (e) {
        return e[0].toUpperCase();
       })(e.label);
       (r[s] ??= []), r[s].push(e);
      }),
      Object.entries(r)
       .sort((e, r) => {
        let [s] = e,
         [t] = r;
        return s.localeCompare(t);
       })
       .map((e) => {
        let [r, s] = e;
        return { letter: r, tags: s.sort((e, r) => e.label.localeCompare(r.label)) };
       })
     );
    })(r);
    return (0, m.jsx)('section', { className: 'margin-vert--lg', children: s.map((e) => (0, m.jsx)(u, { letterEntry: e }, e.letter)) });
   }
   var b = s(87318);
   function j(e) {
    let { tags: r, sidebar: s } = e;
    const a = l();
    return (0, m.jsxs)(n.FG, { className: (0, t.Z)(c.k.wrapper.blogPages, c.k.page.blogTagsListPage), children: [(0, m.jsx)(n.d, { title: a }), (0, m.jsx)(b.Z, { tag: 'blog_tags_list' }), (0, m.jsxs)(i.Z, { sidebar: s, children: [(0, m.jsx)(d.Z, { as: 'h1', children: a }), (0, m.jsx)(g, { tags: r })] })] });
   }
  },
  70923: (e, r, s) => {
   s.d(r, { Z: () => c });
   s(75271);
   var t = s(4814),
    a = s(83033);
   const l = { tag: 'tag_YSTM', tagRegular: 'tagRegular_l64o', tagWithCount: 'tagWithCount_oNQj' };
   var n = s(52676);
   function c(e) {
    let { permalink: r, label: s, count: c } = e;
    return (0, n.jsxs)(a.Z, { href: r, className: (0, t.Z)(l.tag, c ? l.tagWithCount : l.tagRegular), children: [s, c && (0, n.jsx)('span', { children: c })] });
   }
  },
  24009: (e, r, s) => {
   s.d(r, { Q: () => o });
   var t = s(57229),
    a = s(87573),
    l = s(92826),
    n = s(34616),
    c = s(16167),
    i = s(4814),
    h = s(75271),
    d = s(52676);
   const o = (e) => {
    let { breadcrumbs: r, ...s } = e;
    const o = (0, l.Z)('/'),
     { pathname: m } = (0, a.TH)(),
     u = [{ href: o, label: 'Home', rel: 'home' }, ...r].map((e) => {
      return { ...e, href: ((r = e.href), 'string' == typeof r && !1 === r.endsWith('/') ? `${r}/` : r) };
      var r;
     }),
     g = [...u].reverse().find((e) => e.href !== m);
    return (0, d.jsxs)(d.Fragment, {
     children: [
      (0, d.jsx)('div', {
       className: (0, i.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, d.jsx)(c.Qu, {
        ...s,
        label: 'breadcrumb',
        children: u.map((e, r, s) => {
         let { label: t, href: a, rel: l } = e,
          { length: n } = s;
         return (0, d.jsxs)(h.Fragment, { children: [(0, d.jsx)(c.yY, { href: a, current: r === n - 1, disabled: r === n - 1, rel: (0, i.Z)(l, { up: r === n - 2 }), children: t }), r < n - 1 && (0, d.jsx)(c.sc, { children: '/' })] }, r);
        }),
       }),
      }),
      g && (0, d.jsx)('div', { className: (0, i.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, d.jsx)(c.hE, { children: (0, d.jsxs)(t.r, { href: g.href, rel: g.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, d.jsx)(c.JO, { children: (0, d.jsx)(n.Z, {}) }), g.label] }) }) }),
     ],
    });
   };
  },
  29450: (e, r, s) => {
   s.d(r, { Z: () => c });
   var t = s(24009),
    a = s(95360),
    l = s(4814),
    n = s(52676);
   function c(e) {
    const { sidebar: r, toc: s, breadcrumbs: c = [], children: i, ...h } = e,
     d = r && r.items.length > 0;
    return (0, n.jsx)(a.Z, { ...h, children: (0, n.jsx)('div', { className: 'container margin-vert--md', children: (0, n.jsxs)('div', { className: 'row', children: [(0, n.jsx)('div', { className: 'col col--9 col--offset-1', children: (0, n.jsx)(t.Q, { breadcrumbs: c }) }), (0, n.jsx)('main', { className: (0, l.Z)('utrecht-document', 'utrecht-html', 'col', { 'col--7': d, 'col--9 col--offset-1': !d }), itemScope: !0, itemType: 'http://schema.org/Blog', children: i }), s && (0, n.jsx)('div', { className: 'col col--2', children: s })] }) }) });
   }
  },
 },
]);
