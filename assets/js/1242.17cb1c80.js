/*! For license information please see 1242.17cb1c80.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [1242],
 {
  2858(e, n, a) {
   a.d(n, { i: () => r });
   var t = a(27331);
   function r(e = {}) {
    const {
      i18n: { currentLocale: n },
     } = (0, t.A)(),
     a = (function () {
      const {
       i18n: { currentLocale: e, localeConfigs: n },
      } = (0, t.A)();
      return n[e].calendar;
     })();
    return new Intl.DateTimeFormat(n, { calendar: a, ...e });
   }
  },
  3516(e, n, a) {
   a.d(n, { A: () => u });
   a(30758);
   var t = a(13526),
    r = a(24440),
    i = a(81943),
    l = a(41819);
   const o = 'iconEdit__SPV';
   var d = a(86070);
   function s({ className: e, ...n }) {
    return (0, d.jsx)('svg', { fill: 'currentColor', height: '20', width: '20', viewBox: '0 0 40 40', className: (0, t.A)(o, e), 'aria-hidden': 'true', ...n, children: (0, d.jsx)('g', { children: (0, d.jsx)('path', { d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z' }) }) });
   }
   function c({ editUrl: e }) {
    return (0, d.jsxs)(l.A, { to: e, className: i.G.common.editThisPage, children: [(0, d.jsx)(s, {}), (0, d.jsx)(r.A, { id: 'theme.common.editThisPage', description: 'The link label to edit the current page', children: 'Edit this page' })] });
   }
   var h = a(2858);
   function g({ lastUpdatedAt: e }) {
    const n = new Date(e),
     a = (0, h.i)({ day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(n);
    return (0, d.jsx)(r.A, { id: 'theme.lastUpdated.atDate', description: 'The words used to describe on which date a page has been last updated', values: { date: (0, d.jsx)('b', { children: (0, d.jsx)('time', { dateTime: n.toISOString(), itemProp: 'dateModified', children: a }) }) }, children: ' on {date}' });
   }
   function v({ lastUpdatedBy: e }) {
    return (0, d.jsx)(r.A, { id: 'theme.lastUpdated.byUser', description: 'The words used to describe by who the page has been last updated', values: { user: (0, d.jsx)('b', { children: e }) }, children: ' by {user}' });
   }
   function m({ lastUpdatedAt: e, lastUpdatedBy: n }) {
    return (0, d.jsxs)('span', { className: i.G.common.lastUpdated, children: [(0, d.jsx)(r.A, { id: 'theme.lastUpdated.lastUpdatedAtBy', description: 'The sentence used to display when a page has been last updated, and by who', values: { atDate: e ? (0, d.jsx)(g, { lastUpdatedAt: e }) : '', byUser: n ? (0, d.jsx)(v, { lastUpdatedBy: n }) : '' }, children: 'Last updated{atDate}{byUser}' }), !1] });
   }
   const p = 'lastUpdated_t6HD',
    f = 'noPrint_BL5k';
   function u({ className: e, editUrl: n, lastUpdatedAt: a, lastUpdatedBy: r }) {
    return (0, d.jsxs)('div', { className: (0, t.A)('row', e), children: [(0, d.jsx)('div', { className: (0, t.A)('col', f), children: n && (0, d.jsx)(c, { editUrl: n }) }), (0, d.jsx)('div', { className: (0, t.A)('col', p), children: (a || r) && (0, d.jsx)(m, { lastUpdatedAt: a, lastUpdatedBy: r }) })] });
   }
  },
  4077(e, n, a) {
   a.d(n, { A: () => t });
   const t = (0, a(18652).A)('outline', 'mood-happy', 'MoodHappy', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  48004(e, n, a) {
   a.d(n, { f: () => t.f });
   var t = a(56561);
   (a(86070), a(30758));
   !(function (e, n) {
    void 0 === n && (n = {});
    var a = n.insertAt;
    if ('undefined' != typeof document) {
     var t = document.head || document.getElementsByTagName('head')[0],
      r = document.createElement('style');
     ((r.type = 'text/css'), 'top' === a && t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r), r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e)));
    }
   })('.nl-paragraph{color:var(--nl-paragraph-color, inherit);font-family:var(--nl-paragraph-font-family, inherit);font-size:var(--nl-paragraph-font-size, inherit);font-weight:var(--nl-paragraph-font-weight, inherit);line-height:var(--nl-paragraph-line-height, inherit);margin-block-end:var(--nl-paragraph-margin-block-end, revert);margin-block-start:var(--nl-paragraph-margin-block-start, revert)}.nl-paragraph--lead{font-size:var(--nl-paragraph-lead-font-size, var(--nl-paragraph-font-size, inherit));font-weight:var(--nl-paragraph-lead-font-weight, var(--nl-paragraph-font-weight, inherit));line-height:var(--nl-paragraph-lead-line-height, var(--nl-paragraph-line-height, inherit));margin-block-end:var(--nl-paragraph-lead-margin-block-end, var(--nl-paragraph-margin-block-end, revert));margin-block-start:var(--nl-paragraph-lead-margin-block-start, var(--nl-paragraph-margin-block-start, revert))}.nl-paragraph__lead{font-weight:inherit}\n');
  },
  55864(e, n, a) {
   a.d(n, { A: () => U });
   var t = a(30758),
    r = a(86070);
   function i(e) {
    const { mdxAdmonitionTitle: n, rest: a } = (function (e) {
      const n = t.Children.toArray(e),
       a = n.find((e) => t.isValidElement(e) && 'mdxAdmonitionTitle' === e.type),
       i = n.filter((e) => e !== a),
       l = a?.props.children;
      return { mdxAdmonitionTitle: l, rest: i.length > 0 ? (0, r.jsx)(r.Fragment, { children: i }) : null };
     })(e.children),
     i = e.title ?? n;
    return { ...e, ...(i && { title: i }), children: a };
   }
   var l = a(13526),
    o = a(24440),
    d = a(81943);
   const s = 'admonition_raOx',
    c = 'admonitionHeading_LcOG',
    h = 'admonitionIcon_RjEs',
    g = 'admonitionContent_HpCY';
   function v({ type: e, className: n, children: a }) {
    return (0, r.jsx)('div', { className: (0, l.A)(d.G.common.admonition, d.G.common.admonitionType(e), s, n), children: a });
   }
   function m({ icon: e, title: n }) {
    return (0, r.jsxs)('div', { className: c, children: [(0, r.jsx)('span', { className: h, children: e }), n] });
   }
   function p({ children: e }) {
    return e ? (0, r.jsx)('div', { className: g, children: e }) : null;
   }
   function f(e) {
    const { type: n, icon: a, title: t, children: i, className: l } = e;
    return (0, r.jsxs)(v, { type: n, className: l, children: [t || a ? (0, r.jsx)(m, { title: t, icon: a }) : null, (0, r.jsx)(p, { children: i })] });
   }
   function u(e) {
    return (0, r.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, r.jsx)('path', { fillRule: 'evenodd', d: 'M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z' }) });
   }
   const b = { icon: (0, r.jsx)(u, {}), title: (0, r.jsx)(o.A, { id: 'theme.admonition.note', description: 'The default label used for the Note admonition (:::note)', children: 'note' }) };
   function x(e) {
    return (0, r.jsx)(f, { ...b, ...e, className: (0, l.A)('alert alert--secondary', e.className), children: e.children });
   }
   function j(e) {
    return (0, r.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, r.jsx)('path', { fillRule: 'evenodd', d: 'M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z' }) });
   }
   const y = { icon: (0, r.jsx)(j, {}), title: (0, r.jsx)(o.A, { id: 'theme.admonition.tip', description: 'The default label used for the Tip admonition (:::tip)', children: 'tip' }) };
   function A(e) {
    return (0, r.jsx)(f, { ...y, ...e, className: (0, l.A)('alert alert--success', e.className), children: e.children });
   }
   function w(e) {
    return (0, r.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, r.jsx)('path', { fillRule: 'evenodd', d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z' }) });
   }
   const k = { icon: (0, r.jsx)(w, {}), title: (0, r.jsx)(o.A, { id: 'theme.admonition.info', description: 'The default label used for the Info admonition (:::info)', children: 'info' }) };
   function N(e) {
    return (0, r.jsx)(f, { ...k, ...e, className: (0, l.A)('alert alert--info', e.className), children: e.children });
   }
   function z(e) {
    return (0, r.jsx)('svg', { viewBox: '0 0 16 16', ...e, children: (0, r.jsx)('path', { fillRule: 'evenodd', d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z' }) });
   }
   const _ = { icon: (0, r.jsx)(z, {}), title: (0, r.jsx)(o.A, { id: 'theme.admonition.warning', description: 'The default label used for the Warning admonition (:::warning)', children: 'warning' }) };
   function T(e) {
    return (0, r.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, r.jsx)('path', { fillRule: 'evenodd', d: 'M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z' }) });
   }
   const O = { icon: (0, r.jsx)(T, {}), title: (0, r.jsx)(o.A, { id: 'theme.admonition.danger', description: 'The default label used for the Danger admonition (:::danger)', children: 'danger' }) };
   const C = { icon: (0, r.jsx)(z, {}), title: (0, r.jsx)(o.A, { id: 'theme.admonition.caution', description: 'The default label used for the Caution admonition (:::caution)', children: 'caution' }) };
   const M = {
    ...{
     note: x,
     tip: A,
     info: N,
     warning: function (e) {
      return (0, r.jsx)(f, { ..._, ...e, className: (0, l.A)('alert alert--warning', e.className), children: e.children });
     },
     danger: function (e) {
      return (0, r.jsx)(f, { ...O, ...e, className: (0, l.A)('alert alert--danger', e.className), children: e.children });
     },
    },
    ...{
     secondary: (e) => (0, r.jsx)(x, { title: 'secondary', ...e }),
     important: (e) => (0, r.jsx)(N, { title: 'important', ...e }),
     success: (e) => (0, r.jsx)(A, { title: 'success', ...e }),
     caution: function (e) {
      return (0, r.jsx)(f, { ...C, ...e, className: (0, l.A)('alert alert--warning', e.className), children: e.children });
     },
    },
   };
   function U(e) {
    const n = i(e),
     a = ((t = n.type), M[t] || (console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`), M.info));
    var t;
    return (0, r.jsx)(a, { ...n });
   }
  },
  56421(e, n, a) {
   a.d(n, { D: () => t.D });
   var t = a(37168);
   a(30758);
   !(function (e, n) {
    void 0 === n && (n = {});
    var a = n.insertAt;
    if ('undefined' != typeof document) {
     var t = document.head || document.getElementsByTagName('head')[0],
      r = document.createElement('style');
     ((r.type = 'text/css'), 'top' === a && t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r), r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e)));
    }
   })('.nl-heading{break-after:avoid;break-inside:avoid}.nl-heading--level-1{color:var(--nl-heading-level-1-color, inherit);font-family:var(--nl-heading-level-1-font-family);font-size:var(--nl-heading-level-1-font-size, revert);font-weight:var(--nl-heading-level-1-font-weight, bold);line-height:var(--nl-heading-level-1-line-height);margin-block-end:var(--nl-heading-level-1-margin-block-end, revert);margin-block-start:var(--nl-heading-level-1-margin-block-start, revert)}.nl-heading--level-2{color:var(--nl-heading-level-2-color, inherit);font-family:var(--nl-heading-level-2-font-family);font-size:var(--nl-heading-level-2-font-size, revert);font-weight:var(--nl-heading-level-2-font-weight, bold);line-height:var(--nl-heading-level-2-line-height);margin-block-end:var(--nl-heading-level-2-margin-block-end, revert);margin-block-start:var(--nl-heading-level-2-margin-block-start, revert)}.nl-heading--level-3{color:var(--nl-heading-level-3-color, inherit);font-family:var(--nl-heading-level-3-font-family);font-size:var(--nl-heading-level-3-font-size, revert);font-weight:var(--nl-heading-level-3-font-weight, bold);line-height:var(--nl-heading-level-3-line-height);margin-block-end:var(--nl-heading-level-3-margin-block-end, revert);margin-block-start:var(--nl-heading-level-3-margin-block-start, revert)}.nl-heading--level-4{color:var(--nl-heading-level-4-color, inherit);font-family:var(--nl-heading-level-4-font-family);font-size:var(--nl-heading-level-4-font-size, revert);font-weight:var(--nl-heading-level-4-font-weight, bold);line-height:var(--nl-heading-level-4-line-height);margin-block-end:var(--nl-heading-level-4-margin-block-end, revert);margin-block-start:var(--nl-heading-level-4-margin-block-start, revert)}.nl-heading--level-5{color:var(--nl-heading-level-5-color, inherit);font-family:var(--nl-heading-level-5-font-family);font-size:var(--nl-heading-level-5-font-size, revert);font-weight:var(--nl-heading-level-5-font-weight, bold);line-height:var(--nl-heading-level-5-line-height);margin-block-end:var(--nl-heading-level-5-margin-block-end, revert);margin-block-start:var(--nl-heading-level-5-margin-block-start, revert)}.nl-heading--level-6{color:var(--nl-heading-level-6-color, inherit);font-family:var(--nl-heading-level-6-font-family);font-size:var(--nl-heading-level-6-font-size, revert);font-weight:var(--nl-heading-level-6-font-weight, bold);line-height:var(--nl-heading-level-6-line-height);margin-block-end:var(--nl-heading-level-6-margin-block-end, revert);margin-block-start:var(--nl-heading-level-6-margin-block-start, revert)}\n');
  },
  56561(e, n, a) {
   a.d(n, { f: () => h });
   var t = a(15540),
    r = a(69967),
    i = a(86070),
    l = a(13526),
    o = a(30758),
    d = ['children', 'className', 'purpose'];
   function s(e, n) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      a.push.apply(a, t));
    }
    return a;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var a = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? s(Object(a), !0).forEach(function (n) {
         (0, t.A)(e, n, a[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
        : s(Object(a)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
          });
    }
    return e;
   }
   var h = (0, o.forwardRef)(function (e, n) {
    var a = e.children,
     o = e.className,
     s = e.purpose,
     h = (0, r.A)(e, d);
    return (0, i.jsx)('p', c(c({ className: (0, l.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === s), o), ref: n }, h), {}, { children: 'lead' === s ? (0, i.jsx)('b', { className: 'nl-paragraph__lead', children: a }) : a }));
   });
   h.displayName = 'Paragraph';
  },
  58315(e, n, a) {
   a.d(n, { A: () => t });
   const t = (0, a(18652).A)('outline', 'mood-sad', 'MoodSad', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
  65454(e, n, a) {
   a.d(n, { A: () => f });
   var t = a(30758),
    r = a(13526),
    i = a(76906),
    l = a(41210),
    o = a(80366);
   const d = 'details_zu1M',
    s = 'isBrowser_ldlA',
    c = 'collapsibleContent_T_Y9';
   var h = a(86070);
   function g(e) {
    return !!e && ('SUMMARY' === e.tagName || g(e.parentElement));
   }
   function v(e, n) {
    return !!e && (e === n || v(e.parentElement, n));
   }
   function m({ summary: e, children: n, ...a }) {
    (0, i.A)().collectAnchor(a.id);
    const m = (0, l.A)(),
     p = (0, t.useRef)(null),
     { collapsed: f, setCollapsed: u } = (0, o.u)({ initialState: !a.open }),
     [b, x] = (0, t.useState)(a.open),
     j = t.isValidElement(e) ? e : (0, h.jsx)('summary', { children: e ?? 'Details' });
    return (0, h.jsxs)('details', {
     ...a,
     ref: p,
     open: b,
     'data-collapsed': f,
     className: (0, r.A)(d, m && s, a.className),
     onMouseDown: (e) => {
      g(e.target) && e.detail > 1 && e.preventDefault();
     },
     onClick: (e) => {
      e.stopPropagation();
      const n = e.target;
      g(n) && v(n, p.current) && (e.preventDefault(), f ? (u(!1), x(!0)) : u(!0));
     },
     children: [
      j,
      (0, h.jsx)(o.N, {
       lazy: !1,
       collapsed: f,
       onCollapseTransitionEnd: (e) => {
        (u(e), x(!e));
       },
       children: (0, h.jsx)('div', { className: c, children: n }),
      }),
     ],
    });
   }
   const p = 'details_tXwP';
   function f({ ...e }) {
    return (0, h.jsx)(m, { ...e, className: (0, r.A)('alert alert--info', p, e.className) });
   }
  },
  68986(e, n, a) {
   a.d(n, { A: () => s });
   a(30758);
   var t = a(13526),
    r = a(24440),
    i = a(92210);
   const l = 'tags_LNv3',
    o = 'tag_p0ch';
   var d = a(86070);
   function s({ tags: e }) {
    return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)('b', { children: (0, d.jsx)(r.A, { id: 'theme.tags.tagsListLabel', description: 'The label alongside a tag list', children: 'Tags:' }) }), (0, d.jsx)('ul', { className: (0, t.A)(l, 'padding--none', 'margin-left--sm'), children: e.map((e) => (0, d.jsx)('li', { className: o, children: (0, d.jsx)(i.A, { ...e }) }, e.permalink)) })] });
   }
  },
  73098(e, n, a) {
   a.d(n, { A: () => l });
   a(30758);
   var t = a(13526),
    r = a(41819),
    i = a(86070);
   function l(e) {
    const { permalink: n, title: a, subLabel: l, isNext: o } = e;
    return (0, i.jsxs)(r.A, { className: (0, t.A)('pagination-nav__link', o ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: n, children: [l && (0, i.jsx)('div', { className: 'pagination-nav__sublabel', children: l }), (0, i.jsx)('div', { className: 'pagination-nav__label', children: a })] });
   }
  },
  79889(e, n, a) {
   a.d(n, { K: () => g });
   var t = a(15540),
    r = a(69967),
    i = a(86070),
    l = a(30758),
    o = ['children'],
    d = ['dateTime'],
    s = ['value'];
   function c(e, n) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      a.push.apply(a, t));
    }
    return a;
   }
   function h(e) {
    for (var n = 1; n < arguments.length; n++) {
     var a = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(a), !0).forEach(function (n) {
         (0, t.A)(e, n, a[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
        : c(Object(a)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
          });
    }
    return e;
   }
   var g = (0, l.forwardRef)(function (e, n) {
    var a = e.children,
     t = (0, r.A)(e, o),
     l = (function () {
      for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
      return n.filter(Boolean).join(' ');
     })('nl-data-badge', e.className);
    if (
     (function (e) {
      return 'dateTime' in e;
     })(t)
    ) {
     var c = t.dateTime,
      g = (0, r.A)(t, d);
     return (0, i.jsx)('time', h(h({}, g), {}, { dateTime: c, className: l, ref: n, children: a }));
    }
    if (
     (function (e) {
      return 'value' in e;
     })(t)
    ) {
     var v = t.value,
      m = (0, r.A)(t, s);
     return (0, i.jsx)('data', h(h({}, m), {}, { value: v, className: l, ref: n, children: a }));
    }
    return (0, i.jsx)('span', h(h({}, t), {}, { className: l, ref: n, children: a }));
   });
   g.displayName = 'DataBadge';
   !(function (e, n) {
    void 0 === n && (n = {});
    var a = n.insertAt;
    if ('undefined' != typeof document) {
     var t = document.head || document.getElementsByTagName('head')[0],
      r = document.createElement('style');
     ((r.type = 'text/css'), 'top' === a && t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r), r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e)));
    }
   })('.nl-data-badge{background-color:var(--nl-data-badge-background-color);border-color:var(--nl-data-badge-border-color, currentColor);border-radius:var(--nl-data-badge-border-radius, 0);border-style:solid;border-width:var(--nl-data-badge-border-width, 1px);box-sizing:border-box;color:var(--nl-data-badge-color);display:inline-block;font-family:var(--nl-data-badge-font-family);font-size:var(--nl-data-badge-font-size);font-weight:var(--nl-data-badge-font-weight);line-height:var(--nl-data-badge-line-height);max-block-size:max-content;max-inline-size:max-content;min-block-size:var(--nl-data-badge-min-block-size);min-inline-size:var(--nl-data-badge-min-inline-size);padding-block:var(--nl-data-badge-padding-block);padding-inline:var(--nl-data-badge-padding-inline);text-decoration:none}@media screen and (forced-colors: active){.nl-data-badge{border-color:currentColor;border-width:min(var(--nl-data-badge-border-width, 1px),1px)}}\n');
  },
  87580(e, n, a) {
   a.d(n, { $S: () => t, d1: () => r });
   a(27331);
   function t(...e) {
    return a(79113).$S(...e);
   }
   function r(...e) {
    return a(79113).d1(...e);
   }
  },
  92210(e, n, a) {
   a.d(n, { A: () => s });
   a(30758);
   var t = a(13526),
    r = a(41819);
   const i = 'tag_eJ8H',
    l = 'tagRegular_aRNb',
    o = 'tagWithCount_DbHZ';
   var d = a(86070);
   function s({ permalink: e, label: n, count: a, description: s }) {
    return (0, d.jsxs)(r.A, { rel: 'tag', href: e, title: s, className: (0, t.A)(i, a ? o : l), children: [n, a && (0, d.jsx)('span', { children: a })] });
   }
  },
 },
]);
