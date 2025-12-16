/*! For license information please see dcd65422.604bf0e7.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18429],
 {
  79692: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => l, default: () => m, frontMatter: () => i, metadata: () => o, toc: () => d });
   const o = JSON.parse('{"id":"handboek/developer/component-inzetten","title":"Component inzetten \xb7 Developer \xb7 Handboek","description":"Bestaand component inzetten","source":"@site/docs/handboek/developer/05-component-inzetten.mdx","sourceDirName":"handboek/developer","slug":"/handboek/developer/component-inzetten","permalink":"/handboek/developer/component-inzetten","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/05-component-inzetten.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Component inzetten \xb7 Developer \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Component inzetten","pagination_label":"Component inzetten","description":"Bestaand component inzetten","keywords":["developer","bijdragen","component gebruiken"]},"sidebar":"handboek","previous":{"title":"Component kiezen","permalink":"/handboek/developer/samenwerken-aan-componenten"},"next":{"title":"Component uitbreiden","permalink":"/handboek/developer/component-uitbreiden"}}');
   var a = n(86070),
    r = n(85248),
    c = n(99060);
   const i = { title: 'Component inzetten \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Component inzetten', pagination_label: 'Component inzetten', description: 'Bestaand component inzetten', keywords: ['developer', 'bijdragen', 'component gebruiken'] },
    l = 'Bestaand component inzetten',
    s = {},
    d = [];
   function p(e) {
    const t = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.header, { children: (0, a.jsx)(t.h1, { id: 'bestaand-component-inzetten', children: 'Bestaand component inzetten' }) }), '\n', (0, a.jsx)(t.p, { children: 'We hebben een opname van de onboarding-week 2021 waarin we vertellen over het gebruiken van bestaande componenten uit de community:' }), '\n', (0, a.jsx)(c.L, { id: '7P6YUT3pmi8', title: 'Bestaand component inzetten' })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
  85248: (e, t, n) => {
   n.d(t, { R: () => c, x: () => i });
   var o = n(30758);
   const a = {},
    r = o.createContext(a);
   function c(e) {
    const t = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function i(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : c(e.components)), o.createElement(r.Provider, { value: t }, e.children);
   }
  },
  87423: (e, t, n) => {
   n.d(t, { A: () => c });
   var o = n(30758),
    a = function () {
     return (
      (a =
       Object.assign ||
       function (e) {
        for (var t, n = 1, o = arguments.length; n < o; n++) for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
       }),
      a.apply(this, arguments)
     );
    },
    r = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   var c = o.forwardRef(function (e, t) {
    var n = o.useState(!1),
     c = n[0],
     i = n[1],
     l = o.useState(e.alwaysLoadIframe || !1),
     s = l[0],
     d = l[1],
     p = encodeURIComponent(e.id),
     m = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     u = e.title,
     h = e.poster || 'hqdefault',
     b = e.announce || 'Watch',
     f = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     k = new URLSearchParams(a(a(a(a({}, e.muted ? { mute: '1' } : {}), f ? { autoplay: '1' } : {}), e.enableJsApi ? { enablejsapi: '1' } : {}), e.playlist ? { list: p } : {}));
    e.params &&
     new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach(function (e, t) {
      k.append(t, e);
     });
    var g = e.noCookie;
    g = e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com';
    var v = e.playlist ? ''.concat(g, '/embed/videoseries?').concat(k.toString()) : ''.concat(g, '/embed/').concat(p, '?').concat(k.toString()),
     w = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
     y = e.webp ? 'webp' : 'jpg',
     C = e.webp ? 'vi_webp' : 'vi',
     _ = w
      ? (function (e, t, n, a) {
         void 0 === a && (a = 'maxresdefault');
         var c = (0, o.useState)(''),
          i = c[0],
          l = c[1];
         return (
          (0, o.useEffect)(
           function () {
            var o = 'https://img.youtube.com/'.concat(t, '/').concat(e, '/').concat(a, '.').concat(n),
             c = 'https://img.youtube.com/'.concat(t, '/').concat(e, '/hqdefault.').concat(n),
             i = r[a],
             s = new Image();
            (s.onload = function () {
             s.width < i ? l(c) : l(o);
            }),
             (s.onerror = function () {
              return l(c);
             }),
             (s.src = o);
           },
           [e],
          ),
          i
         );
        })(e.id, C, y, h)
      : null,
     z =
      e.thumbnail ||
      _ ||
      'https://i.ytimg.com/'
       .concat(C, '/')
       .concat(e.playlist ? m : p, '/')
       .concat(h, '.')
       .concat(y),
     x = e.activatedClass || 'lyt-activated',
     E = e.adNetwork || !1,
     j = e.aspectHeight || 9,
     I = e.aspectWidth || 16,
     S = e.iframeClass || '',
     B = e.playerClass || 'lty-playbtn',
     P = e.wrapperClass || 'yt-lite',
     R = e.onIframeAdded || function () {},
     N = e.rel ? 'prefetch' : 'preload',
     F = e.containerElement || 'article',
     L = e.style || {};
    return (
     o.useEffect(
      function () {
       s && R();
      },
      [s],
     ),
     o.createElement(
      o.Fragment,
      null,
      o.createElement('link', { rel: N, href: z, as: 'image' }),
      o.createElement(o.Fragment, null, c && o.createElement(o.Fragment, null, o.createElement('link', { rel: 'preconnect', href: g }), o.createElement('link', { rel: 'preconnect', href: 'https://www.google.com' }), E && o.createElement(o.Fragment, null, o.createElement('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), o.createElement('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })))),
      o.createElement(
       F,
       {
        onPointerOver: function () {
         c || i(!0);
        },
        onClick: function () {
         s || d(!0);
        },
        className: ''.concat(P, ' ').concat(s ? x : ''),
        'data-title': u,
        style: a(a({ backgroundImage: 'url('.concat(z, ')') }, { '--aspect-ratio': ''.concat((j / I) * 100, '%') }), L),
       },
       o.createElement('button', { type: 'button', className: B, 'aria-label': ''.concat(b, ' ').concat(u) }),
       s && o.createElement('iframe', { ref: t, className: S, title: u, width: '560', height: '315', frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: v }),
      ),
     )
    );
   });
  },
  99060: (e, t, n) => {
   n.d(t, { L: () => r });
   var o = n(87423),
    a = n(86070);
   const r = ({ id: e, title: t, ...n }) => (0, a.jsx)(o.A, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: t, poster: 'maxresdefault', ...n });
  },
 },
]);
