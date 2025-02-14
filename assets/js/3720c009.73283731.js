'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [13751],
 {
  53147: (t, e, s) => {
   s.r(e), s.d(e, { default: () => h });
   s(75271);
   var a = s(4814),
    l = s(14225),
    n = s(65697),
    r = s(61923),
    i = s(79588),
    c = s(87318),
    g = s(6709),
    o = s(52676);
   function u(t) {
    let { title: e } = t;
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.d, { title: e }), (0, o.jsx)(c.Z, { tag: 'doc_tags_list' })] });
   }
   function d(t) {
    let { tags: e, title: s } = t;
    return (0, o.jsx)(l.FG, { className: (0, a.Z)(n.k.page.docsTagsListPage), children: (0, o.jsx)('div', { className: 'container margin-vert--lg', children: (0, o.jsx)('div', { className: 'row', children: (0, o.jsxs)('main', { className: 'col col--8 col--offset-2', children: [(0, o.jsx)(g.Z, { as: 'h1', children: s }), (0, o.jsx)(i.Z, { tags: e })] }) }) }) });
   }
   function h(t) {
    const e = (0, r.M)();
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(u, { ...t, title: e }), (0, o.jsx)(d, { ...t, title: e })] });
   }
  },
  70923: (t, e, s) => {
   s.d(e, { Z: () => i });
   s(75271);
   var a = s(4814),
    l = s(83033);
   const n = { tag: 'tag_YSTM', tagRegular: 'tagRegular_l64o', tagWithCount: 'tagWithCount_oNQj' };
   var r = s(52676);
   function i(t) {
    let { permalink: e, label: s, count: i } = t;
    return (0, r.jsxs)(l.Z, { href: e, className: (0, a.Z)(n.tag, i ? n.tagWithCount : n.tagRegular), children: [s, i && (0, r.jsx)('span', { children: i })] });
   }
  },
  79588: (t, e, s) => {
   s.d(e, { Z: () => g });
   s(75271);
   var a = s(61923),
    l = s(70923),
    n = s(6709);
   const r = { tag: 'tag_hYj3' };
   var i = s(52676);
   function c(t) {
    let { letterEntry: e } = t;
    return (0, i.jsxs)('article', { children: [(0, i.jsx)(n.Z, { as: 'h2', id: e.letter, children: e.letter }), (0, i.jsx)('ul', { className: 'padding--none', children: e.tags.map((t) => (0, i.jsx)('li', { className: r.tag, children: (0, i.jsx)(l.Z, { ...t }) }, t.permalink)) }), (0, i.jsx)('hr', {})] });
   }
   function g(t) {
    let { tags: e } = t;
    const s = (0, a.P)(e);
    return (0, i.jsx)('section', { className: 'margin-vert--lg', children: s.map((t) => (0, i.jsx)(c, { letterEntry: t }, t.letter)) });
   }
  },
  61923: (t, e, s) => {
   s.d(e, { M: () => l, P: () => n });
   var a = s(40217);
   const l = () => (0, a.I)({ id: 'theme.tags.tagsPageTitle', message: 'Tags', description: 'The title of the tag list page' });
   function n(t) {
    const e = {};
    return (
     Object.values(t).forEach((t) => {
      const s = (function (t) {
       return t[0].toUpperCase();
      })(t.label);
      (e[s] ??= []), e[s].push(t);
     }),
     Object.entries(e)
      .sort((t, e) => {
       let [s] = t,
        [a] = e;
       return s.localeCompare(a);
      })
      .map((t) => {
       let [e, s] = t;
       return { letter: e, tags: s.sort((t, e) => t.label.localeCompare(e.label)) };
      })
    );
   }
  },
 },
]);
