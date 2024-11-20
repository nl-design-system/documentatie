/*! For license information please see 29765.04374036.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [29765],
 {
  78377: (e, n, t) => {
   t.d(n, { Z: () => i });
   const i = () => null;
  },
  49992: (e, n, t) => {
   t.d(n, { Z: () => M });
   var i = t(75271),
    a = t(52676);
   function l(e) {
    const { mdxAdmonitionTitle: n, rest: t } = (function (e) {
      const n = i.Children.toArray(e),
       t = n.find((e) => i.isValidElement(e) && 'mdxAdmonitionTitle' === e.type),
       l = n.filter((e) => e !== t),
       s = t?.props.children;
      return { mdxAdmonitionTitle: s, rest: l.length > 0 ? (0, a.jsx)(a.Fragment, { children: l }) : null };
     })(e.children),
     l = e.title ?? n;
    return { ...e, ...(l && { title: l }), children: t };
   }
   var s = t(4814),
    o = t(7512),
    r = t(61902);
   const c = { admonition: 'admonition_rIm1', admonitionHeading: 'admonitionHeading_AP0H', admonitionIcon: 'admonitionIcon_osMm', admonitionContent: 'admonitionContent_Dssj' };
   function d(e) {
    let { type: n, className: t, children: i } = e;
    return (0, a.jsx)('div', { className: (0, s.Z)(r.k.common.admonition, r.k.common.admonitionType(n), c.admonition, t), children: i });
   }
   function m(e) {
    let { icon: n, title: t } = e;
    return (0, a.jsxs)('div', { className: c.admonitionHeading, children: [(0, a.jsx)('span', { className: c.admonitionIcon, children: n }), t] });
   }
   function u(e) {
    let { children: n } = e;
    return n ? (0, a.jsx)('div', { className: c.admonitionContent, children: n }) : null;
   }
   function h(e) {
    const { type: n, icon: t, title: i, children: l, className: s } = e;
    return (0, a.jsxs)(d, { type: n, className: s, children: [(0, a.jsx)(m, { title: i, icon: t }), (0, a.jsx)(u, { children: l })] });
   }
   function f(e) {
    return (0, a.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, a.jsx)('path', { fillRule: 'evenodd', d: 'M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z' }) });
   }
   const v = { icon: (0, a.jsx)(f, {}), title: (0, a.jsx)(o.Z, { id: 'theme.admonition.note', description: 'The default label used for the Note admonition (:::note)', children: 'note' }) };
   function g(e) {
    return (0, a.jsx)(h, { ...v, ...e, className: (0, s.Z)('alert alert--secondary', e.className), children: e.children });
   }
   function p(e) {
    return (0, a.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, a.jsx)('path', { fillRule: 'evenodd', d: 'M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z' }) });
   }
   const x = { icon: (0, a.jsx)(p, {}), title: (0, a.jsx)(o.Z, { id: 'theme.admonition.tip', description: 'The default label used for the Tip admonition (:::tip)', children: 'tip' }) };
   function j(e) {
    return (0, a.jsx)(h, { ...x, ...e, className: (0, s.Z)('alert alert--success', e.className), children: e.children });
   }
   function N(e) {
    return (0, a.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, a.jsx)('path', { fillRule: 'evenodd', d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z' }) });
   }
   const C = { icon: (0, a.jsx)(N, {}), title: (0, a.jsx)(o.Z, { id: 'theme.admonition.info', description: 'The default label used for the Info admonition (:::info)', children: 'info' }) };
   function b(e) {
    return (0, a.jsx)(h, { ...C, ...e, className: (0, s.Z)('alert alert--info', e.className), children: e.children });
   }
   function Z(e) {
    return (0, a.jsx)('svg', { viewBox: '0 0 16 16', ...e, children: (0, a.jsx)('path', { fillRule: 'evenodd', d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z' }) });
   }
   const _ = { icon: (0, a.jsx)(Z, {}), title: (0, a.jsx)(o.Z, { id: 'theme.admonition.warning', description: 'The default label used for the Warning admonition (:::warning)', children: 'warning' }) };
   function k(e) {
    return (0, a.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, a.jsx)('path', { fillRule: 'evenodd', d: 'M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z' }) });
   }
   const L = { icon: (0, a.jsx)(k, {}), title: (0, a.jsx)(o.Z, { id: 'theme.admonition.danger', description: 'The default label used for the Danger admonition (:::danger)', children: 'danger' }) };
   const y = { icon: (0, a.jsx)(Z, {}), title: (0, a.jsx)(o.Z, { id: 'theme.admonition.caution', description: 'The default label used for the Caution admonition (:::caution)', children: 'caution' }) };
   const H = {
    ...{
     note: g,
     tip: j,
     info: b,
     warning: function (e) {
      return (0, a.jsx)(h, { ..._, ...e, className: (0, s.Z)('alert alert--warning', e.className), children: e.children });
     },
     danger: function (e) {
      return (0, a.jsx)(h, { ...L, ...e, className: (0, s.Z)('alert alert--danger', e.className), children: e.children });
     },
    },
    ...{
     secondary: (e) => (0, a.jsx)(g, { title: 'secondary', ...e }),
     important: (e) => (0, a.jsx)(b, { title: 'important', ...e }),
     success: (e) => (0, a.jsx)(j, { title: 'success', ...e }),
     caution: function (e) {
      return (0, a.jsx)(h, { ...y, ...e, className: (0, s.Z)('alert alert--warning', e.className), children: e.children });
     },
    },
   };
   function M(e) {
    const n = l(e),
     t = ((i = n.type), H[i] || (console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`), H.info));
    var i;
    return (0, a.jsx)(t, { ...n });
   }
  },
  79321: (e, n, t) => {
   t.d(n, { Z: () => f });
   var i = t(75271),
    a = t(4814),
    l = t(62935),
    s = t(93456);
   const o = { details: 'details_yGZ4', isBrowser: 'isBrowser_Wmg1', collapsibleContent: 'collapsibleContent_vvqC' };
   var r = t(52676);
   function c(e) {
    return !!e && ('SUMMARY' === e.tagName || c(e.parentElement));
   }
   function d(e, n) {
    return !!e && (e === n || d(e.parentElement, n));
   }
   function m(e) {
    let { summary: n, children: t, ...m } = e;
    const u = (0, l.Z)(),
     h = (0, i.useRef)(null),
     { collapsed: f, setCollapsed: v } = (0, s.u)({ initialState: !m.open }),
     [g, p] = (0, i.useState)(m.open),
     x = i.isValidElement(n) ? n : (0, r.jsx)('summary', { children: n ?? 'Details' });
    return (0, r.jsxs)('details', {
     ...m,
     ref: h,
     open: g,
     'data-collapsed': f,
     className: (0, a.Z)(o.details, u && o.isBrowser, m.className),
     onMouseDown: (e) => {
      c(e.target) && e.detail > 1 && e.preventDefault();
     },
     onClick: (e) => {
      e.stopPropagation();
      const n = e.target;
      c(n) && d(n, h.current) && (e.preventDefault(), f ? (v(!1), p(!0)) : v(!0));
     },
     children: [
      x,
      (0, r.jsx)(s.z, {
       lazy: !1,
       collapsed: f,
       disableSSRStyle: !0,
       onCollapseTransitionEnd: (e) => {
        v(e), p(!e);
       },
       children: (0, r.jsx)('div', { className: o.collapsibleContent, children: t }),
      }),
     ],
    });
   }
   const u = { details: 'details_SKjl' },
    h = 'alert alert--info';
   function f(e) {
    let { ...n } = e;
    return (0, r.jsx)(m, { ...n, className: (0, a.Z)(h, u.details, n.className) });
   }
  },
  97885: (e, n, t) => {
   t.d(n, { Z: () => d });
   t(75271);
   var i = t(7512),
    a = t(61902),
    l = t(90441),
    s = t(4814);
   const o = { iconEdit: 'iconEdit_aJxh' };
   var r = t(52676);
   function c(e) {
    let { className: n, ...t } = e;
    return (0, r.jsx)('svg', { fill: 'currentColor', height: '20', width: '20', viewBox: '0 0 40 40', className: (0, s.Z)(o.iconEdit, n), 'aria-hidden': 'true', ...t, children: (0, r.jsx)('g', { children: (0, r.jsx)('path', { d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z' }) }) });
   }
   function d(e) {
    let { editUrl: n } = e;
    return (0, r.jsxs)(l.Z, { to: n, className: a.k.common.editThisPage, children: [(0, r.jsx)(c, {}), (0, r.jsx)(i.Z, { id: 'theme.common.editThisPage', description: 'The link label to edit the current page', children: 'Edit this page' })] });
   }
  },
  6348: (e, n, t) => {
   t.d(n, { Z: () => s });
   t(75271);
   var i = t(4814),
    a = t(90441),
    l = t(52676);
   function s(e) {
    const { permalink: n, title: t, subLabel: s, isNext: o } = e;
    return (0, l.jsxs)(a.Z, { className: (0, i.Z)('pagination-nav__link', o ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: n, children: [s && (0, l.jsx)('div', { className: 'pagination-nav__sublabel', children: s }), (0, l.jsx)('div', { className: 'pagination-nav__label', children: t })] });
   }
  },
  39201: (e, n, t) => {
   t.d(n, { Z: () => c });
   t(75271);
   var i = t(4814),
    a = t(68139);
   const l = { tableOfContents: 'tableOfContents_MGdY', docItemContainer: 'docItemContainer_pMSN' };
   var s = t(52676);
   const o = 'table-of-contents__link toc-highlight',
    r = 'table-of-contents__link--active';
   function c(e) {
    let { className: n, ...t } = e;
    return (0, s.jsx)('div', { className: (0, i.Z)(l.tableOfContents, 'thin-scrollbar', n), children: (0, s.jsx)(a.Z, { ...t, linkClassName: o, linkActiveClassName: r }) });
   }
  },
  68139: (e, n, t) => {
   t.d(n, { Z: () => v });
   var i = t(75271),
    a = t(1257);
   function l(e) {
    const n = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     t = Array(7).fill(-1);
    n.forEach((e, n) => {
     const i = t.slice(2, e.level);
     (e.parentIndex = Math.max(...i)), (t[e.level] = n);
    });
    const i = [];
    return (
     n.forEach((e) => {
      const { parentIndex: t, ...a } = e;
      t >= 0 ? n[t].children.push(a) : i.push(a);
     }),
     i
    );
   }
   function s(e) {
    let { toc: n, minHeadingLevel: t, maxHeadingLevel: i } = e;
    return n.flatMap((e) => {
     const n = s({ toc: e.children, minHeadingLevel: t, maxHeadingLevel: i });
     return (function (e) {
      return e.level >= t && e.level <= i;
     })(e)
      ? [{ ...e, children: n }]
      : n;
    });
   }
   function o(e) {
    const n = e.getBoundingClientRect();
    return n.top === n.bottom ? o(e.parentNode) : n;
   }
   function r(e, n) {
    let { anchorTopOffset: t } = n;
    const i = e.find((e) => o(e).top >= t);
    if (i) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(o(i))
      ? i
      : (e[e.indexOf(i) - 1] ?? null);
    }
    return e[e.length - 1] ?? null;
   }
   function c() {
    const e = (0, i.useRef)(0),
     {
      navbar: { hideOnScroll: n },
     } = (0, a.L)();
    return (
     (0, i.useEffect)(() => {
      e.current = n ? 0 : document.querySelector('.navbar').clientHeight;
     }, [n]),
     e
    );
   }
   function d(e) {
    const n = (0, i.useRef)(void 0),
     t = c();
    (0, i.useEffect)(() => {
     if (!e) return () => {};
     const { linkClassName: i, linkActiveClassName: a, minHeadingLevel: l, maxHeadingLevel: s } = e;
     function o() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(i),
       o = (function (e) {
        let { minHeadingLevel: n, maxHeadingLevel: t } = e;
        const i = [];
        for (let a = n; a <= t; a += 1) i.push(`h${a}.anchor`);
        return Array.from(document.querySelectorAll(i.join()));
       })({ minHeadingLevel: l, maxHeadingLevel: s }),
       c = r(o, { anchorTopOffset: t.current }),
       d = e.find(
        (e) =>
         c &&
         c.id ===
          (function (e) {
           return decodeURIComponent(e.href.substring(e.href.indexOf('#') + 1));
          })(e),
       );
      e.forEach((e) => {
       !(function (e, t) {
        t ? (n.current && n.current !== e && n.current.classList.remove(a), e.classList.add(a), (n.current = e)) : e.classList.remove(a);
       })(e, e === d);
      });
     }
     return (
      document.addEventListener('scroll', o),
      document.addEventListener('resize', o),
      o(),
      () => {
       document.removeEventListener('scroll', o), document.removeEventListener('resize', o);
      }
     );
    }, [e, t]);
   }
   var m = t(90441),
    u = t(52676);
   function h(e) {
    let { toc: n, className: t, linkClassName: i, isChild: a } = e;
    return n.length ? (0, u.jsx)('ul', { className: a ? void 0 : t, children: n.map((e) => (0, u.jsxs)('li', { children: [(0, u.jsx)(m.Z, { to: `#${e.id}`, className: i ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, u.jsx)(h, { isChild: !0, toc: e.children, className: t, linkClassName: i })] }, e.id)) }) : null;
   }
   const f = i.memo(h);
   function v(e) {
    let { toc: n, className: t = 'table-of-contents table-of-contents__left-border', linkClassName: o = 'table-of-contents__link', linkActiveClassName: r, minHeadingLevel: c, maxHeadingLevel: m, ...h } = e;
    const v = (0, a.L)(),
     g = c ?? v.tableOfContents.minHeadingLevel,
     p = m ?? v.tableOfContents.maxHeadingLevel,
     x = (function (e) {
      let { toc: n, minHeadingLevel: t, maxHeadingLevel: a } = e;
      return (0, i.useMemo)(() => s({ toc: l(n), minHeadingLevel: t, maxHeadingLevel: a }), [n, t, a]);
     })({ toc: n, minHeadingLevel: g, maxHeadingLevel: p });
    return (
     d(
      (0, i.useMemo)(() => {
       if (o && r) return { linkClassName: o, linkActiveClassName: r, minHeadingLevel: g, maxHeadingLevel: p };
      }, [o, r, g, p]),
     ),
     (0, u.jsx)(f, { toc: x, className: t, linkClassName: o, ...h })
    );
   }
  },
  37781: (e, n, t) => {
   t.d(n, { Z: () => o });
   t(75271);
   var i = t(4814),
    a = t(90441);
   const l = { tag: 'tag_YNlu', tagRegular: 'tagRegular_GhNX', tagWithCount: 'tagWithCount_xdou' };
   var s = t(52676);
   function o(e) {
    let { permalink: n, label: t, count: o } = e;
    return (0, s.jsxs)(a.Z, { href: n, className: (0, i.Z)(l.tag, o ? l.tagWithCount : l.tagRegular), children: [t, o && (0, s.jsx)('span', { children: o })] });
   }
  },
  45538: (e, n, t) => {
   t.d(n, { Z: () => r });
   t(75271);
   var i = t(4814),
    a = t(7512),
    l = t(37781);
   const s = { tags: 'tags_FOGr', tag: 'tag_UCGV' };
   var o = t(52676);
   function r(e) {
    let { tags: n } = e;
    return (0, o.jsxs)(o.Fragment, {
     children: [
      (0, o.jsx)('b', { children: (0, o.jsx)(a.Z, { id: 'theme.tags.tagsListLabel', description: 'The label alongside a tag list', children: 'Tags:' }) }),
      (0, o.jsx)('ul', {
       className: (0, i.Z)(s.tags, 'padding--none', 'margin-left--sm'),
       children: n.map((e) => {
        let { label: n, permalink: t } = e;
        return (0, o.jsx)('li', { className: s.tag, children: (0, o.jsx)(l.Z, { label: n, permalink: t }) }, t);
       }),
      }),
     ],
    });
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => s });
   var i = t(75271);
   const a = {},
    l = i.createContext(a);
   function s(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), i.createElement(l.Provider, { value: n }, e.children);
   }
  },
  67663: (e, n, t) => {
   t.d(n, { Z: () => i });
   var i = (0, t(69804).Z)('outline', 'mood-happy', 'IconMoodHappy', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  77355: (e, n, t) => {
   t.d(n, { Z: () => i });
   var i = (0, t(69804).Z)('outline', 'mood-sad', 'IconMoodSad', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
 },
]);
