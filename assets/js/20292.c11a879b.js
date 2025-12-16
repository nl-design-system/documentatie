'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [20292, 97911],
 {
  79250: (t, e, n) => {
   function r(t) {
    var e,
     n,
     i = '';
    if ('string' == typeof t || 'number' == typeof t) i += t;
    else if ('object' == typeof t)
     if (Array.isArray(t)) {
      var a = t.length;
      for (e = 0; e < a; e++) t[e] && (n = r(t[e])) && (i && (i += ' '), (i += n));
     } else for (n in t) t[n] && (i && (i += ' '), (i += n));
    return i;
   }
   function i() {
    for (var t, e, n = 0, i = '', a = arguments.length; n < a; n++) (t = arguments[n]) && (e = r(t)) && (i && (i += ' '), (i += e));
    return i;
   }
   n.d(e, { c: () => i });
  },
  97911: (t, e, n) => {
   n.r(e), n.d(e, { utrecht_pagination: () => a });
   var r = n(72190),
    i = n(79250);
   const a = class {
    constructor(t) {
     (0, r.r)(this, t), (this.links = void 0), (this.next = void 0), (this.prev = void 0), (this.currentIndex = void 0);
    }
    render() {
     const { currentIndex: t } = this,
      e = 'string' == typeof this.links ? JSON.parse(this.links) : null,
      n = 'string' == typeof this.next ? JSON.parse(this.next) : null,
      a = 'string' == typeof this.prev ? JSON.parse(this.next) : null,
      o = ({ disabled: t = !1, href: e = '', rel: n = null, textContent: a = '', title: o = '' }) => (t ? (0, r.h)('span', { class: (0, i.c)('utrecht-pagination__relative-link', t && 'utrecht-pagination__relative-link--disabled', 'next' === n && 'utrecht-pagination__relative-link--next', 'prev' === n && 'utrecht-pagination__relative-link--prev'), 'aria-label': o || null }, a) : (0, r.h)('a', { href: e, class: (0, i.c)('utrecht-pagination__relative-link', t && 'utrecht-pagination__relative-link--disabled', 'next' === n && 'utrecht-pagination__relative-link--next', 'prev' === n && 'utrecht-pagination__relative-link--prev'), rel: n, 'aria-label': o || null }, a));
     return (0, r.h)(
      'nav',
      { key: 'b4a4a32686432561343cff76a167870b1c1cedae', class: 'utrecht-pagination' },
      (0, r.h)('span', { key: '2beeec32c3cb90d03239221b86b0e049f9ca3795', class: 'utrecht-pagination__before' }, a ? o(Object.assign(Object.assign({}, a), { rel: 'prev', textContent: 'Vorige' })) : ''),
      (0, r.h)(
       'span',
       { key: 'd4cec0ad6d9b328c4088a0b96a77153020a59bcf', role: 'group', class: 'utrecht-pagination__pages' },
       e
        .sort((t, e) => (t.index === e.index ? 0 : t.index > e.index ? 1 : -1))
        .map((e, n) => {
         const r = 'number' == typeof e.index ? e.index : n;
         return Object.assign({ index: r, current: 'number' == typeof t && r === t, rel: 'number' == typeof t ? (r === t + 1 ? 'next' : r === t - 1 ? 'prev' : null) : null, textContent: e.index || r }, e);
        })
        .map((t) => (({ current: t = !1, href: e = '', rel: n = null, textContent: a = '' }) => (0, r.h)('a', { key: '9e8b60917631d35e39d7fe06a54f2c9d0dbd6375', class: (0, i.c)('utrecht-pagination__page-link', t && 'utrecht-pagination__page-link--current'), href: e, 'aria-current': t ? 'true' : null, rel: n }, a))(t)),
      ),
      (0, r.h)('span', { key: '7d488456bd2946294a6fae8edda35969896ac69b', class: 'utrecht-pagination__before' }, n ? o(Object.assign(Object.assign({}, n), { rel: 'next', textContent: 'Volgende' })) : ''),
     );
    }
   };
   a.style = '.utrecht-pagination__page-link:focus-visible,.utrecht-pagination__relative-link:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-pagination{font-family:var(--utrecht-pagination-font-family, var(--utrecht-document-font-family));font-size:var(--utrecht-pagination-font-size, var(--utrecht-document-font-family));margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-start, 0))}.utrecht-pagination--distanced{--utrecht-space-around:1}.utrecht-pagination__relative-link{background-color:var(--utrecht-pagination-relative-link-background-color);border-color:var(--utrecht-pagination-relative-link-border-color);border-radius:var(--utrecht-pagination-relative-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-relative-link-border-width, 0);color:var(--utrecht-pagination-relative-link-color);display:inline-block;font-weight:var(--utrecht-pagination-relative-link-font-weight);padding-block-end:var(--utrecht-pagination-relative-link-padding-block-end);padding-block-start:var(--utrecht-pagination-relative-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-relative-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-relative-link-padding-inline-start);text-decoration:var(--utrecht-pagination-relative-link-text-decoration);text-transform:var(--utrecht-pagination-relative-link-text-transform)}.utrecht-pagination__relative-link--next{margin-inline-start:var(--utrecht-pagination-relative-link-distanced-margin-inline-start)}.utrecht-pagination__relative-link--prev{margin-inline-end:var(--utrecht-pagination-relative-link-distanced-margin-inline-end)}.utrecht-pagination__relative-link--disabled{background-color:var(--utrecht-pagination-relative-link-disabled-background-color, var(--utrecht-pagination-relative-link-background-color));color:var(--utrecht-pagination-relative-link-disabled-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__relative-link--hover,.utrecht-pagination__relative-link:hover{background-color:var(--utrecht-pagination-relative-link-hover-background-color, var(--utrecht-pagination-relative-link-background-color));border-color:var(--utrecht-pagination-relative-link-hover-border-color, var(--utrecht-pagination-relative-link-border-color));color:var(--utrecht-pagination-relative-link-hover-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__page-link{background-color:var(--utrecht-pagination-page-link-background-color);border-color:var(--utrecht-pagination-page-link-border-color, 0);border-radius:var(--utrecht-pagination-page-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-page-link-border-width);color:var(--utrecht-pagination-page-link-color);display:inline-block;font-weight:var(--utrecht-pagination-page-link-font-weight);padding-block-end:var(--utrecht-pagination-page-link-padding-block-end);padding-block-start:var(--utrecht-pagination-page-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-page-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-page-link-padding-inline-start);text-decoration:var(--utrecht-pagination-page-link-text-decoration)}.utrecht-pagination__page-link--current{--utrecht-pagination-page-link-background-color:var(--utrecht-pagination-page-link-current-background-color);--utrecht-pagination-page-link-border-color:var(--utrecht-pagination-page-link-current-border-color);--utrecht-pagination-page-link-color:var(--utrecht-pagination-page-link-current-color)}.utrecht-pagination__page-link~.utrecht-pagination__page-link{margin-inline-start:var(--utrecht-pagination-page-link-distanced-margin-inline-start)}.utrecht-pagination__page-link--hover,.utrecht-pagination__page-link:hover{background-color:var(--utrecht-pagination-page-link-hover-background-color, var(--utrecht-pagination-page-link-background-color));border-color:var(--utrecht-pagination-page-link-hover-border-color, var(--utrecht-pagination-page-link-border-color));color:var(--utrecht-pagination-page-link-hover-color, var(--utrecht-pagination-page-link-color))}.utrecht-pagination__page-link:focus-visible,.utrecht-pagination__relative-link:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}:host{display:block}:host([hidden]){display:none !important}';
  },
 },
]);
