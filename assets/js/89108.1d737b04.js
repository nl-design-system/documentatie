'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [89108],
 {
  26221: (e, t, r) => {
   function n(e) {
    var t,
     r,
     i = '';
    if ('string' == typeof e || 'number' == typeof e) i += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var c = e.length;
      for (t = 0; t < c; t++) e[t] && (r = n(e[t])) && (i && (i += ' '), (i += r));
     } else for (r in e) e[r] && (i && (i += ' '), (i += r));
    return i;
   }
   function i() {
    for (var e, t, r = 0, i = '', c = arguments.length; r < c; r++) (e = arguments[r]) && (t = n(e)) && (i && (i += ' '), (i += t));
    return i;
   }
   r.d(t, { c: () => i });
  },
  89108: (e, t, r) => {
   r.r(t), r.d(t, { utrecht_sidenav: () => c });
   var n = r(93267),
    i = r(26221);
   const c = class {
    constructor(e) {
     (0, n.r)(this, e), (this.json = void 0);
    }
    render() {
     const e = JSON.parse(this.json);
     return (0, n.h)(
      'nav',
      { key: '387a82adf73169f5b827c32f305d1c5c0502721d', class: 'utrecht-sidenav' },
      (0, n.h)(
       'ul',
       { key: 'b8fc64039480a835f4149f6a6d0f98d1ea267e81', class: 'utrecht-sidenav__list' },
       e.map(({ href: e, title: t, current: r, focus: c, children: a, sibling: s, haschildren: d }, o, l) =>
        (0, n.h)(
         'li',
         { key: e, class: (0, i.c)('utrecht-sidenav__item', o + 1 === l.length && 'utrecht-sidenav__item--last', s && 'utrecht-sidenav__item--sibling', d && 'utrecht-sidenav__item--parent') },
         (0, n.h)('a', { class: (0, i.c)('utrecht-sidenav__link', r && 'utrecht-sidenav__link--current', c && 'utrecht-sidenav__link--focus', s && 'utrecht-sidenav__link--sibling', d && 'utrecht-sidenav__link--parent'), href: e }, (0, n.h)('div', { class: (0, i.c)('utrecht-sidenav__marker', r && 'utrecht-sidenav__marker--current') }), (0, n.h)('div', { class: (0, i.c)('utrecht-sidenav__connection', d && 'utrecht-sidenav__connection--parent', s && 'utrecht-sidenav__connection--sibling', o + 1 === l.length && 'utrecht-sidenav__connection--last') }), t),
         a
          ? (0, n.h)(
             'ul',
             { class: 'utrecht-sidenav__list utrecht-sidenav__list--child' },
             a.map(({ href: e, title: t, current: r, focus: c }) => (0, n.h)('li', { key: e, class: 'utrecht-sidenav__item utrecht-sidenav__item--child' }, (0, n.h)('a', { class: (0, i.c)('utrecht-sidenav__link', 'utrecht-sidenav__link--child', r && 'utrecht-sidenav__link--current', r && 'utrecht-sidenav__link--current-child', c && 'utrecht-sidenav__link--focus'), href: e }, (0, n.h)('div', { class: (0, i.c)('utrecht-sidenav__marker', 'utrecht-sidenav__marker--child', r && 'utrecht-sidenav__marker--current', r && 'utrecht-sidenav__marker--current-child') }), t))),
            )
          : '',
         (0, n.h)('div', { class: 'utrecht-sidenav__item-separator' }),
        ),
       ),
      ),
     );
    }
   };
   c.style = '.utrecht-sidenav{--utrecht-sidenav-connection-color:var(--utrecht-sidenav-item-marker-color);--utrecht-sidenav-connection-inline-size:2px;--utrecht-sidenav-marker-current-color:var(--utrecht-sidenav-link-hover-color);--utrecht-sidenav-marker-offset:26px;--utrecht-sidenav-connection-block-size:100%;--utrecht-sidenav-marker-height:8px;--utrecht-sidenav-marker-outline-width:2px;border-block-end:1px solid var(--utrecht-color-grey-80);border-block-start:1px solid var(--utrecht-color-grey-80);inline-size:19rem;margin-block-end:0;margin-block-start:0;padding-block-end:0;padding-block-start:0}.utrecht-sidenav__list{margin-block-end:0;margin-block-start:0.2rem;padding-block-end:0;padding-block-start:0;padding-inline-start:0}.utrecht-sidenav__list--child{margin-block-start:0;padding-inline-end:0;padding-inline-start:1.4rem}.utrecht-sidenav__item{list-style:none;margin-inline-start:0;position:relative}.utrecht-sidenav__item--current{color:var(--utrecht-sidenav-item-hover-color, var(--utrecht-link-hover-color, red))}.utrecht-sidenav__item--last{border-block-end:none}.utrecht-sidenav__item-separator:not(.utrecht-sidenav__item--last .utrecht-sidenav__item-separator){border-block-end:1px solid var(--utrecht-color-grey-80);display:block;margin-inline-start:var(--utrecht-space-inline-lg)}.utrecht-sidenav__link{color:var(--utrecht-sidenav-link-color, var(--utrecht-link-color, blue));display:block;margin-inline-start:0;padding-block-end:var(--utrecht-space-block-xs);padding-block-start:var(--utrecht-space-block-xs);padding-inline-end:var(--utrecht-space-inline-3xs);padding-inline-start:var(--utrecht-space-inline-lg);text-decoration:none}.utrecht-sidenav__link:hover{color:var(--utrecht-sidenav-link-hover-color, var(--utrecht-link-hover-color, red));text-decoration:underline}.utrecht-sidenav__link--focus-visible,.utrecht-sidenav__link:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-sidenav__link--parent{padding-block-end:0}.utrecht-sidenav__connection,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:not(.utrecht-sidenav__link--sibling,.utrecht-sidenav__link--parent,.utrecht-sidenav__link--child)::after{background:var(--utrecht-sidenav-connection-color);block-size:calc(var(--utrecht-sidenav-connection-block-size) - var(--utrecht-sidenav-marker-height) - 2 * var(--utrecht-sidenav-marker-outline-width));content:"";display:block;inline-size:var(--utrecht-sidenav-connection-inline-size);inset-block-end:0;inset-block-start:calc(var(--utrecht-sidenav-marker-offset));inset-inline-start:3px;overflow:hidden;position:absolute;z-index:5}.utrecht-sidenav__connection--last,.utrecht-sidenav__connection--parent,.utrecht-sidenav__connection--sibling{display:none}.utrecht-sidenav__marker,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link::before{background-color:var(--utrecht-sidenav-item-marker-color);block-size:var(--utrecht-sidenav-marker-height);border-radius:100%;content:"";inline-size:8px;inset-block-start:20px;inset-inline-start:var(--utrecht-sidenav-marker-offset);overflow:hidden;position:absolute;transform:translateY(-50%) translateX(calc(-1 * var(--utrecht-sidenav-marker-offset)));z-index:10}.utrecht-sidenav__marker--child,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--child::before{background-color:transparent;block-size:4px;border:2px solid var(--utrecht-sidenav-link-color);inline-size:4px;inset-block-start:16px;inset-inline-start:1.2rem;transform:translateY(-50%) translateX(-19.5px)}.utrecht-sidenav__marker--current,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--current::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--current-child::before{background-color:var(--utrecht-sidenav-marker-current-color)}.utrecht-sidenav__link--child,.utrecht-sidenav__link--current-child{color:var(--utrecht-sidenav-link-color, var(--utrecht-link-color, blue));margin-block-end:0;margin-block-start:0;padding-block-end:var(--utrecht-space-block-2xs);padding-block-start:var(--utrecht-space-block-2xs);padding-inline-end:var(--utrecht-space-inline-3xs);padding-inline-start:var(--utrecht-space-inline-lg);text-decoration:none}.utrecht-sidenav__link--current,.utrecht-sidenav__link--current-child{font-weight:var(--utrecht-typography-weight-scale-bold-font-weight)}.utrecht-sidenav__marker--hover,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover::before,.utrecht-sidenav__link:hover .utrecht-sidenav__marker,.utrecht-sidenav__link:hover .utrecht-sidenav--pseudo-elements .utrecht-sidenav__link::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover .utrecht-sidenav__link::before{background-color:var(--utrecht-sidenav-link-hover-color)}.utrecht-sidenav__marker--child.utrecht-sidenav__marker--hover,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__marker--child.utrecht-sidenav__link:hover::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__marker--hover.utrecht-sidenav__link--child::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--child.utrecht-sidenav__link:hover::before,.utrecht-sidenav__link:hover .utrecht-sidenav__marker--child.utrecht-sidenav__marker,.utrecht-sidenav__link:hover .utrecht-sidenav--pseudo-elements .utrecht-sidenav__marker.utrecht-sidenav__link--child::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover .utrecht-sidenav__marker.utrecht-sidenav__link--child::before,.utrecht-sidenav__link:hover .utrecht-sidenav--pseudo-elements .utrecht-sidenav__marker--child.utrecht-sidenav__link::before,.utrecht-sidenav__link:hover .utrecht-sidenav--pseudo-elements .utrecht-sidenav__link.utrecht-sidenav__link--child::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover .utrecht-sidenav__marker--child.utrecht-sidenav__link::before,.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link:hover .utrecht-sidenav__link.utrecht-sidenav__link--child::before{background-color:var(--utrecht-sidenav-link-hover-color);border:2px solid var(--utrecht-sidenav-link-hover-color)}.utrecht-sidenav--pseudo-elements{}.utrecht-sidenav--pseudo-elements .utrecht-sidenav__link--child::after{display:none}';
  },
 },
]);
