'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [38129, 60510],
 {
  38129(t, n, e) {
   (e.r(n), e.d(n, { utrecht_pagination: () => r }));
   var a = e(29731),
    i = e(70013);
   const r = class {
    constructor(t) {
     ((0, a.r)(this, t), (this.links = void 0), (this.next = void 0), (this.prev = void 0), (this.currentIndex = void 0));
    }
    render() {
     const { currentIndex: t } = this,
      n = 'string' == typeof this.links ? JSON.parse(this.links) : null,
      e = 'string' == typeof this.next ? JSON.parse(this.next) : null,
      r = 'string' == typeof this.prev ? JSON.parse(this.next) : null,
      o = ({ disabled: t = !1, href: n = '', rel: e = null, textContent: r = '', title: o = '' }) => (t ? (0, a.h)('span', { class: (0, i.c)('utrecht-pagination__relative-link', t && 'utrecht-pagination__relative-link--disabled', 'next' === e && 'utrecht-pagination__relative-link--next', 'prev' === e && 'utrecht-pagination__relative-link--prev'), 'aria-label': o || null }, r) : (0, a.h)('a', { href: n, class: (0, i.c)('utrecht-pagination__relative-link', t && 'utrecht-pagination__relative-link--disabled', 'next' === e && 'utrecht-pagination__relative-link--next', 'prev' === e && 'utrecht-pagination__relative-link--prev'), rel: e, 'aria-label': o || null }, r));
     return (0, a.h)(
      'nav',
      { key: '315367b17bd399faf84ddf036329a974cac086e4', class: 'utrecht-pagination' },
      (0, a.h)('span', { key: '4375ce5fc73dcb37267394af1782ef98a58b1576', class: 'utrecht-pagination__before' }, r ? o(Object.assign(Object.assign({}, r), { rel: 'prev', textContent: 'Vorige' })) : ''),
      (0, a.h)(
       'span',
       { key: '96af77d696665c859a0acc54ea62fd074b09e3d4', role: 'group', class: 'utrecht-pagination__pages' },
       n
        .sort((t, n) => (t.index === n.index ? 0 : t.index > n.index ? 1 : -1))
        .map((n, e) => {
         const a = 'number' == typeof n.index ? n.index : e;
         return Object.assign({ index: a, current: 'number' == typeof t && a === t, rel: 'number' == typeof t ? (a === t + 1 ? 'next' : a === t - 1 ? 'prev' : null) : null, textContent: n.index || a }, n);
        })
        .map((t) => (({ current: t = !1, href: n = '', rel: e = null, textContent: r = '' }) => (0, a.h)('a', { key: '983c9ba557ee993c74664c33b9f6c920f19fa2c4', class: (0, i.c)('utrecht-pagination__page-link', t && 'utrecht-pagination__page-link--current'), href: n, 'aria-current': t ? 'true' : null, rel: e }, r))(t)),
      ),
      (0, a.h)('span', { key: 'b7241996313f3193504c7b349207d9ac491dedb0', class: 'utrecht-pagination__before' }, e ? o(Object.assign(Object.assign({}, e), { rel: 'next', textContent: 'Volgende' })) : ''),
     );
    }
   };
   r.style = '.utrecht-pagination{font-family:var(--utrecht-pagination-font-family, var(--utrecht-document-font-family));font-size:var(--utrecht-pagination-font-size, var(--utrecht-document-font-family));line-height:var(--utrecht-pagination-line-height, var(--utrecht-document-line-height));margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-start, 0))}.utrecht-pagination--distanced{--utrecht-space-around:1}.utrecht-pagination__relative-link{background-color:var(--utrecht-pagination-relative-link-background-color);border-color:var(--utrecht-pagination-relative-link-border-color);border-radius:var(--utrecht-pagination-relative-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-relative-link-border-width, 0);color:var(--utrecht-pagination-relative-link-color);display:inline-block;font-weight:var(--utrecht-pagination-relative-link-font-weight);padding-block-end:var(--utrecht-pagination-relative-link-padding-block-end);padding-block-start:var(--utrecht-pagination-relative-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-relative-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-relative-link-padding-inline-start);text-decoration:var(--utrecht-pagination-relative-link-text-decoration);text-transform:var(--utrecht-pagination-relative-link-text-transform)}.utrecht-pagination__relative-link--next{margin-inline-start:var(--utrecht-pagination-relative-link-distanced-margin-inline-start)}.utrecht-pagination__relative-link--prev{margin-inline-end:var(--utrecht-pagination-relative-link-distanced-margin-inline-end)}.utrecht-pagination__relative-link--disabled{background-color:var(--utrecht-pagination-relative-link-disabled-background-color, var(--utrecht-pagination-relative-link-background-color));color:var(--utrecht-pagination-relative-link-disabled-color, var(--utrecht-pagination-relative-link-color));text-decoration:var(--utrecht-pagination-relative-link-disabled-text-decoration, var(--utrecht-pagination-relative-link-text-decoration))}.utrecht-pagination__relative-link--hover,.utrecht-pagination__relative-link:hover{background-color:var(--utrecht-pagination-relative-link-hover-background-color, var(--utrecht-pagination-relative-link-background-color));border-color:var(--utrecht-pagination-relative-link-hover-border-color, var(--utrecht-pagination-relative-link-border-color));color:var(--utrecht-pagination-relative-link-hover-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__page-link{background-color:var(--utrecht-pagination-page-link-background-color);border-color:var(--utrecht-pagination-page-link-border-color, 0);border-radius:var(--utrecht-pagination-page-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-page-link-border-width);color:var(--utrecht-pagination-page-link-color);display:inline-block;font-weight:var(--utrecht-pagination-page-link-font-weight);padding-block-end:var(--utrecht-pagination-page-link-padding-block-end);padding-block-start:var(--utrecht-pagination-page-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-page-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-page-link-padding-inline-start);text-decoration:var(--utrecht-pagination-page-link-text-decoration)}.utrecht-pagination__page-link--current{--utrecht-pagination-page-link-background-color:var(--utrecht-pagination-page-link-current-background-color);--utrecht-pagination-page-link-border-color:var(--utrecht-pagination-page-link-current-border-color);--utrecht-pagination-page-link-color:var(--utrecht-pagination-page-link-current-color);--utrecht-pagination-page-link-text-decoration:var(--utrecht-pagination-page-link-current-text-decoration)}.utrecht-pagination__page-link~.utrecht-pagination__page-link{margin-inline-start:var(--utrecht-pagination-page-link-distanced-margin-inline-start)}.utrecht-pagination__page-link--hover,.utrecht-pagination__page-link:any-link:hover{background-color:var(--utrecht-pagination-page-link-hover-background-color, var(--utrecht-pagination-page-link-background-color));border-color:var(--utrecht-pagination-page-link-hover-border-color, var(--utrecht-pagination-page-link-border-color));color:var(--utrecht-pagination-page-link-hover-color, var(--utrecht-pagination-page-link-color))}.utrecht-pagination__page-link:any-link:focus,.utrecht-pagination__relative-link:any-link:focus{background-color:var(--utrecht-pagination-relative-link-focus-background-color, transparent);color:var(--utrecht-pagination-relative-link-focus-color)}.utrecht-pagination__page-link:any-link:focus-visible,.utrecht-pagination__relative-link:any-link:focus-visible{background-color:var(--utrecht-pagination-relative-link-focus-visible-background-color, transparent);color:var(--utrecht-pagination-relative-link-focus-visible-color);--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}:host{display:block}:host([hidden]){display:none !important}';
  },
  70013(t, n, e) {
   function a(t) {
    var n,
     e,
     i = '';
    if ('string' == typeof t || 'number' == typeof t) i += t;
    else if ('object' == typeof t)
     if (Array.isArray(t)) {
      var r = t.length;
      for (n = 0; n < r; n++) t[n] && (e = a(t[n])) && (i && (i += ' '), (i += e));
     } else for (e in t) t[e] && (i && (i += ' '), (i += e));
    return i;
   }
   function i() {
    for (var t, n, e = 0, i = '', r = arguments.length; e < r; e++) (t = arguments[e]) && (n = a(t)) && (i && (i += ' '), (i += n));
    return i;
   }
   e.d(n, { c: () => i });
  },
 },
]);
