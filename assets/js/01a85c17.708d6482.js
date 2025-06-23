'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64013],
 {
  73670: (e, s, t) => {
   t.r(s), t.d(s, { default: () => j });
   t(75271);
   var r = t(4814),
    l = t(40217);
   const a = () => (0, l.I)({ id: 'theme.tags.tagsPageTitle', message: 'Tags', description: 'The title of the tag list page' });
   var n = t(14225),
    c = t(65697),
    i = t(29450),
    d = t(70923),
    h = t(6709);
   const o = { tag: 'tag_hYj3' };
   var m = t(52676);
   function u(e) {
    let { letterEntry: s } = e;
    return (0, m.jsxs)('article', { children: [(0, m.jsx)(h.Z, { as: 'h2', id: s.letter, children: s.letter }), (0, m.jsx)('ul', { className: 'padding--none', children: s.tags.map((e) => (0, m.jsx)('li', { className: o.tag, children: (0, m.jsx)(d.Z, { ...e }) }, e.permalink)) }), (0, m.jsx)('hr', {})] });
   }
   function g(e) {
    let { tags: s } = e;
    const t = (function (e) {
     const s = {};
     return (
      Object.values(e).forEach((e) => {
       const t = (function (e) {
        return e[0].toUpperCase();
       })(e.label);
       (s[t] ??= []), s[t].push(e);
      }),
      Object.entries(s)
       .sort((e, s) => {
        let [t] = e,
         [r] = s;
        return t.localeCompare(r);
       })
       .map((e) => {
        let [s, t] = e;
        return { letter: s, tags: t.sort((e, s) => e.label.localeCompare(s.label)) };
       })
     );
    })(s);
    return (0, m.jsx)('section', { className: 'margin-vert--lg', children: t.map((e) => (0, m.jsx)(u, { letterEntry: e }, e.letter)) });
   }
   var b = t(87318);
   function j(e) {
    let { tags: s, sidebar: t } = e;
    const l = a();
    return (0, m.jsxs)(n.FG, { className: (0, r.Z)(c.k.wrapper.blogPages, c.k.page.blogTagsListPage), children: [(0, m.jsx)(n.d, { title: l }), (0, m.jsx)(b.Z, { tag: 'blog_tags_list' }), (0, m.jsxs)(i.Z, { sidebar: t, children: [(0, m.jsx)(h.Z, { as: 'h1', children: l }), (0, m.jsx)(g, { tags: s })] })] });
   }
  },
  70923: (e, s, t) => {
   t.d(s, { Z: () => c });
   t(75271);
   var r = t(4814),
    l = t(83033);
   const a = { tag: 'tag_YSTM', tagRegular: 'tagRegular_l64o', tagWithCount: 'tagWithCount_oNQj' };
   var n = t(52676);
   function c(e) {
    let { permalink: s, label: t, count: c } = e;
    return (0, n.jsxs)(l.Z, { href: s, className: (0, r.Z)(a.tag, c ? a.tagWithCount : a.tagRegular), children: [t, c && (0, n.jsx)('span', { children: c })] });
   }
  },
  24009: (e, s, t) => {
   t.d(s, { Q: () => o });
   var r = t(57229),
    l = t(87573),
    a = t(92826),
    n = t(34616),
    c = t(16167),
    i = t(4814),
    d = t(75271),
    h = t(52676);
   const o = (e) => {
    let { breadcrumbs: s, ...t } = e;
    const o = [{ href: (0, a.Z)('/'), label: 'Home', rel: 'home' }, ...s],
     { pathname: m } = (0, l.TH)(),
     u = [...o].reverse().find((e) => e.href !== m);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)('div', {
       className: (0, i.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, h.jsx)(c.Qu, {
        ...t,
        label: 'breadcrumb',
        children: o.map((e, s, t) => {
         let { label: r, href: l, rel: a } = e,
          { length: n } = t;
         return (0, h.jsxs)(d.Fragment, { children: [(0, h.jsx)(c.yY, { href: l, current: s === n - 1, disabled: s === n - 1, rel: (0, i.Z)(a, { up: s === n - 2 }), children: r }), s < n - 1 && (0, h.jsx)(c.sc, { children: '/' })] }, s);
        }),
       }),
      }),
      u && (0, h.jsx)('div', { className: (0, i.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, h.jsx)(c.hE, { children: (0, h.jsxs)(r.r, { href: u.href, rel: u.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, h.jsx)(c.JO, { children: (0, h.jsx)(n.Z, {}) }), u.label] }) }) }),
     ],
    });
   };
  },
  29450: (e, s, t) => {
   t.d(s, { Z: () => c });
   var r = t(24009),
    l = t(95360),
    a = t(4814),
    n = t(52676);
   function c(e) {
    const { sidebar: s, toc: t, breadcrumbs: c = [], children: i, ...d } = e,
     h = s && s.items.length > 0;
    return (0, n.jsx)(l.Z, { ...d, children: (0, n.jsx)('div', { className: 'container margin-vert--md', children: (0, n.jsxs)('div', { className: 'row', children: [(0, n.jsx)('div', { className: 'col col--9 col--offset-1', children: (0, n.jsx)(r.Q, { breadcrumbs: c }) }), (0, n.jsx)('main', { className: (0, a.Z)('utrecht-document', 'utrecht-html', 'col', { 'col--7': h, 'col--9 col--offset-1': !h }), itemScope: !0, itemType: 'http://schema.org/Blog', children: i }), t && (0, n.jsx)('div', { className: 'col col--2', children: t })] }) }) });
   }
  },
 },
]);
