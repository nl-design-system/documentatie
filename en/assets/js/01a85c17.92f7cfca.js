'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64013],
 {
  7980: (e, s, t) => {
   t.r(s), t.d(s, { default: () => g });
   t(75271);
   var r = t(4814),
    l = t(99659),
    a = t(17310),
    n = t(61902),
    c = t(29450),
    i = t(54056),
    d = t(68734),
    h = t(91725),
    o = t(52676);
   function g(e) {
    let { tags: s, sidebar: t } = e;
    const g = (0, l.M)();
    return (0, o.jsxs)(a.FG, { className: (0, r.Z)(n.k.wrapper.blogPages, n.k.page.blogTagsListPage), children: [(0, o.jsx)(a.d, { title: g }), (0, o.jsx)(d.Z, { tag: 'blog_tags_list' }), (0, o.jsxs)(c.Z, { sidebar: t, children: [(0, o.jsx)(h.Z, { as: 'h1', children: g }), (0, o.jsx)(i.Z, { tags: s })] })] });
   }
  },
  37781: (e, s, t) => {
   t.d(s, { Z: () => c });
   t(75271);
   var r = t(4814),
    l = t(90441);
   const a = { tag: 'tag_YNlu', tagRegular: 'tagRegular_GhNX', tagWithCount: 'tagWithCount_xdou' };
   var n = t(52676);
   function c(e) {
    let { permalink: s, label: t, count: c } = e;
    return (0, n.jsxs)(l.Z, { href: s, className: (0, r.Z)(a.tag, c ? a.tagWithCount : a.tagRegular), children: [t, c && (0, n.jsx)('span', { children: c })] });
   }
  },
  54056: (e, s, t) => {
   t.d(s, { Z: () => d });
   t(75271);
   var r = t(99659),
    l = t(37781),
    a = t(91725);
   const n = { tag: 'tag_lEm3' };
   var c = t(52676);
   function i(e) {
    let { letterEntry: s } = e;
    return (0, c.jsxs)('article', { children: [(0, c.jsx)(a.Z, { as: 'h2', id: s.letter, children: s.letter }), (0, c.jsx)('ul', { className: 'padding--none', children: s.tags.map((e) => (0, c.jsx)('li', { className: n.tag, children: (0, c.jsx)(l.Z, { ...e }) }, e.permalink)) }), (0, c.jsx)('hr', {})] });
   }
   function d(e) {
    let { tags: s } = e;
    const t = (0, r.P)(s);
    return (0, c.jsx)('section', { className: 'margin-vert--lg', children: t.map((e) => (0, c.jsx)(i, { letterEntry: e }, e.letter)) });
   }
  },
  99659: (e, s, t) => {
   t.d(s, { M: () => l, P: () => a });
   var r = t(7512);
   const l = () => (0, r.I)({ id: 'theme.tags.tagsPageTitle', message: 'Tags', description: 'The title of the tag list page' });
   function a(e) {
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
   }
  },
  89846: (e, s, t) => {
   t.d(s, { Q: () => u });
   var r = t(90441),
    l = t(3225),
    a = t(46744),
    n = t(55525),
    c = t(46506),
    i = t(4814),
    d = t(75271);
   const h = 'breadcrumbs__73z',
    o = 'breadcrumbs--mobile_QwgF',
    g = 'breadcrumbs--desktop_v9Xv';
   var m = t(52676);
   const u = (e) => {
    let { breadcrumbs: s, ...t } = e;
    const u = [{ href: (0, a.Z)('/'), label: 'Home', rel: 'home' }, ...s],
     { pathname: j } = (0, l.TH)(),
     x = [...u].reverse().find((e) => e.href !== j);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsx)('div', {
       className: (0, i.Z)(h, g),
       children: (0, m.jsx)(c.Qu, {
        ...t,
        children: u.map((e, s, t) => {
         let { label: r, href: l, rel: a } = e,
          { length: n } = t;
         return (0, m.jsxs)(d.Fragment, { children: [(0, m.jsx)(c.yY, { href: l, current: s === n - 1, disabled: s === n - 1, rel: (0, i.Z)(a, { up: s === n - 2 }), children: r }), s < n - 1 && (0, m.jsx)(c.sc, { children: '/' })] }, s);
        }),
       }),
      }),
      x && (0, m.jsx)('div', { className: (0, i.Z)(h, o), children: (0, m.jsx)(c.hE, { children: (0, m.jsxs)(r.Z, { href: x.href, rel: x.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, m.jsx)(c.JO, { children: (0, m.jsx)(n.Z, {}) }), x.label] }) }) }),
     ],
    });
   };
  },
  29450: (e, s, t) => {
   t.d(s, { Z: () => c });
   var r = t(89846),
    l = t(38889),
    a = t(4814),
    n = (t(75271), t(52676));
   function c(e) {
    const { sidebar: s, toc: t, breadcrumbs: c = [], children: i, ...d } = e,
     h = s && s.items.length > 0;
    return (0, n.jsx)(l.Z, { ...d, children: (0, n.jsx)('div', { className: 'container margin-vert--md', children: (0, n.jsxs)('div', { className: 'row', children: [(0, n.jsx)('div', { className: 'col col--9 col--offset-1', children: (0, n.jsx)(r.Q, { breadcrumbs: c }) }), (0, n.jsx)('main', { className: (0, a.Z)('utrecht-document', 'utrecht-html', 'col', { 'col--7': h, 'col--9 col--offset-1': !h }), itemScope: !0, itemType: 'http://schema.org/Blog', children: i }), t && (0, n.jsx)('div', { className: 'col col--2', children: t })] }) }) });
   }
  },
 },
]);
