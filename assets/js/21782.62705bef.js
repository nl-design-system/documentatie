'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [21782],
 {
  14898: (e, n, t) => {
   t.d(n, { AE: () => c, Rc: () => r, TT: () => o, Uh: () => l, Yh: () => d });
   t(30758);
   var a = t(40359),
    i = t(51416),
    s = t(86070);
   function r() {
    return (0, s.jsx)(a.A, { id: 'theme.contentVisibility.unlistedBanner.title', description: 'The unlisted content banner title', children: 'Unlisted page' });
   }
   function l() {
    return (0, s.jsx)(a.A, { id: 'theme.contentVisibility.unlistedBanner.message', description: 'The unlisted content banner message', children: 'This page is unlisted. Search engines will not index it, and only users having a direct link can access it.' });
   }
   function c() {
    return (0, s.jsx)(i.A, { children: (0, s.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function d() {
    return (0, s.jsx)(a.A, { id: 'theme.contentVisibility.draftBanner.title', description: 'The draft content banner title', children: 'Draft page' });
   }
   function o() {
    return (0, s.jsx)(a.A, { id: 'theme.contentVisibility.draftBanner.message', description: 'The draft content banner message', children: 'This page is a draft. It will only be visible in dev and be excluded from the production build.' });
   }
  },
  22045: (e, n, t) => {
   t.d(n, { A: () => p });
   t(30758);
   var a = t(13526),
    i = t(40359),
    s = t(76493),
    r = t(71170);
   const l = { iconEdit: 'iconEdit_AU1i' };
   var c = t(86070);
   function d({ className: e, ...n }) {
    return (0, c.jsx)('svg', { fill: 'currentColor', height: '20', width: '20', viewBox: '0 0 40 40', className: (0, a.A)(l.iconEdit, e), 'aria-hidden': 'true', ...n, children: (0, c.jsx)('g', { children: (0, c.jsx)('path', { d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z' }) }) });
   }
   function o({ editUrl: e }) {
    return (0, c.jsxs)(r.A, { to: e, className: s.G.common.editThisPage, children: [(0, c.jsx)(d, {}), (0, c.jsx)(i.A, { id: 'theme.common.editThisPage', description: 'The link label to edit the current page', children: 'Edit this page' })] });
   }
   var u = t(39436);
   function m({ lastUpdatedAt: e }) {
    const n = new Date(e),
     t = (0, u.i)({ day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(n);
    return (0, c.jsx)(i.A, { id: 'theme.lastUpdated.atDate', description: 'The words used to describe on which date a page has been last updated', values: { date: (0, c.jsx)('b', { children: (0, c.jsx)('time', { dateTime: n.toISOString(), itemProp: 'dateModified', children: t }) }) }, children: ' on {date}' });
   }
   function h({ lastUpdatedBy: e }) {
    return (0, c.jsx)(i.A, { id: 'theme.lastUpdated.byUser', description: 'The words used to describe by who the page has been last updated', values: { user: (0, c.jsx)('b', { children: e }) }, children: ' by {user}' });
   }
   function g({ lastUpdatedAt: e, lastUpdatedBy: n }) {
    return (0, c.jsxs)('span', { className: s.G.common.lastUpdated, children: [(0, c.jsx)(i.A, { id: 'theme.lastUpdated.lastUpdatedAtBy', description: 'The sentence used to display when a page has been last updated, and by who', values: { atDate: e ? (0, c.jsx)(m, { lastUpdatedAt: e }) : '', byUser: n ? (0, c.jsx)(h, { lastUpdatedBy: n }) : '' }, children: 'Last updated{atDate}{byUser}' }), !1] });
   }
   const f = { lastUpdated: 'lastUpdated_pVQo', noPrint: 'noPrint_rT2f' };
   function p({ className: e, editUrl: n, lastUpdatedAt: t, lastUpdatedBy: i }) {
    return (0, c.jsxs)('div', { className: (0, a.A)('row', e), children: [(0, c.jsx)('div', { className: (0, a.A)('col', f.noPrint), children: n && (0, c.jsx)(o, { editUrl: n }) }), (0, c.jsx)('div', { className: (0, a.A)('col', f.lastUpdated), children: (t || i) && (0, c.jsx)(g, { lastUpdatedAt: t, lastUpdatedBy: i }) })] });
   }
  },
  24744: (e, n, t) => {
   t.d(n, { A: () => d });
   t(30758);
   var a = t(13526),
    i = t(76493),
    s = t(14898),
    r = t(51786),
    l = t(86070);
   function c({ className: e }) {
    return (0, l.jsx)(r.A, { type: 'caution', title: (0, l.jsx)(s.Rc, {}), className: (0, a.A)(e, i.G.common.unlistedBanner), children: (0, l.jsx)(s.Uh, {}) });
   }
   function d(e) {
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(s.AE, {}), (0, l.jsx)(c, { ...e })] });
   }
  },
  39436: (e, n, t) => {
   t.d(n, { i: () => i });
   var a = t(34374);
   function i(e = {}) {
    const {
      i18n: { currentLocale: n },
     } = (0, a.A)(),
     t = (function () {
      const {
       i18n: { currentLocale: e, localeConfigs: n },
      } = (0, a.A)();
      return n[e].calendar;
     })();
    return new Intl.DateTimeFormat(n, { calendar: t, ...e });
   }
  },
  42973: (e, n, t) => {
   t.d(n, { A: () => o });
   t(30758);
   var a = t(13526),
    i = t(14898),
    s = t(76493),
    r = t(51786),
    l = t(86070);
   function c({ className: e }) {
    return (0, l.jsx)(r.A, { type: 'caution', title: (0, l.jsx)(i.Yh, {}), className: (0, a.A)(e, s.G.common.draftBanner), children: (0, l.jsx)(i.TT, {}) });
   }
   var d = t(24744);
   function o({ metadata: e }) {
    const { unlisted: n, frontMatter: t } = e;
    return (0, l.jsxs)(l.Fragment, { children: [(n || t.unlisted) && (0, l.jsx)(d.A, {}), t.draft && (0, l.jsx)(c, {})] });
   }
  },
  50873: (e, n, t) => {
   t.d(n, { A: () => f });
   var a = t(30758),
    i = t(53340);
   function s(e) {
    const n = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     t = Array(7).fill(-1);
    n.forEach((e, n) => {
     const a = t.slice(2, e.level);
     (e.parentIndex = Math.max(...a)), (t[e.level] = n);
    });
    const a = [];
    return (
     n.forEach((e) => {
      const { parentIndex: t, ...i } = e;
      t >= 0 ? n[t].children.push(i) : a.push(i);
     }),
     a
    );
   }
   function r({ toc: e, minHeadingLevel: n, maxHeadingLevel: t }) {
    return e.flatMap((e) => {
     const a = r({ toc: e.children, minHeadingLevel: n, maxHeadingLevel: t });
     return (function (e) {
      return e.level >= n && e.level <= t;
     })(e)
      ? [{ ...e, children: a }]
      : a;
    });
   }
   function l(e) {
    const n = e.getBoundingClientRect();
    return n.top === n.bottom ? l(e.parentNode) : n;
   }
   function c(e, { anchorTopOffset: n }) {
    const t = e.find((e) => l(e).top >= n);
    if (t) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(l(t))
      ? t
      : (e[e.indexOf(t) - 1] ?? null);
    }
    return e[e.length - 1] ?? null;
   }
   function d() {
    const e = (0, a.useRef)(0),
     {
      navbar: { hideOnScroll: n },
     } = (0, i.p)();
    return (
     (0, a.useEffect)(() => {
      e.current = n ? 0 : document.querySelector('.navbar').clientHeight;
     }, [n]),
     e
    );
   }
   function o(e) {
    const n = (0, a.useRef)(void 0),
     t = d();
    (0, a.useEffect)(() => {
     if (!e) return () => {};
     const { linkClassName: a, linkActiveClassName: i, minHeadingLevel: s, maxHeadingLevel: r } = e;
     function l() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(a),
       l = (function ({ minHeadingLevel: e, maxHeadingLevel: n }) {
        const t = [];
        for (let a = e; a <= n; a += 1) t.push(`h${a}.anchor`);
        return Array.from(document.querySelectorAll(t.join()));
       })({ minHeadingLevel: s, maxHeadingLevel: r }),
       d = c(l, { anchorTopOffset: t.current }),
       o = e.find(
        (e) =>
         d &&
         d.id ===
          (function (e) {
           return decodeURIComponent(e.href.substring(e.href.indexOf('#') + 1));
          })(e),
       );
      e.forEach((e) => {
       !(function (e, t) {
        t ? (n.current && n.current !== e && n.current.classList.remove(i), e.classList.add(i), (n.current = e)) : e.classList.remove(i);
       })(e, e === o);
      });
     }
     return (
      document.addEventListener('scroll', l),
      document.addEventListener('resize', l),
      l(),
      () => {
       document.removeEventListener('scroll', l), document.removeEventListener('resize', l);
      }
     );
    }, [e, t]);
   }
   var u = t(71170),
    m = t(86070);
   function h({ toc: e, className: n, linkClassName: t, isChild: a }) {
    return e.length ? (0, m.jsx)('ul', { className: a ? void 0 : n, children: e.map((e) => (0, m.jsxs)('li', { children: [(0, m.jsx)(u.A, { to: `#${e.id}`, className: t ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, m.jsx)(h, { isChild: !0, toc: e.children, className: n, linkClassName: t })] }, e.id)) }) : null;
   }
   const g = a.memo(h);
   function f({ toc: e, className: n = 'table-of-contents table-of-contents__left-border', linkClassName: t = 'table-of-contents__link', linkActiveClassName: l, minHeadingLevel: c, maxHeadingLevel: d, ...u }) {
    const h = (0, i.p)(),
     f = c ?? h.tableOfContents.minHeadingLevel,
     p = d ?? h.tableOfContents.maxHeadingLevel,
     v = (function ({ toc: e, minHeadingLevel: n, maxHeadingLevel: t }) {
      return (0, a.useMemo)(() => r({ toc: s(e), minHeadingLevel: n, maxHeadingLevel: t }), [e, n, t]);
     })({ toc: e, minHeadingLevel: f, maxHeadingLevel: p });
    return (
     o(
      (0, a.useMemo)(() => {
       if (t && l) return { linkClassName: t, linkActiveClassName: l, minHeadingLevel: f, maxHeadingLevel: p };
      }, [t, l, f, p]),
     ),
     (0, m.jsx)(g, { toc: v, className: n, linkClassName: t, ...u })
    );
   }
  },
  59416: (e, n, t) => {
   t.d(n, { A: () => d });
   t(30758);
   var a = t(13526),
    i = t(50873);
   const s = { tableOfContents: 'tableOfContents_Sh0M', docItemContainer: 'docItemContainer_tmkX' };
   var r = t(86070);
   const l = 'table-of-contents__link toc-highlight',
    c = 'table-of-contents__link--active';
   function d({ className: e, ...n }) {
    return (0, r.jsx)('div', { className: (0, a.A)(s.tableOfContents, 'thin-scrollbar', e), children: (0, r.jsx)(i.A, { ...n, linkClassName: l, linkActiveClassName: c }) });
   }
  },
  62154: (e, n, t) => {
   t.d(n, { A: () => c });
   t(30758);
   var a = t(13526),
    i = t(40359),
    s = t(86478);
   const r = { tags: 'tags_EY8n', tag: 'tag_grtc' };
   var l = t(86070);
   function c({ tags: e }) {
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('b', { children: (0, l.jsx)(i.A, { id: 'theme.tags.tagsListLabel', description: 'The label alongside a tag list', children: 'Tags:' }) }), (0, l.jsx)('ul', { className: (0, a.A)(r.tags, 'padding--none', 'margin-left--sm'), children: e.map((e) => (0, l.jsx)('li', { className: r.tag, children: (0, l.jsx)(s.A, { ...e }) }, e.permalink)) })] });
   }
  },
  78612: (e, n, t) => {
   t.d(n, { A: () => r });
   t(30758);
   var a = t(13526),
    i = t(71170),
    s = t(86070);
   function r(e) {
    const { permalink: n, title: t, subLabel: r, isNext: l } = e;
    return (0, s.jsxs)(i.A, { className: (0, a.A)('pagination-nav__link', l ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: n, children: [r && (0, s.jsx)('div', { className: 'pagination-nav__sublabel', children: r }), (0, s.jsx)('div', { className: 'pagination-nav__label', children: t })] });
   }
  },
  86478: (e, n, t) => {
   t.d(n, { A: () => l });
   t(30758);
   var a = t(13526),
    i = t(71170);
   const s = { tag: 'tag_JwFX', tagRegular: 'tagRegular_pSBk', tagWithCount: 'tagWithCount_x6X6' };
   var r = t(86070);
   function l({ permalink: e, label: n, count: t, description: l }) {
    return (0, r.jsxs)(i.A, { rel: 'tag', href: e, title: l, className: (0, a.A)(s.tag, t ? s.tagWithCount : s.tagRegular), children: [n, t && (0, r.jsx)('span', { children: t })] });
   }
  },
 },
]);
