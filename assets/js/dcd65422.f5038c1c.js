/*! For license information please see dcd65422.f5038c1c.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [84391],
 {
  24200: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => i, default: () => m, frontMatter: () => c, metadata: () => l, toc: () => d });
   var o = n(52676),
    a = n(40139),
    r = n(97233);
   const c = { title: 'Component inzetten \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Component inzetten', pagination_label: 'Component inzetten', description: 'Bestaand component inzetten', keywords: ['developer', 'bijdragen', 'component gebruiken'] },
    i = 'Bestaand component inzetten',
    l = { id: 'handboek/developer/component-inzetten', title: 'Component inzetten \xb7 Developer \xb7 Handboek', description: 'Bestaand component inzetten', source: '@site/docs/handboek/developer/05-component-inzetten.mdx', sourceDirName: 'handboek/developer', slug: '/handboek/developer/component-inzetten', permalink: '/handboek/developer/component-inzetten', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/05-component-inzetten.mdx', tags: [], version: 'current', sidebarPosition: 5, frontMatter: { title: 'Component inzetten \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Component inzetten', pagination_label: 'Component inzetten', description: 'Bestaand component inzetten', keywords: ['developer', 'bijdragen', 'component gebruiken'] }, sidebar: 'handboek', previous: { title: 'Component kiezen', permalink: '/handboek/developer/samenwerken-aan-componenten' }, next: { title: 'Component uitbreiden', permalink: '/handboek/developer/component-uitbreiden' } },
    s = {},
    d = [];
   function p(e) {
    const t = { h1: 'h1', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(t.h1, { id: 'bestaand-component-inzetten', children: 'Bestaand component inzetten' }), '\n', (0, o.jsx)(t.p, { children: 'We hebben een opname van de onboarding-week 2021 waarin we vertellen over het gebruiken van bestaande componenten uit de community:' }), '\n', (0, o.jsx)(r.Y, { id: '7P6YUT3pmi8', title: 'Bestaand component inzetten' })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, a.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
  97233: (e, t, n) => {
   n.d(t, { Y: () => r });
   var o = n(84263),
    a = n(52676);
   const r = (e) => {
    let { id: t, title: n, ...r } = e;
    return (0, a.jsx)(o.Z, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: t, title: n, poster: 'maxresdefault', ...r });
   };
  },
  40139: (e, t, n) => {
   n.d(t, { Z: () => i, a: () => c });
   var o = n(75271);
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
  84263: (e, t, n) => {
   n.d(t, { Z: () => c });
   var o = n(75271),
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
     b = e.poster || 'hqdefault',
     f = e.announce || 'Watch',
     h = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     k = new URLSearchParams(a(a(a(a({}, e.muted ? { mute: '1' } : {}), h ? { autoplay: '1' } : {}), e.enableJsApi ? { enablejsapi: '1' } : {}), e.playlist ? { list: p } : {}));
    e.params &&
     new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach(function (e, t) {
      k.append(t, e);
     });
    var v = e.noCookie;
    v = e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com';
    var g = e.playlist ? ''.concat(v, '/embed/videoseries?').concat(k.toString()) : ''.concat(v, '/embed/').concat(p, '?').concat(k.toString()),
     w = !e.thumbnail && !e.playlist && 'maxresdefault' === b,
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
        })(e.id, C, y, b)
      : null,
     z =
      e.thumbnail ||
      _ ||
      'https://i.ytimg.com/'
       .concat(C, '/')
       .concat(e.playlist ? m : p, '/')
       .concat(b, '.')
       .concat(y),
     x = e.activatedClass || 'lyt-activated',
     E = e.adNetwork || !1,
     j = e.aspectHeight || 9,
     I = e.aspectWidth || 16,
     B = e.iframeClass || '',
     P = e.playerClass || 'lty-playbtn',
     S = e.wrapperClass || 'yt-lite',
     F = e.onIframeAdded || function () {},
     N = e.rel ? 'prefetch' : 'preload',
     U = e.containerElement || 'article',
     R = e.style || {};
    return (
     o.useEffect(
      function () {
       s && F();
      },
      [s],
     ),
     o.createElement(
      o.Fragment,
      null,
      o.createElement('link', { rel: N, href: z, as: 'image' }),
      o.createElement(o.Fragment, null, c && o.createElement(o.Fragment, null, o.createElement('link', { rel: 'preconnect', href: v }), o.createElement('link', { rel: 'preconnect', href: 'https://www.google.com' }), E && o.createElement(o.Fragment, null, o.createElement('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), o.createElement('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })))),
      o.createElement(
       U,
       {
        onPointerOver: function () {
         c || i(!0);
        },
        onClick: function () {
         s || d(!0);
        },
        className: ''.concat(S, ' ').concat(s ? x : ''),
        'data-title': u,
        style: a(a({ backgroundImage: 'url('.concat(z, ')') }, { '--aspect-ratio': ''.concat((j / I) * 100, '%') }), R),
       },
       o.createElement('button', { type: 'button', className: P, 'aria-label': ''.concat(f, ' ').concat(u) }),
       s && o.createElement('iframe', { ref: t, className: B, title: u, width: '560', height: '315', frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: g }),
      ),
     )
    );
   });
  },
 },
]);
