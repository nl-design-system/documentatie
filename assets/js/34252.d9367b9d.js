/*! For license information please see 34252.d9367b9d.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [34252],
 {
  4077(e, n, t) {
   t.d(n, { A: () => a });
   const a = (0, t(18652).A)('outline', 'mood-happy', 'MoodHappy', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  19342(e, n, t) {
   t.d(n, { A: () => B });
   var a = t(30758),
    i = t(86070);
   function l(e) {
    const { mdxAdmonitionTitle: n, rest: t } = (function (e) {
      const n = a.Children.toArray(e),
       t = n.find((e) => a.isValidElement(e) && 'mdxAdmonitionTitle' === e.type),
       l = n.filter((e) => e !== t),
       r = t?.props.children;
      return { mdxAdmonitionTitle: r, rest: l.length > 0 ? (0, i.jsx)(i.Fragment, { children: l }) : null };
     })(e.children),
     l = e.title ?? n;
    return { ...e, ...(l && { title: l }), children: t };
   }
   var r = t(13526),
    o = t(73285),
    s = t(77128);
   const d = 'admonition_AJWH',
    c = 'admonitionHeading_Dw5e',
    h = 'admonitionIcon__hiH',
    g = 'admonitionContent_LrSH';
   function v({ type: e, className: n, children: t }) {
    return (0, i.jsx)('div', { className: (0, r.A)(s.G.common.admonition, s.G.common.admonitionType(e), d, n), children: t });
   }
   function m({ icon: e, title: n }) {
    return (0, i.jsxs)('div', { className: c, children: [(0, i.jsx)('span', { className: h, children: e }), n] });
   }
   function p({ children: e }) {
    return e ? (0, i.jsx)('div', { className: g, children: e }) : null;
   }
   function f(e) {
    const { type: n, icon: t, title: a, children: l, className: r } = e;
    return (0, i.jsxs)(v, { type: n, className: r, children: [a || t ? (0, i.jsx)(m, { title: a, icon: t }) : null, (0, i.jsx)(p, { children: l })] });
   }
   function u(e) {
    return (0, i.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, i.jsx)('path', { fillRule: 'evenodd', d: 'M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z' }) });
   }
   const x = { icon: (0, i.jsx)(u, {}), title: (0, i.jsx)(o.A, { id: 'theme.admonition.note', description: 'The default label used for the Note admonition (:::note)', children: 'note' }) };
   function b(e) {
    return (0, i.jsx)(f, { ...x, ...e, className: (0, r.A)('alert alert--secondary', e.className), children: e.children });
   }
   function j(e) {
    return (0, i.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, i.jsx)('path', { fillRule: 'evenodd', d: 'M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z' }) });
   }
   const y = { icon: (0, i.jsx)(j, {}), title: (0, i.jsx)(o.A, { id: 'theme.admonition.tip', description: 'The default label used for the Tip admonition (:::tip)', children: 'tip' }) };
   function A(e) {
    return (0, i.jsx)(f, { ...y, ...e, className: (0, r.A)('alert alert--success', e.className), children: e.children });
   }
   function k(e) {
    return (0, i.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, i.jsx)('path', { fillRule: 'evenodd', d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z' }) });
   }
   const w = { icon: (0, i.jsx)(k, {}), title: (0, i.jsx)(o.A, { id: 'theme.admonition.info', description: 'The default label used for the Info admonition (:::info)', children: 'info' }) };
   function N(e) {
    return (0, i.jsx)(f, { ...w, ...e, className: (0, r.A)('alert alert--info', e.className), children: e.children });
   }
   function _(e) {
    return (0, i.jsx)('svg', { viewBox: '0 0 16 16', ...e, children: (0, i.jsx)('path', { fillRule: 'evenodd', d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z' }) });
   }
   const z = { icon: (0, i.jsx)(_, {}), title: (0, i.jsx)(o.A, { id: 'theme.admonition.warning', description: 'The default label used for the Warning admonition (:::warning)', children: 'warning' }) };
   function T(e) {
    return (0, i.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, i.jsx)('path', { fillRule: 'evenodd', d: 'M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z' }) });
   }
   const C = { icon: (0, i.jsx)(T, {}), title: (0, i.jsx)(o.A, { id: 'theme.admonition.danger', description: 'The default label used for the Danger admonition (:::danger)', children: 'danger' }) };
   const M = { icon: (0, i.jsx)(_, {}), title: (0, i.jsx)(o.A, { id: 'theme.admonition.caution', description: 'The default label used for the Caution admonition (:::caution)', children: 'caution' }) };
   const U = {
    ...{
     note: b,
     tip: A,
     info: N,
     warning: function (e) {
      return (0, i.jsx)(f, { ...z, ...e, className: (0, r.A)('alert alert--warning', e.className), children: e.children });
     },
     danger: function (e) {
      return (0, i.jsx)(f, { ...C, ...e, className: (0, r.A)('alert alert--danger', e.className), children: e.children });
     },
    },
    ...{
     secondary: (e) => (0, i.jsx)(b, { title: 'secondary', ...e }),
     important: (e) => (0, i.jsx)(N, { title: 'important', ...e }),
     success: (e) => (0, i.jsx)(A, { title: 'success', ...e }),
     caution: function (e) {
      return (0, i.jsx)(f, { ...M, ...e, className: (0, r.A)('alert alert--warning', e.className), children: e.children });
     },
    },
   };
   function B(e) {
    const n = l(e),
     t = ((a = n.type), U[a] || (console.warn(`No admonition component found for admonition type "${a}". Using Info as fallback.`), U.info));
    var a;
    return (0, i.jsx)(t, { ...n });
   }
  },
  24402(e, n, t) {
   t.d(n, { A: () => r });
   t(30758);
   var a = t(13526),
    i = t(54705),
    l = t(86070);
   function r(e) {
    const { permalink: n, title: t, subLabel: r, isNext: o } = e;
    return (0, l.jsxs)(i.A, { className: (0, a.A)('pagination-nav__link', o ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: n, children: [r && (0, l.jsx)('div', { className: 'pagination-nav__sublabel', children: r }), (0, l.jsx)('div', { className: 'pagination-nav__label', children: t })] });
   }
  },
  32325(e, n, t) {
   t.d(n, { i: () => i });
   var a = t(44941);
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
  48004(e, n, t) {
   t.d(n, { f: () => a.f });
   var a = t(56561);
   (t(86070), t(30758));
   !(function (e, n) {
    void 0 === n && (n = {});
    var t = n.insertAt;
    if ('undefined' != typeof document) {
     var a = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style');
     ((i.type = 'text/css'), 'top' === t && a.firstChild ? a.insertBefore(i, a.firstChild) : a.appendChild(i), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e)));
    }
   })('.nl-paragraph{color:var(--nl-paragraph-color, inherit);font-family:var(--nl-paragraph-font-family, inherit);font-size:var(--nl-paragraph-font-size, inherit);font-weight:var(--nl-paragraph-font-weight, inherit);line-height:var(--nl-paragraph-line-height, inherit);margin-block-end:var(--nl-paragraph-margin-block-end, revert);margin-block-start:var(--nl-paragraph-margin-block-start, revert)}.nl-paragraph--lead{font-size:var(--nl-paragraph-lead-font-size, var(--nl-paragraph-font-size, inherit));font-weight:var(--nl-paragraph-lead-font-weight, var(--nl-paragraph-font-weight, inherit));line-height:var(--nl-paragraph-lead-line-height, var(--nl-paragraph-line-height, inherit));margin-block-end:var(--nl-paragraph-lead-margin-block-end, var(--nl-paragraph-margin-block-end, revert));margin-block-start:var(--nl-paragraph-lead-margin-block-start, var(--nl-paragraph-margin-block-start, revert))}.nl-paragraph__lead{font-weight:inherit}\n');
  },
  56421(e, n, t) {
   t.d(n, { D: () => a.D });
   var a = t(37168);
   t(30758);
   !(function (e, n) {
    void 0 === n && (n = {});
    var t = n.insertAt;
    if ('undefined' != typeof document) {
     var a = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style');
     ((i.type = 'text/css'), 'top' === t && a.firstChild ? a.insertBefore(i, a.firstChild) : a.appendChild(i), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e)));
    }
   })('.nl-heading{break-after:avoid;break-inside:avoid}.nl-heading--level-1{color:var(--nl-heading-level-1-color, inherit);font-family:var(--nl-heading-level-1-font-family);font-size:var(--nl-heading-level-1-font-size, revert);font-weight:var(--nl-heading-level-1-font-weight, bold);line-height:var(--nl-heading-level-1-line-height);margin-block-end:var(--nl-heading-level-1-margin-block-end, revert);margin-block-start:var(--nl-heading-level-1-margin-block-start, revert)}.nl-heading--level-2{color:var(--nl-heading-level-2-color, inherit);font-family:var(--nl-heading-level-2-font-family);font-size:var(--nl-heading-level-2-font-size, revert);font-weight:var(--nl-heading-level-2-font-weight, bold);line-height:var(--nl-heading-level-2-line-height);margin-block-end:var(--nl-heading-level-2-margin-block-end, revert);margin-block-start:var(--nl-heading-level-2-margin-block-start, revert)}.nl-heading--level-3{color:var(--nl-heading-level-3-color, inherit);font-family:var(--nl-heading-level-3-font-family);font-size:var(--nl-heading-level-3-font-size, revert);font-weight:var(--nl-heading-level-3-font-weight, bold);line-height:var(--nl-heading-level-3-line-height);margin-block-end:var(--nl-heading-level-3-margin-block-end, revert);margin-block-start:var(--nl-heading-level-3-margin-block-start, revert)}.nl-heading--level-4{color:var(--nl-heading-level-4-color, inherit);font-family:var(--nl-heading-level-4-font-family);font-size:var(--nl-heading-level-4-font-size, revert);font-weight:var(--nl-heading-level-4-font-weight, bold);line-height:var(--nl-heading-level-4-line-height);margin-block-end:var(--nl-heading-level-4-margin-block-end, revert);margin-block-start:var(--nl-heading-level-4-margin-block-start, revert)}.nl-heading--level-5{color:var(--nl-heading-level-5-color, inherit);font-family:var(--nl-heading-level-5-font-family);font-size:var(--nl-heading-level-5-font-size, revert);font-weight:var(--nl-heading-level-5-font-weight, bold);line-height:var(--nl-heading-level-5-line-height);margin-block-end:var(--nl-heading-level-5-margin-block-end, revert);margin-block-start:var(--nl-heading-level-5-margin-block-start, revert)}.nl-heading--level-6{color:var(--nl-heading-level-6-color, inherit);font-family:var(--nl-heading-level-6-font-family);font-size:var(--nl-heading-level-6-font-size, revert);font-weight:var(--nl-heading-level-6-font-weight, bold);line-height:var(--nl-heading-level-6-line-height);margin-block-end:var(--nl-heading-level-6-margin-block-end, revert);margin-block-start:var(--nl-heading-level-6-margin-block-start, revert)}\n');
  },
  56561(e, n, t) {
   t.d(n, { f: () => h });
   var a = t(15540),
    i = t(69967),
    l = t(86070),
    r = t(13526),
    o = t(30758),
    s = ['children', 'className', 'purpose'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     (n &&
      (a = a.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, a));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, a.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var h = (0, o.forwardRef)(function (e, n) {
    var t = e.children,
     o = e.className,
     d = e.purpose,
     h = (0, i.A)(e, s);
    return (0, l.jsx)('p', c(c({ className: (0, r.$)('nl-paragraph', (0, a.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, h), {}, { children: 'lead' === d ? (0, l.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   h.displayName = 'Paragraph';
  },
  58302(e, n, t) {
   t.d(n, { A: () => u });
   t(30758);
   var a = t(13526),
    i = t(73285),
    l = t(77128),
    r = t(54705);
   const o = 'iconEdit_MhoG';
   var s = t(86070);
   function d({ className: e, ...n }) {
    return (0, s.jsx)('svg', { fill: 'currentColor', height: '20', width: '20', viewBox: '0 0 40 40', className: (0, a.A)(o, e), 'aria-hidden': 'true', ...n, children: (0, s.jsx)('g', { children: (0, s.jsx)('path', { d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z' }) }) });
   }
   function c({ editUrl: e }) {
    return (0, s.jsxs)(r.A, { to: e, className: l.G.common.editThisPage, children: [(0, s.jsx)(d, {}), (0, s.jsx)(i.A, { id: 'theme.common.editThisPage', description: 'The link label to edit the current page', children: 'Edit this page' })] });
   }
   var h = t(32325);
   function g({ lastUpdatedAt: e }) {
    const n = new Date(e),
     t = (0, h.i)({ day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(n);
    return (0, s.jsx)(i.A, { id: 'theme.lastUpdated.atDate', description: 'The words used to describe on which date a page has been last updated', values: { date: (0, s.jsx)('b', { children: (0, s.jsx)('time', { dateTime: n.toISOString(), itemProp: 'dateModified', children: t }) }) }, children: ' on {date}' });
   }
   function v({ lastUpdatedBy: e }) {
    return (0, s.jsx)(i.A, { id: 'theme.lastUpdated.byUser', description: 'The words used to describe by who the page has been last updated', values: { user: (0, s.jsx)('b', { children: e }) }, children: ' by {user}' });
   }
   function m({ lastUpdatedAt: e, lastUpdatedBy: n }) {
    return (0, s.jsxs)('span', { className: l.G.common.lastUpdated, children: [(0, s.jsx)(i.A, { id: 'theme.lastUpdated.lastUpdatedAtBy', description: 'The sentence used to display when a page has been last updated, and by who', values: { atDate: e ? (0, s.jsx)(g, { lastUpdatedAt: e }) : '', byUser: n ? (0, s.jsx)(v, { lastUpdatedBy: n }) : '' }, children: 'Last updated{atDate}{byUser}' }), !1] });
   }
   const p = 'lastUpdated_gXYV',
    f = 'noPrint_zE3s';
   function u({ className: e, editUrl: n, lastUpdatedAt: t, lastUpdatedBy: i }) {
    return (0, s.jsxs)('div', { className: (0, a.A)('row', e), children: [(0, s.jsx)('div', { className: (0, a.A)('col', f), children: n && (0, s.jsx)(c, { editUrl: n }) }), (0, s.jsx)('div', { className: (0, a.A)('col', p), children: (t || i) && (0, s.jsx)(m, { lastUpdatedAt: t, lastUpdatedBy: i }) })] });
   }
  },
  58315(e, n, t) {
   t.d(n, { A: () => a });
   const a = (0, t(18652).A)('outline', 'mood-sad', 'MoodSad', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
  60691(e, n, t) {
   t.d(n, { $S: () => a, d1: () => i });
   t(44941);
   function a(...e) {
    return t(3061).$S(...e);
   }
   function i(...e) {
    return t(3061).d1(...e);
   }
  },
  74804(e, n, t) {
   t.d(n, { A: () => d });
   t(30758);
   var a = t(13526),
    i = t(54705);
   const l = 'tag_IdeM',
    r = 'tagRegular_Nqw0',
    o = 'tagWithCount__Lxm';
   var s = t(86070);
   function d({ permalink: e, label: n, count: t, description: d }) {
    return (0, s.jsxs)(i.A, { rel: 'tag', href: e, title: d, className: (0, a.A)(l, t ? o : r), children: [n, t && (0, s.jsx)('span', { children: t })] });
   }
  },
  84675(e, n, t) {
   t.d(n, { A: () => f });
   var a = t(30758),
    i = t(13526),
    l = t(37859),
    r = t(90816),
    o = t(34891);
   const s = 'details_oovl',
    d = 'isBrowser_TyxL',
    c = 'collapsibleContent_leOs';
   var h = t(86070);
   function g(e) {
    return !!e && ('SUMMARY' === e.tagName || g(e.parentElement));
   }
   function v(e, n) {
    return !!e && (e === n || v(e.parentElement, n));
   }
   function m({ summary: e, children: n, ...t }) {
    (0, l.A)().collectAnchor(t.id);
    const m = (0, r.A)(),
     p = (0, a.useRef)(null),
     { collapsed: f, setCollapsed: u } = (0, o.u)({ initialState: !t.open }),
     [x, b] = (0, a.useState)(t.open),
     j = a.isValidElement(e) ? e : (0, h.jsx)('summary', { children: e ?? 'Details' });
    return (0, h.jsxs)('details', {
     ...t,
     ref: p,
     open: x,
     'data-collapsed': f,
     className: (0, i.A)(s, m && d, t.className),
     onMouseDown: (e) => {
      g(e.target) && e.detail > 1 && e.preventDefault();
     },
     onClick: (e) => {
      e.stopPropagation();
      const n = e.target;
      g(n) && v(n, p.current) && (e.preventDefault(), f ? (u(!1), b(!0)) : u(!0));
     },
     children: [
      j,
      (0, h.jsx)(o.N, {
       lazy: !1,
       collapsed: f,
       onCollapseTransitionEnd: (e) => {
        (u(e), b(!e));
       },
       children: (0, h.jsx)('div', { className: c, children: n }),
      }),
     ],
    });
   }
   const p = 'details_pVyB';
   function f({ ...e }) {
    return (0, h.jsx)(m, { ...e, className: (0, i.A)('alert alert--info', p, e.className) });
   }
  },
  90636(e, n, t) {
   t.d(n, { A: () => d });
   t(30758);
   var a = t(13526),
    i = t(73285),
    l = t(74804);
   const r = 'tags_QBFb',
    o = 'tag_aZoc';
   var s = t(86070);
   function d({ tags: e }) {
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('b', { children: (0, s.jsx)(i.A, { id: 'theme.tags.tagsListLabel', description: 'The label alongside a tag list', children: 'Tags:' }) }), (0, s.jsx)('ul', { className: (0, a.A)(r, 'padding--none', 'margin-left--sm'), children: e.map((e) => (0, s.jsx)('li', { className: o, children: (0, s.jsx)(l.A, { ...e }) }, e.permalink)) })] });
   }
  },
 },
]);
