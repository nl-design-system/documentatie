(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18401, 37643, 83249],
 {
  3227(e, t, n) {
   'use strict';
   n.d(t, { A: () => u });
   var s = n(60316),
    r = n(45282),
    l = n(2264),
    o = n(29181),
    i = n(13526),
    a = n(86070);
   function c({ href: e, icon: t = '', title: n, description: s, children: l }) {
    return (0, a.jsxs)('div', { className: 'card', children: [e ? (0, a.jsx)(r.N, { href: e, className: (0, i.A)('cardLink', 'utrecht-link'), children: (0, a.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', n] }) }) : (0, a.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', n] }), s && (0, a.jsx)('p', { className: 'cardDescription', children: s }), l] });
   }
   function d({ item: e }) {
    return (0, a.jsx)(c, { title: e.label, description: e.description, children: (0, a.jsx)(o.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, t) => (0, a.jsx)(o.Er, { children: 'link' === e.type ? (0, a.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, a.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, a.jsx)(a.Fragment, {}) }, t)) }) });
   }
   function m({ item: e }) {
    const t = (0, l.cC)(e.docId);
    return (0, a.jsx)(c, { href: e.href, title: e.label, description: e.description ?? t?.description });
   }
   function h({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, a.jsx)(m, { item: e });
     case 'category':
      return (0, a.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function g({ className: e }) {
    const t = (0, s.$S)();
    return (0, a.jsx)(u, { items: t.items, className: e });
   }
   function u(e) {
    const { items: t, className: n } = e;
    if (!t) return (0, a.jsx)(g, { ...e });
    const r = (0, s.d1)(t);
    return (0, a.jsx)('section', { className: (0, i.A)('row', n), ...e, children: r.map((e, t) => (0, a.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, a.jsx)(h, { item: e }) }, t)) });
   }
  },
  8671(e, t, n) {
   'use strict';
   n.d(t, { A: () => I });
   var s = n(18439),
    r = n(76713),
    l = n(5784),
    o = n(30758),
    i = n(86070);
   function a(e) {
    const t = o.Children.toArray(e.children),
     n = t.find((e) => o.isValidElement(e) && 'summary' === e.props?.mdxType),
     s = (0, i.jsx)(i.Fragment, { children: t.filter((e) => e !== n) });
    return (0, i.jsx)(l.A, { ...e, summary: n, children: s });
   }
   var c = n(69284);
   function d(e) {
    let t,
     n = '';
    if ((0, o.isValidElement)(e.children)) {
     const s = e.children.props,
      r = 'string' == typeof s.className ? s.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     (r && (t = r[1]), 'string' == typeof s.children && (n = s.children));
    }
    return (0, i.jsx)(c.M, { syntax: t, textContent: n, trim: !0 });
   }
   var m = n(46447),
    h = n(60316),
    g = n(13526),
    u = n(3227);
   const p = (e, t) => e.reduce((e, n) => ('link' === n.type ? (t.includes(n.docId) ? e : [...e, n]) : 'category' === n.type ? [...e, { ...n, items: p(n.items, t) }] : e), []),
    w = ({ excludeDocIDs: e = [], className: t, ...n }) => {
     const s = (0, h.$S)();
     return (0, i.jsx)('div', { ...n, className: (0, g.A)('margin-top--lg', t), children: (0, i.jsx)(u.A, { items: p(s.items, e) }) });
    };
   var A = n(25557),
    f = n(2264),
    y = n(20151),
    x = n(29181),
    j = n(33062),
    b = n(90495),
    v = n(45282),
    T = n(44594),
    C = n(67970);
   const k = ({ name: e, description: t, relayStep: n, headingLevel: s = 2, href: r, frameworkNames: l }) => {
     return (0, i.jsxs)(b.Zp, { appearance: 'large', className: (0, g.A)('ma-component-card', !n && 'ma-component-card--suggestion'), component: 'section', children: [(0, i.jsx)(b.Fu, { children: (0, i.jsx)(T.s, { relayStep: n, description: `Schets van de ${e} component`, name: e }) }), (0, i.jsxs)(b.Wu, { children: [(0, i.jsxs)('div', { children: [(0, i.jsx)(m.DZ, { level: s, className: 'ma-component-card__title', children: e }), n && (0, i.jsx)('p', { children: (0, i.jsx)(C.D, { state: n }) }), t && (0, i.jsx)(m.fz, { children: t }), l && (0, i.jsx)(m._Q, { children: l.map((e) => (0, i.jsx)(m.KE, { children: e }, e)) })] }), r && (0, i.jsx)(m.fz, { children: (0, i.jsxs)(v.N, { className: 'utrecht-link', to: ((o = r), 'string' == typeof o && !1 === o.endsWith('/') ? `${o}/` : o), children: ['Bekijk ', (0, i.jsx)('span', { className: 'w', children: e }), ' component'] }) })] })] });
     var o;
    },
    N = () => {
     const e = 'framework',
      t = 'status',
      n = (0, h.$S)(),
      { location: s, replace: r } = (0, A.W6)(),
      l = new URLSearchParams(s.search),
      a = (e) => e.title && y.find(({ title: t }) => t && (0, j.Pc)(t) === (0, j.Pc)(e.title)),
      c = n.items
       .filter((e) => !!e && 'string' == typeof e.docId)
       .filter((e) => 'componenten/README' !== e.docId)
       .map((e) => ({ ...e, ...(0, f.cC)(e.docId) }))
       .filter(a)
       .map((e) => ({ ...e, ...a(e) })),
      [d, g] = (0, o.useState)(c),
      [u, p] = (0, o.useState)(l.get(t)?.split(',') || []),
      [w, v] = (0, o.useState)(l.get(e)?.split(',') || []),
      T = (0, j.KF)(c);
     return (
      (0, o.useEffect)(() => {
       (g(c.filter((e) => !u.length || u.some((t) => e.relayStep === t)).filter((e) => !w.length || w.some((t) => (0, j.B2)(e, t)))), u.length ? l.set(t, u.join(',')) : l.delete(t), w.length ? l.set(e, w.join(',')) : l.delete(e), r({ ...s, search: l.toString() }));
      }, [u, w]),
      (0, i.jsxs)(i.Fragment, {
       children: [
        (0, i.jsx)('div', {
         className: 'ma-filter-accordion',
         children: (0, i.jsx)(x.If, {
          sections: [
           {
            headingLevel: 2,
            expanded: l.size > 0,
            label: (0, i.jsx)('span', { id: 'filter-results-label', children: 'Filter componenten' }),
            body: (0, i.jsxs)(i.Fragment, {
             children: [
              (0, i.jsxs)(x.LB, {
               'aria-describedby': 'filter-results',
               'aria-labelledby': 'filter-results-label',
               children: [
                (0, i.jsx)('h3', { className: 'utrecht-heading-6', children: 'Status' }),
                Object.entries({ HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of Fame' }).map(([e, t]) =>
                 (0, i.jsxs)(
                  m.zB,
                  {
                   type: 'checkbox',
                   children: [
                    (0, i.jsx)(m.Sc, {
                     defaultChecked: u.includes(e),
                     id: e,
                     onChange: (t) =>
                      ((e, t) => {
                       p((n) => (e ? [...n, t] : n.filter((e) => e !== t)));
                      })(t.target.checked, e),
                    }),
                    (0, i.jsx)(m.lR, { htmlFor: e, children: (0, i.jsx)(C.D, { state: t }) }),
                   ],
                  },
                  e,
                 ),
                ),
               ],
              }),
              T.length > 0 &&
               (0, i.jsxs)(x.LB, {
                'aria-describedby': 'filter-results',
                'aria-labelledby': 'filter-results-label',
                children: [
                 (0, i.jsx)('h3', { className: 'utrecht-heading-6', children: 'Implementatie' }),
                 T.map((e) =>
                  (0, i.jsxs)(
                   m.zB,
                   {
                    type: 'checkbox',
                    children: [
                     (0, i.jsx)(m.Sc, {
                      defaultChecked: w.includes(e),
                      id: e,
                      onChange: (t) =>
                       ((e, t) => {
                        v((n) => (e ? [...n, t] : n.filter((e) => e !== t)));
                       })(t.target.checked, e),
                     }),
                     (0, i.jsx)(m.lR, { htmlFor: e, children: e }),
                    ],
                   },
                   e,
                  ),
                 ),
                ],
               }),
             ],
            }),
           },
          ],
         }),
        }),
        (0, i.jsxs)(x.fz, { role: 'status', id: 'filter-results', children: [d.length, ' van ', c.length, ' componenten zichtbaar'] }),
        0 === d.length &&
         (0, i.jsx)(x.fz, {
          children: (0, i.jsx)(x.bm, {
           onClick: () => {
            window.location.search = '';
           },
           children: 'Toon alle componenten',
          }),
         }),
        (0, i.jsx)(b.AC, {
         appearance: 'large',
         children: d.map(({ title: e, id: t, href: n, description: s }) => {
          const r = y.find((t) => t.title === e),
           l = r && j.bo[r.relayStep],
           o = (0, j.mJ)(r);
          return (0, i.jsx)(k, { name: e, headingLevel: 2, href: n, description: s, relayStep: l, frameworkNames: o }, t);
         }),
        }),
       ],
      })
     );
    };
   var G = n(46072),
    _ = n(79889);
   const W = ({ title: e, sc: t, children: n, tags: s }) => {
     const r = (0, o.useId)(),
      l = [...s];
     if (t) {
      l.push(t);
      const e = G.pI.get(t);
      e?.conformance && l.push(`Niveau ${e.conformance}`);
     }
     return (0, i.jsx)('li', {
      className: (0, g.A)(
       'ma-new-checklist__item',
       s.map((e) => `ma-new-checklist__item--${e}`),
      ),
      children: (0, i.jsxs)('details', {
       children: [
        (0, i.jsx)('summary', { children: (0, i.jsx)('span', { className: 'ma-new-checklist__title', id: r, children: e }) }),
        (0, i.jsxs)('div', {
         className: 'ma-new-checklist__content',
         children: [
          n && (0, i.jsx)('div', { children: n }),
          (0, i.jsx)(x._Q, {
           className: 'ma-new-checklist__badge-list',
           children: l.map((e, t) => {
            let n = (0, i.jsx)(_.K, { children: e }, t);
            if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
             const s = G.pI.get(e);
             n = (0, i.jsx)(v.N, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${s.sc} ${s.nl.title}`, style: { lineHeight: 1 }, children: (0, i.jsx)(_.K, { children: `WCAG ${e}` }) }, t);
            }
            return n;
           }),
          }),
         ],
        }),
       ],
      }),
     });
    },
    R = ({ children: e, headingLevel: t }) => {
     const n = new Set();
     o.Children.forEach(e, (e) => {
      (e?.props?.tags || []).forEach((e) => n.add(e));
     });
     const s = o.Children.count(e),
      [r, l] = (0, o.useState)(Array.from(n.values())),
      a = (e) => r.includes(e),
      c = (0, o.useId)(),
      d = r.length >= 1 ? o.Children.map(e, (e) => (e.props.tags.some((e) => r.includes(e)) ? e : null)).filter((e) => e) : [e],
      h = s - d.length;
     return (0, i.jsxs)('div', {
      children: [
       (0, i.jsxs)('div', {
        className: 'ma-filter-block',
        children: [
         (0, i.jsxs)(m.LB, {
          'aria-describedby': 'filter-results',
          'aria-labelledby': c,
          children: [
           (0, i.jsx)(m.DZ, { level: t, id: c, children: 'Filter acceptatiecriteria voor:' }),
           Array.from(n.values()).map((e) =>
            (0, i.jsxs)(
             m.zB,
             {
              type: 'checkbox',
              children: [
               (0, i.jsx)(m.Sc, {
                defaultChecked: a(e),
                checked: a(e),
                id: e,
                onChange: () =>
                 ((e, t) => {
                  const n = ('boolean' == typeof t ? t : !a(e)) ? [...r, e] : r.filter((t) => t !== e);
                  l(n);
                 })(e),
               }),
               (0, i.jsx)(m.lR, { htmlFor: e, children: e }),
              ],
             },
             e,
            ),
           ),
          ],
         }),
         (0, i.jsx)('div', {
          children: (0, i.jsxs)(i.Fragment, {
           children: [
            (0, i.jsxs)('p', { role: 'status', children: [s - h, ' van de ', s, ' items zijn nu zichtbaar.'] }),
            h >= 1
             ? (0, i.jsx)(x.$n, {
                appearance: 'secondary-action-button',
                onClick: () => {
                 l(Array.from(n.values()));
                },
                children: 'Toon alles',
               })
             : (0, i.jsx)(i.Fragment, {}),
           ],
          }),
         }),
        ],
       }),
       (0, i.jsx)('ul', { className: 'ma-new-checklist', role: 'list', children: d }),
      ],
     });
    };
   var S = n(12013);
   const L = ({ children: e }) => (0, i.jsx)('ol', { className: 'nlds-anatomy-list', children: e }),
    P = ({ children: e }) => (0, i.jsx)('li', { className: 'nlds-anatomy-list__item', children: e }),
    F = ({ component: e, illustration: t }) => {
     const { title: s } = e,
      r = (0, j.fX)(s),
      l = o.lazy(() => n(51580)(`./${r}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, i.jsx)(o.Suspense, { fallback: null, children: (0, i.jsxs)('figure', { className: (0, g.A)('ma-component-anatomy'), children: [t && (0, i.jsx)(t, { height: null, className: (0, g.A)('ma-component-anatomy__illustration') }), t && l && (0, i.jsx)('figcaption', { children: (0, i.jsx)(S.o, { omitH1: !0, headingLevel: 1, components: { ol: ({ children: e }) => (0, i.jsx)(L, { children: e }), li: ({ children: e }) => (0, i.jsx)(P, { children: e }) }, children: (0, i.jsx)(l, {}) }) })] }) });
    },
    M = ({ title: e, sc: t, status: n, children: s, headingLevel: r = 4 }) => {
     const l = G.pI.get(t),
      o = l ? `${t} ${l.nl?.title}` : t;
     return (0, i.jsxs)('div', { className: 'ma-component-criteria-section', children: [(0, i.jsx)(m.DZ, { appearance: 'utrecht-heading-4', level: r, className: 'ma-component-criteria-section__heading', children: e }), (t || n) && (0, i.jsxs)('dl', { className: 'ma-component-criteria-section__dl', children: [t && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('dt', { className: 'ma-component-criteria-section__dt', children: 'WCAG' }), (0, i.jsx)('dd', { className: 'ma-component-criteria-section__dd', children: (0, i.jsx)(m.N_, { href: `/wcag/${t}/`, children: o }) })] }), n && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('dt', { className: 'ma-component-criteria-section__dt', children: 'Status' }), (0, i.jsx)('dd', { className: 'ma-component-criteria-section__dl', children: n })] })] }), s] });
    },
    D = ({ testCategory: e, children: t }) => (0, i.jsx)(x.If, { sections: [{ className: 'utrecht-accordion--nlds-subtle', headingLevel: 3, expanded: !1, label: (0, i.jsx)('span', { children: e }), body: t }] });
   var O = n(58876);
   function I({ children: e }) {
    return (0, i.jsx)(s.x, {
     components: {
      code: m.Cy,
      a: m.N_,
      em: m.lx,
      pre: d,
      details: a,
      ul: (e) =>
       e.className?.includes('contains-task-list')
        ? (0, i.jsx)(O._, {
           children: (Array.isArray(e.children) ? e.children : [e.children]).filter(o.isValidElement).map((e) => {
            const { children: t } = e.props,
             n = t.find((e) => 'object' == typeof e),
             s = Array.isArray(t) ? t.filter((e) => 'string' == typeof e) : [];
            return (0, i.jsx)(O.Z, { checked: n.props.checked, description: [...s].join('') }, s.join(''));
           }),
          })
        : (0, i.jsx)(m.Xy, { className: 'utrecht-unordered-list--html-content', children: e.children }),
      ol: ({ children: e }) => (0, i.jsx)(m._J, { className: 'utrecht-ordered-list--html-content', children: e }),
      img: m._V,
      h1: m._,
      h2: m.fV,
      h3: m._B,
      h4: m.f_,
      h5: m.mM,
      h6: m.TT,
      admonition: r.A,
      OverviewPage: w,
      DocCardList: u.A,
      ComponentOverview: N,
      Checklist: R,
      ChecklistItem: W,
      ComponentAnatomy: F,
      CriteriaList: D,
      CriteriaListItem: M,
     },
     children: e,
    });
   }
  },
  11063(e, t, n) {
   'use strict';
   n.d(t, { A: () => L });
   n(30758);
   var s = n(13526),
    r = n(68139),
    l = n(86070);
   function o({ children: e, className: t }) {
    return (0, l.jsx)('article', { className: t, children: e });
   }
   var i = n(63195);
   const a = 'title_Cvpl';
   function c({ className: e }) {
    const { metadata: t, isBlogPostPage: n } = (0, r.e7)(),
     { permalink: o, title: c } = t,
     d = n ? 'h1' : 'h2';
    return (0, l.jsx)(d, { className: (0, s.A)(a, e), children: n ? c : (0, l.jsx)(i.A, { to: o, children: c }) });
   }
   var d = n(18236),
    m = n(18105),
    h = n(43242);
   const g = 'container_fVB1';
   function u({ readingTime: e }) {
    const t = (function () {
     const { selectMessage: e } = (0, m.W)();
     return (t) => {
      const n = Math.ceil(t);
      return e(n, (0, d.T)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: n }));
     };
    })();
    return (0, l.jsx)(l.Fragment, { children: t(e) });
   }
   function p({ date: e, formattedDate: t }) {
    return (0, l.jsx)('time', { dateTime: e, children: t });
   }
   function w() {
    return (0, l.jsx)(l.Fragment, { children: ' \xb7 ' });
   }
   function A({ className: e }) {
    const { metadata: t } = (0, r.e7)(),
     { date: n, readingTime: o } = t,
     i = (0, h.i)({ day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    return (0, l.jsxs)('div', { className: (0, s.A)(g, 'margin-vert--md', e), children: [(0, l.jsx)(p, { date: n, formattedDate: ((a = n), i.format(new Date(a))) }), void 0 !== o && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(w, {}), (0, l.jsx)(u, { readingTime: o })] })] });
    var a;
   }
   var f = n(4786);
   const y = 'authorCol_aa16',
    x = 'imageOnlyAuthorRow_d1cU',
    j = 'imageOnlyAuthorCol_sh3B';
   function b({ className: e }) {
    const {
     metadata: { authors: t },
     assets: n,
    } = (0, r.e7)();
    if (0 === t.length) return null;
    const o = t.every(({ name: e }) => !e),
     i = 1 === t.length;
    return (0, l.jsx)('div', { className: (0, s.A)('margin-top--md margin-bottom--sm', o ? x : 'row', e), children: t.map((e, t) => (0, l.jsx)('div', { className: (0, s.A)(!o && (i ? 'col col--12' : 'col col--6'), o ? j : y), children: (0, l.jsx)(f.A, { author: { ...e, imageURL: n.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function v() {
    return (0, l.jsxs)('header', { children: [(0, l.jsx)(c, {}), (0, l.jsx)(A, {}), (0, l.jsx)(b, {})] });
   }
   var T = n(99939),
    C = n(8671);
   function k({ children: e, className: t }) {
    const { isBlogPostPage: n } = (0, r.e7)();
    return (0, l.jsx)('div', { id: n ? T.LU : void 0, className: (0, s.A)('markdown', t), children: (0, l.jsx)(C.A, { children: e }) });
   }
   var N = n(71639),
    G = n(29307),
    _ = n(97068);
   function W() {
    return (0, l.jsx)('b', { children: (0, l.jsx)(d.A, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read more' }) });
   }
   function R(e) {
    const { blogPostTitle: t, ...n } = e;
    return (0, l.jsx)(i.A, { 'aria-label': (0, d.T)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...n, children: (0, l.jsx)(W, {}) });
   }
   function S() {
    const { metadata: e, isBlogPostPage: t } = (0, r.e7)(),
     { tags: n, title: o, editUrl: i, hasTruncateMarker: a, lastUpdatedBy: c, lastUpdatedAt: d } = e,
     m = !t && a,
     h = n.length > 0;
    if (!(h || m || i)) return null;
    if (t) {
     const e = !!(i || d || c);
     return (0, l.jsxs)('footer', { className: 'docusaurus-mt-lg', children: [h && (0, l.jsx)('div', { className: (0, s.A)('row', 'margin-top--sm', N.G.blog.blogFooterEditMetaRow), children: (0, l.jsx)('div', { className: 'col', children: (0, l.jsx)(_.A, { tags: n }) }) }), e && (0, l.jsx)(G.A, { className: (0, s.A)('margin-top--sm', N.G.blog.blogFooterEditMetaRow), editUrl: i, lastUpdatedAt: d, lastUpdatedBy: c })] });
    }
    return (0, l.jsxs)('footer', { className: 'row docusaurus-mt-lg', children: [h && (0, l.jsx)('div', { className: (0, s.A)('col', { 'col--9': m }), children: (0, l.jsx)(_.A, { tags: n }) }), m && (0, l.jsx)('div', { className: (0, s.A)('col text--right', { 'col--3': h }), children: (0, l.jsx)(R, { blogPostTitle: o, to: e.permalink }) })] });
   }
   function L({ children: e, className: t }) {
    const n = (function () {
     const { isBlogPostPage: e } = (0, r.e7)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, l.jsxs)(o, { className: (0, s.A)(n, t), children: [(0, l.jsx)(v, {}), (0, l.jsx)(k, { children: e }), (0, l.jsx)(S, {})] });
   }
  },
  12013(e, t, n) {
   'use strict';
   n.d(t, { o: () => d });
   var s = n(18439),
    r = n(46447),
    l = n(86070);
   const o = (e, t) => {
     const n = new URL(t, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === n.protocol) {
      const { pathname: n, search: s, hash: r } = new URL(t, new URL(e, 'http://example.com/'));
      return n + s + r;
     }
     return n.toString();
    },
    i = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    a = (e) => ({ img: ({ src: t, ...n }) => (0, l.jsx)('img', { ...n, src: o(e, t), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, t) => {
     if (e) {
      const e = { ...i[t - 1] };
      return ((e.h1 = () => null), e);
     }
     return i[t];
    },
    d = ({ children: e, omitH1: t = !1, headingLevel: n = 1, baseUrl: r = '', components: o = {} }) => (0, l.jsx)(s.x, { components: { ...c(t, n), ...a(r), ...o }, children: e });
  },
  15638(e, t, n) {
   'use strict';
   n.d(t, { $: () => m, x: () => d });
   var s = n(4077),
    r = n(58315),
    l = n(46447),
    o = n(13526),
    i = n(9547),
    a = n(30758),
    c = n(86070);
   const d = (0, a.createContext)({}),
    m = ({ title: e, appearance: t, description: n, children: a, figure: m }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      g = m ? 'figure' : 'div',
      u = m ? 'figcaption' : 'div',
      p = 'string' == typeof n ? (0, c.jsx)(i.oz, { children: n }) : n;
     return (0, c.jsxs)(g, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(l.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(l.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[t] }, children: a }) })] });
    };
  },
  19485(e, t, n) {
   'use strict';
   n.d(t, { A: () => o });
   n(30758);
   var s = n(18236),
    r = n(52266),
    l = n(86070);
   function o(e) {
    const { metadata: t } = e,
     { previousPage: n, nextPage: o } = t;
    return (0, l.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, s.T)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [n && (0, l.jsx)(r.A, { permalink: n, title: (0, l.jsx)(s.A, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer entries' }) }), o && (0, l.jsx)(r.A, { permalink: o, title: (0, l.jsx)(s.A, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older entries' }), isNext: !0 })] });
   }
  },
  33062(e, t, n) {
   'use strict';
   n.d(t, { bo: () => r, KF: () => h, mJ: () => p, VZ: () => v, cR: () => b, Pv: () => w, qZ: () => o, kD: () => x, B2: () => g, Pc: () => a, f4: () => i, GT: () => j, fX: () => l, eQ: () => y, B_: () => f, o_: () => A });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    l = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, t) => c.indexOf(e) - c.indexOf(t)),
    h = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return m(d(t));
    },
    g = (e, t) => p(e).includes(t),
    u = (e) => {
     const t = / URL \(([^)]+)\)/;
     return m(d(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    p = (e) => m(d(e.projects.flatMap((e) => u(e)))),
    w = (e) => {
     const t = u(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const s = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: s, id: r, value: l }) => {
        const o = /^(.+) URL/.exec(s)[1],
         i = 'Storybook' === o ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${o}`;
        return { brand: o.toLowerCase(), name: s, id: r, value: l, description: i };
       });
      return { frameworkName: t, tasks: s };
     });
    },
    A = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    y = (e, t) => t.reduce((e, t) => e?.[t], e);
   function x(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? x(e[n], [...t, n]) : []));
   }
   function j(e) {
    const t = new Map();
    function n(e) {
     return (t.has(e) || t.set(e, A(e)), t.get(e));
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   const b = () => {
     const e = s.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    v = () => {
     const e = s.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const t = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return t ? t[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  44594(e, t, n) {
   'use strict';
   n.d(t, { s: () => a });
   var s = n(29181),
    r = n(13526),
    l = n(33062),
    o = n(86070);
   const i = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    a = ({ name: e, relayStep: t, description: n }) => {
     const a = (0, l.fX)(t),
      c = i[e] ?? e;
     return (0, o.jsxs)(s.WK, { children: [(0, o.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, r.A)('ma-component-illustration', `ma-component-illustration--${a}`), fill: 'none', children: [(0, o.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, o.jsx)('rect', { width: '960', height: '540' }), (0, o.jsx)('rect', { width: '960', height: '540' })] }), (0, o.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, o.jsx)('use', { href: `/svg/componenten_overzicht_${(0, l.fX)(c)}.svg#component-illustration` })] }), (0, o.jsx)(s.$P, { className: 'ma-component-illustration__caption', children: n })] });
    };
  },
  45282(e, t, n) {
   'use strict';
   n.d(t, { F: () => l, N: () => o });
   var s = n(13526),
    r = n(86070);
   const l = ({ children: e, ...t }) => {
     const { to: n, href: s, ...l } = t;
     let o = n || s;
     const i = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === i.origin ? ((i.pathname = i.pathname.endsWith('/') ? i.pathname : `${i.pathname}/`), (o = i.toString().replace('https://nldesignsystem.nl', ''))) : ((l.target = '_blank'), (l.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: o, ...l, children: e }));
    },
    o = ({ className: e, ...t }) => (0, r.jsx)(l, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  46072(e, t, n) {
   'use strict';
   n.d(t, { NO: () => l, pI: () => o });
   const s = [
     { sc: '1.1.1', title: 'Non-text Content', url: 'https://www.w3.org/TR/WCAG21/#non-text-content', conformance: 'A', nldesignsystem: !0, nl: { title: 'Niet-tekstuele content' } },
     { sc: '1.2.1', title: 'Audio-only and Video-only (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Louter-geluid en louter-videobeeld (vooraf opgenomen)' } },
     { sc: '1.2.2', title: 'Captions (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (vooraf opgenomen)' } },
     { sc: '1.2.3', title: 'Audio Description or Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Audiodescriptie of media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.4', title: 'Captions (Live)', url: 'https://www.w3.org/TR/WCAG21/#captions-live', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (live)' } },
     { sc: '1.2.5', title: 'Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.6', title: 'Sign Language (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded', conformance: 'AAA', nl: { title: 'Gebarentaal (vooraf opgenomen)' } },
     { sc: '1.2.7', title: 'Extended Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded', conformance: 'AAA', nl: { title: 'Verlengde audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.8', title: 'Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded', conformance: 'AAA', nl: { title: 'Media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.9', title: 'Audio-only (Live)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-live', conformance: 'AAA', nl: { title: 'Louter-geluid (live)' } },
     { sc: '1.3.1', title: 'Info and Relationships', url: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', conformance: 'A', nldesignsystem: !0, nl: { title: 'Info en relaties' } },
     { sc: '1.3.2', title: 'Meaningful Sequence', url: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence', conformance: 'A', nldesignsystem: !0, nl: { title: 'Betekenisvolle volgorde' } },
     { sc: '1.3.3', title: 'Sensory Characteristics', url: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics', conformance: 'A', nldesignsystem: !0, nl: { title: 'Zintuiglijke eigenschappen' } },
     { sc: '1.3.4', title: 'Orientation', url: 'https://www.w3.org/TR/WCAG21/#orientation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Weergavestand' } },
     { sc: '1.3.5', title: 'Identify Input Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Identificeer het doel van de input' } },
     { sc: '1.3.6', title: 'Identify Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-purpose', conformance: 'AAA', nl: { title: 'Identificeer het doel' } },
     { sc: '1.4.1', title: 'Use of Color', url: 'https://www.w3.org/TR/WCAG21/#use-of-color', conformance: 'A', nldesignsystem: !0, nl: { title: 'Gebruik van kleur' } },
     { sc: '1.4.2', title: 'Audio Control', url: 'https://www.w3.org/TR/WCAG21/#audio-control', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geluidsbediening' } },
     { sc: '1.4.3', title: 'Contrast (Minimum)', url: 'https://www.w3.org/TR/WCAG21/#contrast-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast (minimum)' } },
     { sc: '1.4.4', title: 'Resize text', url: 'https://www.w3.org/TR/WCAG21/#resize-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Herschalen van tekst' } },
     { sc: '1.4.5', title: 'Images of Text', url: 'https://www.w3.org/TR/WCAG21/#images-of-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Afbeeldingen van tekst' } },
     { sc: '1.4.6', title: 'Contrast (Enhanced)', url: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced', conformance: 'AAA', nl: { title: 'Contrast (versterkt)' } },
     { sc: '1.4.7', title: 'Low or No Background Audio', url: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio', conformance: 'AAA', nl: { title: 'Weinig of geen achtergrondgeluid' } },
     { sc: '1.4.8', title: 'Visual Presentation', url: 'https://www.w3.org/TR/WCAG21/#visual-presentation', conformance: 'AAA', nl: { title: 'Visuele weergave' } },
     { sc: '1.4.9', title: 'Images of Text (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception', conformance: 'AAA', nl: { title: 'Afbeeldingen van tekst (geen uitzondering)' } },
     { sc: '1.4.10', title: 'Reflow', url: 'https://www.w3.org/TR/WCAG21/#reflow', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Reflow' } },
     { sc: '1.4.11', title: 'Non-text Contrast', url: 'https://www.w3.org/TR/WCAG21/#non-text-contrast', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast van niet-tekstuele content' } },
     { sc: '1.4.12', title: 'Text Spacing', url: 'https://www.w3.org/TR/WCAG21/#text-spacing', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Tekstafstand' } },
     { sc: '1.4.13', title: 'Content on Hover or Focus', url: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Content bij hover of focus' } },
     { sc: '2.1.1', title: 'Keyboard', url: 'https://www.w3.org/TR/WCAG21/#keyboard', conformance: 'A', nldesignsystem: !0, nl: { title: 'Toetsenbord' } },
     { sc: '2.1.2', title: 'No Keyboard Trap', url: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geen toetsenbordval' } },
     { sc: '2.1.3', title: 'Keyboard (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception', conformance: 'AAA', nl: { title: 'Toetsenbord (geen uitzondering)' } },
     { sc: '2.1.4', title: 'Character Key Shortcuts', url: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts', conformance: 'A', nldesignsystem: !0, nl: { title: 'Enkel teken sneltoetsen' } },
     { sc: '2.2.1', title: 'Timing Adjustable', url: 'https://www.w3.org/TR/WCAG21/#timing-adjustable', conformance: 'A', nldesignsystem: !0, nl: { title: 'Timing aanpasbaar' } },
     { sc: '2.2.2', title: 'Pause, Stop, Hide', url: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide', conformance: 'A', nldesignsystem: !0, nl: { title: 'Pauzeren, stoppen, verbergen' } },
     { sc: '2.2.3', title: 'No Timing', url: 'https://www.w3.org/TR/WCAG21/#no-timing', conformance: 'AAA', nl: { title: 'Geen timing' } },
     { sc: '2.2.4', title: 'Interruptions', url: 'https://www.w3.org/TR/WCAG21/#interruptions', conformance: 'AAA', nl: { title: 'Onderbrekingen' } },
     { sc: '2.2.5', title: 'Re-authenticating', url: 'https://www.w3.org/TR/WCAG21/#re-authenticating', conformance: 'AAA', nl: { title: 'Herauthentisering' } },
     { sc: '2.2.6', title: 'Timeouts', url: 'https://www.w3.org/TR/WCAG21/#timeouts', conformance: 'AAA', nl: { title: 'Time-outs' } },
     { sc: '2.3.1', title: 'Three Flashes or Below Threshold', url: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold', conformance: 'A', nldesignsystem: !0, nl: { title: 'Drie flitsen of beneden drempelwaarde' } },
     { sc: '2.3.2', title: 'Three Flashes', url: 'https://www.w3.org/TR/WCAG21/#three-flashes', conformance: 'AAA', nl: { title: 'Drie flitsen' } },
     { sc: '2.3.3', title: 'Animation from Interactions', url: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions', conformance: 'AAA', nl: { title: 'Animatie uit interacties' } },
     { sc: '2.4.1', title: 'Bypass Blocks', url: 'https://www.w3.org/TR/WCAG21/#bypass-blocks', conformance: 'A', nldesignsystem: !0, nl: { title: 'Blokken omzeilen' } },
     { sc: '2.4.2', title: 'Page Titled', url: 'https://www.w3.org/TR/WCAG21/#page-titled', conformance: 'A', nldesignsystem: !0, nl: { title: 'Paginatitel' } },
     { sc: '2.4.3', title: 'Focus Order', url: 'https://www.w3.org/TR/WCAG21/#focus-order', conformance: 'A', nldesignsystem: !0, nl: { title: 'Focus volgorde' } },
     { sc: '2.4.4', title: 'Link Purpose (In Context)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context', conformance: 'A', nldesignsystem: !0, nl: { title: 'Linkdoel (in context)' } },
     { sc: '2.4.5', title: 'Multiple Ways', url: 'https://www.w3.org/TR/WCAG21/#multiple-ways', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Meerdere manieren' } },
     { sc: '2.4.6', title: 'Headings and Labels', url: 'https://www.w3.org/TR/WCAG21/#headings-and-labels', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Koppen en labels' } },
     { sc: '2.4.7', title: 'Focus Visible', url: 'https://www.w3.org/TR/WCAG21/#focus-visible', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Focus zichtbaar' } },
     { sc: '2.4.8', title: 'Location', url: 'https://www.w3.org/TR/WCAG21/#location', conformance: 'AAA', nl: { title: 'Locatie' } },
     { sc: '2.4.9', title: 'Link Purpose (Link Only)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only', conformance: 'AAA', nl: { title: 'Linkdoel (alleen link)' } },
     { sc: '2.4.10', title: 'Section Headings', url: 'https://www.w3.org/TR/WCAG21/#section-headings', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Paragraafkoppen' } },
     { sc: '2.5.1', title: 'Pointer Gestures', url: 'https://www.w3.org/TR/WCAG21/#pointer-gestures', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzergebaren' } },
     { sc: '2.5.2', title: 'Pointer Cancellation', url: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzerannulering' } },
     { sc: '2.5.3', title: 'Label in Name', url: 'https://www.w3.org/TR/WCAG21/#label-in-name', conformance: 'A', nldesignsystem: !0, nl: { title: 'Label in naam' } },
     { sc: '2.5.4', title: 'Motion Actuation', url: 'https://www.w3.org/TR/WCAG21/#motion-actuation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bewegingsactivering' } },
     { sc: '2.5.5', title: 'Target Size', url: 'https://www.w3.org/TR/WCAG21/#target-size', conformance: 'AAA', nl: { title: 'Grootte van het aanwijsgebied (uitgebreid)' } },
     { sc: '2.5.6', title: 'Concurrent Input Mechanisms', url: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms', conformance: 'AAA', nl: { title: 'Input gelijktijdige invoermechanismen' } },
     { sc: '3.1.1', title: 'Language of Page', url: 'https://www.w3.org/TR/WCAG21/#language-of-page', conformance: 'A', nldesignsystem: !0, nl: { title: 'Taal van de pagina' } },
     { sc: '3.1.2', title: 'Language of Parts', url: 'https://www.w3.org/TR/WCAG21/#language-of-parts', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Taal van onderdelen' } },
     { sc: '3.1.3', title: 'Unusual Words', url: 'https://www.w3.org/TR/WCAG21/#unusual-words', conformance: 'AAA', nl: { title: 'Ongebruikelijke woorden' } },
     { sc: '3.1.4', title: 'Abbreviations', url: 'https://www.w3.org/TR/WCAG21/#abbreviations', conformance: 'AAA', nl: { title: 'Afkortingen' } },
     { sc: '3.1.5', title: 'Reading Level', url: 'https://www.w3.org/TR/WCAG21/#reading-level', conformance: 'AAA', nl: { title: 'Leesniveau' } },
     { sc: '3.1.6', title: 'Pronunciation', url: 'https://www.w3.org/TR/WCAG21/#pronunciation', conformance: 'AAA', nl: { title: 'Uitspraak' } },
     { sc: '3.2.1', title: 'On Focus', url: 'https://www.w3.org/TR/WCAG21/#on-focus', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij focus' } },
     { sc: '3.2.2', title: 'On Input', url: 'https://www.w3.org/TR/WCAG21/#on-input', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij input' } },
     { sc: '3.2.3', title: 'Consistent Navigation', url: 'https://www.w3.org/TR/WCAG21/#consistent-navigation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente navigatie' } },
     { sc: '3.2.4', title: 'Consistent Identification', url: 'https://www.w3.org/TR/WCAG21/#consistent-identification', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente identificatie' } },
     { sc: '3.2.5', title: 'Change on Request', url: 'https://www.w3.org/TR/WCAG21/#change-on-request', conformance: 'AAA', nl: { title: 'Verandering op verzoek' } },
     { sc: '3.3.1', title: 'Error Identification', url: 'https://www.w3.org/TR/WCAG21/#error-identification', conformance: 'A', nldesignsystem: !0, nl: { title: 'Foutidentificatie' } },
     { sc: '3.3.2', title: 'Labels or Instructions', url: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions', conformance: 'A', nldesignsystem: !0, nl: { title: 'Labels of instructies' } },
     { sc: '3.3.3', title: 'Error Suggestion', url: 'https://www.w3.org/TR/WCAG21/#error-suggestion', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutsuggestie' } },
     { sc: '3.3.4', title: 'Error Prevention (Legal, Financial, Data)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutpreventie (wettelijk, financieel, gegevens)' } },
     { sc: '3.3.5', title: 'Help', url: 'https://www.w3.org/TR/WCAG21/#help', conformance: 'AAA', nl: { title: 'Hulp' } },
     { sc: '3.3.6', title: 'Error Prevention (All)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-all', conformance: 'AAA', nl: { title: 'Foutpreventie (alle)' } },
     { sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' } },
     { sc: '4.1.2', title: 'Name, Role, Value', url: 'https://www.w3.org/TR/WCAG21/#name-role-value', conformance: 'A', nldesignsystem: !0, nl: { title: 'Naam, rol, waarde' } },
     { sc: '4.1.3', title: 'Status Messages', url: 'https://www.w3.org/TR/WCAG21/#status-messages', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Statusberichten' } },
    ].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })),
    r = (new Map(s.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    l = [...s.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !r.find((t) => t.sc === e)),
    o = new Map(l.map((e) => [e.sc, e]));
  },
  51580(e, t, n) {
   var s = { './button-docs/docs/anatomy/anatomy.md': [46106, 46106], './code-block-docs/docs/anatomy/anatomy.md': [91631, 91631], './code-docs/docs/anatomy/anatomy.md': [69367, 69367], './color-sample-docs/docs/anatomy/anatomy.md': [73940, 73940], './data-badge-docs/docs/anatomy/anatomy.md': [69506, 69506], './heading-1-docs/docs/anatomy/anatomy.md': [28456, 28456], './heading-2-docs/docs/anatomy/anatomy.md': [1572, 1572], './heading-3-docs/docs/anatomy/anatomy.md': [39512, 39512], './heading-4-docs/docs/anatomy/anatomy.md': [89948, 89948], './heading-5-docs/docs/anatomy/anatomy.md': [69896, 69896], './heading-6-docs/docs/anatomy/anatomy.md': [74572, 74572], './heading-docs/docs/anatomy/anatomy.md': [64417, 64417], './link-docs/docs/anatomy/anatomy.md': [33185, 33185], './mark-docs/docs/anatomy/anatomy.md': [91171, 91171], './number-badge-docs/docs/anatomy/anatomy.md': [87231, 87231], './paragraph-docs/docs/anatomy/anatomy.md': [19961, 19961], './skip-link-docs/docs/anatomy/anatomy.md': [63513, 63513] };
   function r(e) {
    if (!n.o(s, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = s[e],
     r = t[0];
    return n.e(t[1]).then(() => n(r));
   }
   ((r.keys = () => Object.keys(s)), (r.id = 51580), (e.exports = r));
  },
  67970(e, t, n) {
   'use strict';
   n.d(t, { D: () => i });
   var s = n(46447),
    r = n(13526),
    l = n(33062),
    o = n(86070);
   const i = ({ state: e }) => {
    const t = (0, l.fX)(e);
    return (0, o.jsx)(s.KE, { className: (0, r.A)('ma-estafette-badge', t && `ma-estafette-badge--${t}`), children: e });
   };
  },
  69284(e, t, n) {
   'use strict';
   n.d(t, { M: () => c });
   var s = n(46447),
    r = n(16194),
    l = n(30758),
    o = n(15638);
   const i = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
     { types: ['maybe-class-name'], style: { color: 'var(--nlds-code-block-maybe-class-name-color, var(--nlds-code-block-class-name-color))' } },
     { types: ['comment'], style: { color: 'var(--nlds-code-block-comment-color)', fontStyle: 'italic' } },
     { types: ['prolog'], style: { color: 'var(--nlds-code-block-prolog-color)', fontStyle: 'italic' } },
     { types: ['cdata'], style: { color: 'var(--nlds-code-block-cdata-color)', fontStyle: 'italic' } },
     { types: ['punctuation'], style: { color: 'var(--nlds-code-block-punctuation-color)' } },
     { types: ['deleted'], style: { color: 'var(--nlds-code-block-deleted-color)', fontStyle: 'italic' } },
     { types: ['symbol'], style: { color: 'var(--nlds-code-block-symbol-color)' } },
     { types: ['property'], style: { color: 'var(--nlds-code-block-property-color)' } },
     { types: ['tag'], style: { color: 'var(--nlds-code-block-tag-color)' } },
     { types: ['operator'], style: { color: 'var(--nlds-code-block-operator-color)' } },
     { types: ['keyword'], style: { color: 'var(--nlds-code-block-keyword-color)' } },
     { types: ['boolean'], style: { color: 'var(--nlds-code-block-boolean-color)' } },
     { types: ['number'], style: { color: 'var(--nlds-code-block-number-color)' } },
     { types: ['constant'], style: { color: 'var(--nlds-code-block-constant-color)' } },
     { types: ['function'], style: { color: 'var(--nlds-code-block-function-color)' } },
     { types: ['builtin'], style: { color: 'var(--nlds-code-block-builtin-color)' } },
     { types: ['char'], style: { color: 'var(--nlds-code-block-char-color)' } },
     { types: ['selector'], style: { color: 'var(--nlds-code-block-selector-color)', fontStyle: 'italic' } },
     { types: ['doctype'], style: { color: 'var(--nlds-code-block-doctype-color)', fontStyle: 'italic' } },
     { types: ['attr-name'], style: { color: 'var(--nlds-code-block-attr-name-color)', fontStyle: 'italic' } },
     { types: ['inserted'], style: { color: 'var(--nlds-code-block-inserted-color)', fontStyle: 'italic' } },
     { types: ['string'], style: { color: 'var(--nlds-code-block-string-color)' } },
     { types: ['url'], style: { color: 'var(--nlds-code-block-url-color)' } },
     { types: ['entity'], style: { color: 'var(--nlds-code-block-entity-color)' } },
     { types: ['class-name'], style: { color: 'var(--nlds-code-block-class-name-color)' } },
     { types: ['atrule'], style: { color: 'var(--nlds-code-block-atrule-color)' } },
     { types: ['attr-value'], style: { color: 'var(--nlds-code-block-attr-value-color)' } },
     { types: ['regex'], style: { color: 'var(--nlds-code-block-regex-color)' } },
     { types: ['important'], style: { color: 'var(--nlds-code-block-important-color)', fontWeight: 'bold' } },
     { types: ['variable'], style: { color: 'var(--nlds-code-block-variable-color)' } },
     { types: ['bold'], style: { fontWeight: 'bold' } },
     { types: ['italic'], style: { fontStyle: 'italic' } },
    ],
   };
   var a = n(86070);
   function c({ lineNumber: e, syntax: t, textContent: n, trim: c }) {
    let d = n;
    const { title: m, type: h } = (0, l.useContext)(o.x),
     g = (0, l.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(r.f4, { theme: i, code: d, language: t || '', children: ({ style: t, tokens: n, getLineProps: r, getTokenProps: l }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, a.jsx)(s.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': g, style: t, children: n.map((t, n) => (0, a.jsxs)('span', { ...r({ line: t }), children: [e && (0, a.jsx)('span', { children: n + 1 }), t.map((e, t) => (0, a.jsx)('span', { ...l({ token: e }) }, t)), '\n'] }, n)) })] }) }));
   }
  },
  79988(e, t, n) {
   'use strict';
   (n.r(t), n.d(t, { default: () => A }));
   n(30758);
   var s = n(13526),
    r = n(74147),
    l = n(86332),
    o = n(71639),
    i = n(57605),
    a = n(19485),
    c = n(63811),
    d = n(99816),
    m = n(70241),
    h = n(68139),
    g = n(86070);
   function u(e) {
    const t = (0, h.kJ)(e);
    return (0, g.jsx)(m.A, { children: (0, g.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(t) }) });
   }
   function p(e) {
    const { metadata: t } = e,
     {
      siteConfig: { title: n },
     } = (0, r.A)(),
     { blogDescription: s, blogTitle: o, permalink: i } = t,
     a = '/' === i ? n : o;
    return (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(l.be, { title: a, description: s }), (0, g.jsx)(c.A, { tag: 'blog_posts_list' })] });
   }
   function w(e) {
    const { metadata: t, items: n, sidebar: s } = e;
    return (0, g.jsxs)(i.A, { sidebar: s, children: [(0, g.jsx)(d.A, { items: n }), (0, g.jsx)(a.A, { metadata: t })] });
   }
   function A(e) {
    return (0, g.jsxs)(l.e3, { className: (0, s.A)(o.G.wrapper.blogPages, o.G.page.blogListPage), children: [(0, g.jsx)(p, { ...e }), (0, g.jsx)(u, { ...e }), (0, g.jsx)(w, { ...e })] });
   }
  },
  90495(e, t, n) {
   'use strict';
   n.d(t, { AC: () => c, Fu: () => o, Wu: () => i, Zp: () => a });
   var s = n(46447),
    r = n(13526),
    l = n(86070);
   const o = ({ background: e, children: t, className: n, ...s }) => (0, l.jsx)('div', { className: (0, r.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, n), ...s, children: t }),
    i = (e) => (0, l.jsx)('div', { className: 'ma-card__content', ...e }),
    a = ({ href: e, appearance: t, className: n, component: o = 'div', background: i, children: a }) => {
     const c = (e) => ('article' === o ? (0, l.jsx)('article', { ...e }) : 'section' === o ? (0, l.jsx)('section', { ...e }) : (0, l.jsx)('div', { ...e })),
      d = (0, l.jsx)(c, { className: (0, r.A)('ma-cardgroup__card', i && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${t}`, n), children: a });
     return e ? (0, l.jsx)(s.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'medium', children: t, className: n }) => (0, l.jsx)('div', { className: (0, r.A)('ma-cardgroup', `ma-cardgroup--${e}`, n), children: t });
  },
  99816(e, t, n) {
   'use strict';
   n.d(t, { A: () => o });
   n(30758);
   var s = n(68139),
    r = n(11063),
    l = n(86070);
   function o({ items: e, component: t = r.A }) {
    return (0, l.jsx)(l.Fragment, { children: e.map(({ content: e }) => (0, l.jsx)(s.in, { content: e, children: (0, l.jsx)(t, { children: (0, l.jsx)(e, {}) }) }, e.metadata.permalink)) });
   }
  },
 },
]);
