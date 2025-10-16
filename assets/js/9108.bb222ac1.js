'use strict';
exports.id = 9108;
exports.ids = [9108];
exports.modules = {
 /***/ 26221: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ c: () => /* binding */ clsx,
   /* harmony export */
  });
  function r(e) {
   var t,
    f,
    n = '';
   if ('string' == typeof e || 'number' == typeof e) n += e;
   else if ('object' == typeof e)
    if (Array.isArray(e)) {
     var o = e.length;
     for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += ' '), (n += f));
    } else for (f in e) e[f] && (n && (n += ' '), (n += f));
   return n;
  }
  function clsx() {
   for (var e, t, f = 0, n = '', o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += ' '), (n += t));
   return n;
  }

  //# sourceMappingURL=clsx-eca3fadc.js.map

  /***/
 },

 /***/ 89108: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_sidenav: () => /* binding */ Sidenav,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93267);
  /* harmony import */ var _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26221);

  const sidenavCss = '.utrecht-sidenav{--utrecht-sidenav-connection-color:var(--utrecht-sidenav-item-marker-color);--utrecht-sidenav-connection-inline-size:2px;--utrecht-sidenav-marker-current-color:var(--utrecht-sidenav-link-hover-color);--utrecht-sidenav-marker-offset:26px;--utrecht-sidenav-connection-block-size:100%;--utrecht-sidenav-marker-height:8px;--utrecht-sidenav-marker-outline-width:2px;border-block-end:1px solid var(--utrecht-color-grey-80);border-block-start:1px solid var(--utrecht-color-grey-80);inline-size:19rem;margin-block-end:0;margin-block-start:0;padding-block-end:0;padding-block-start:0}.utrecht-sidenav__list{margin-block-end:0;margin-block-start:0.2rem;padding-block-end:0;padding-block-start:0;padding-inline-start:0}.utrecht-sidenav__list--child{margin-block-start:0;padding-inline-end:0;padding-inline-start:1.4rem}.utrecht-sidenav__item{list-style:none;margin-inline-start:0;position:relative}.utrecht-sidenav__item--current{color:var(--utrecht-sidenav-item-hover-color, var(--utrecht-link-hover-color, red))}.utrecht-sidenav__item--last{border-block-end:none}.utrecht-sidenav__item-separator:not(.utrecht-sidenav__item--last .utrecht-sidenav__item-separator){border-block-end:1px solid var(--utrecht-color-grey-80);display:block;margin-inline-start:var(--utrecht-space-inline-lg)}.utrecht-sidenav__link{color:var(--utrecht-sidenav-link-color, var(--utrecht-link-color, blue));display:block;margin-inline-start:0;padding-block-end:var(--utrecht-space-block-xs);padding-block-start:var(--utrecht-space-block-xs);padding-inline-end:var(--utrecht-space-inline-3xs);padding-inline-start:var(--utrecht-space-inline-lg);text-decoration:none}.utrecht-sidenav__link:hover{color:var(--utrecht-sidenav-link-hover-color, var(--utrecht-link-hover-color, red));text-decoration:underline}.utrecht-sidenav__link--focus-visible,.utrecht-sidenav__link:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-sidenav__link--parent{padding-block-end:0}.utrecht-sidenav__connection,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:not(.utrecht-sidenav__link--sibling,.utrecht-sidenav__link--parent,.utrecht-sidenav__link--child)::after{background:var(--utrecht-sidenav-connection-color);block-size:calc(var(--utrecht-sidenav-connection-block-size) - var(--utrecht-sidenav-marker-height) - 2 * var(--utrecht-sidenav-marker-outline-width));content:"";display:block;inline-size:var(--utrecht-sidenav-connection-inline-size);inset-block-end:0;inset-block-start:calc(var(--utrecht-sidenav-marker-offset));inset-inline-start:3px;overflow:hidden;position:absolute;z-index:5}.utrecht-sidenav__connection--last,.utrecht-sidenav__connection--parent,.utrecht-sidenav__connection--sibling{display:none}.utrecht-sidenav__marker,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link::before{background-color:var(--utrecht-sidenav-item-marker-color);block-size:var(--utrecht-sidenav-marker-height);border-radius:100%;content:"";inline-size:8px;inset-block-start:20px;inset-inline-start:var(--utrecht-sidenav-marker-offset);overflow:hidden;position:absolute;transform:translateY(-50%) translateX(calc(-1 * var(--utrecht-sidenav-marker-offset)));z-index:10}.utrecht-sidenav__marker--child,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--child::before{background-color:transparent;block-size:4px;border:2px solid var(--utrecht-sidenav-link-color);inline-size:4px;inset-block-start:16px;inset-inline-start:1.2rem;transform:translateY(-50%) translateX(-19.5px)}.utrecht-sidenav__marker--current,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--current::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--current-child::before{background-color:var(--utrecht-sidenav-marker-current-color)}.utrecht-sidenav__link--child,.utrecht-sidenav__link--current-child{color:var(--utrecht-sidenav-link-color, var(--utrecht-link-color, blue));margin-block-end:0;margin-block-start:0;padding-block-end:var(--utrecht-space-block-2xs);padding-block-start:var(--utrecht-space-block-2xs);padding-inline-end:var(--utrecht-space-inline-3xs);padding-inline-start:var(--utrecht-space-inline-lg);text-decoration:none}.utrecht-sidenav__link--current,.utrecht-sidenav__link--current-child{font-weight:var(--utrecht-typography-weight-scale-bold-font-weight)}.utrecht-sidenav__marker--hover,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover::before,.utrecht-sidenav__link:hover .utrecht-sidenav__marker,.utrecht-sidenav__link:hover .utrecht-sidenav--pseudo-elements .utrecht-sidenav__link::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover .utrecht-sidenav__link::before{background-color:var(--utrecht-sidenav-link-hover-color)}.utrecht-sidenav__marker--child.utrecht-sidenav__marker--hover,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__marker--child.utrecht-sidenav__link:hover::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__marker--hover.utrecht-sidenav__link--child::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--child.utrecht-sidenav__link:hover::before,.utrecht-sidenav__link:hover .utrecht-sidenav__marker--child.utrecht-sidenav__marker,.utrecht-sidenav__link:hover .utrecht-sidenav--pseudo-elements .utrecht-sidenav__marker.utrecht-sidenav__link--child::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover .utrecht-sidenav__marker.utrecht-sidenav__link--child::before,.utrecht-sidenav__link:hover .utrecht-sidenav--pseudo-elements .utrecht-sidenav__marker--child.utrecht-sidenav__link::before,.utrecht-sidenav__link:hover .utrecht-sidenav--pseudo-elements .utrecht-sidenav__link.utrecht-sidenav__link--child::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover .utrecht-sidenav__marker--child.utrecht-sidenav__link::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover .utrecht-sidenav__link.utrecht-sidenav__link--child::before{background-color:var(--utrecht-sidenav-link-hover-color);border:2px solid var(--utrecht-sidenav-link-hover-color)}.utrecht-sidenav--pseudo-elements{}.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--child::after{display:none}';
  const UtrechtSidenavStyle0 = sidenavCss;

  const Sidenav = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.json = undefined;
   }
   render() {
    const items = JSON.parse(this.json);
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)(
     'nav',
     { key: '387a82adf73169f5b827c32f305d1c5c0502721d', class: 'utrecht-sidenav' },
     (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)(
      'ul',
      { key: 'b8fc64039480a835f4149f6a6d0f98d1ea267e81', class: 'utrecht-sidenav__list' },
      items.map(({ href, title, current, focus, children, sibling, haschildren }, index, array) =>
       (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)(
        'li',
        { key: href, class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-sidenav__item', index + 1 === array.length && 'utrecht-sidenav__item--last', sibling && 'utrecht-sidenav__item--sibling', haschildren && 'utrecht-sidenav__item--parent') },
        (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('a', { class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-sidenav__link', current && 'utrecht-sidenav__link--current', focus && 'utrecht-sidenav__link--focus', sibling && 'utrecht-sidenav__link--sibling', haschildren && 'utrecht-sidenav__link--parent'), href: href }, (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-sidenav__marker', current && 'utrecht-sidenav__marker--current') }), (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-sidenav__connection', haschildren && 'utrecht-sidenav__connection--parent', sibling && 'utrecht-sidenav__connection--sibling', index + 1 === array.length && 'utrecht-sidenav__connection--last') }), title),
        children
         ? (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)(
            'ul',
            { class: 'utrecht-sidenav__list utrecht-sidenav__list--child' },
            children.map(({ href, title, current, focus }) => (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('li', { key: href, class: 'utrecht-sidenav__item utrecht-sidenav__item--child' }, (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('a', { class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-sidenav__link', 'utrecht-sidenav__link--child', current && 'utrecht-sidenav__link--current', current && 'utrecht-sidenav__link--current-child', focus && 'utrecht-sidenav__link--focus'), href: href }, (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-sidenav__marker', 'utrecht-sidenav__marker--child', current && 'utrecht-sidenav__marker--current', current && 'utrecht-sidenav__marker--current-child') }), title))),
           )
         : '',
        (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { class: 'utrecht-sidenav__item-separator' }),
       ),
      ),
     ),
    );
   }
  };
  Sidenav.style = UtrechtSidenavStyle0;

  //# sourceMappingURL=utrecht-sidenav.entry.js.map

  /***/
 },
};
