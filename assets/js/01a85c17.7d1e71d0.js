'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64013],
 {
  25761: (e, s, t) => {
   t.r(s), t.d(s, { default: () => m });
   t(75271);
   var r = t(4814),
    l = t(6693),
    a = t(43023),
    n = t(51229),
    c = t(29450),
    i = t(56845),
    d = t(50516),
    h = t(80889),
    o = t(52676);
   function m(e) {
    let { tags: s, sidebar: t } = e;
    const m = (0, l.M)();
    return (0, o.jsxs)(a.FG, { className: (0, r.Z)(n.k.wrapper.blogPages, n.k.page.blogTagsListPage), children: [(0, o.jsx)(a.d, { title: m }), (0, o.jsx)(d.Z, { tag: 'blog_tags_list' }), (0, o.jsxs)(c.Z, { sidebar: t, children: [(0, o.jsx)(h.Z, { as: 'h1', children: m }), (0, o.jsx)(i.Z, { tags: s })] })] });
   }
  },
  58335: (e, s, t) => {
   t.d(s, { Z: () => c });
   t(75271);
   var r = t(4814),
    l = t(95071);
   const a = { tag: 'tag_fKjT', tagRegular: 'tagRegular_YJV4', tagWithCount: 'tagWithCount_pgmh' };
   var n = t(52676);
   function c(e) {
    let { permalink: s, label: t, count: c } = e;
    return (0, n.jsxs)(l.Z, { href: s, className: (0, r.Z)(a.tag, c ? a.tagWithCount : a.tagRegular), children: [t, c && (0, n.jsx)('span', { children: c })] });
   }
  },
  56845: (e, s, t) => {
   t.d(s, { Z: () => d });
   t(75271);
   var r = t(6693),
    l = t(58335),
    a = t(80889);
   const n = { tag: 'tag__URO' };
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
  6693: (e, s, t) => {
   t.d(s, { M: () => l, P: () => a });
   var r = t(23818);
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
  24009: (e, s, t) => {
   t.d(s, { Q: () => o });
   var r = t(95071),
    l = t(58610),
    a = t(40185),
    n = t(55525),
    c = t(31916),
    i = t(4814),
    d = t(75271),
    h = t(52676);
   const o = (e) => {
    let { breadcrumbs: s, ...t } = e;
    const o = [{ href: (0, a.Z)('/'), label: 'Home', rel: 'home' }, ...s],
     { pathname: m } = (0, l.TH)(),
     g = [...o].reverse().find((e) => e.href !== m);
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
      g && (0, h.jsx)('div', { className: (0, i.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, h.jsx)(c.hE, { children: (0, h.jsxs)(r.Z, { href: g.href, rel: g.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, h.jsx)(c.JO, { children: (0, h.jsx)(n.Z, {}) }), g.label] }) }) }),
     ],
    });
   };
  },
  29450: (e, s, t) => {
   t.d(s, { Z: () => c });
   var r = t(24009),
    l = t(36087),
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
