'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18429],
 {
  18439(e, t, n) {
   n.d(t, { R: () => l, x: () => r });
   var o = n(30758);
   const a = {},
    i = o.createContext(a);
   function l(e) {
    const t = o.useContext(i);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function r(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : l(e.components)), o.createElement(i.Provider, { value: t }, e.children));
   }
  },
  75397(e, t, n) {
   n.d(t, { L: () => s });
   var o = n(86070),
    a = n(30758);
   const i = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function l(e, t, n, o, a) {
    const i = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == a ? void 0 : a.name) || t, thumbnailUrl: [(null == a ? void 0 : a.thumbnailUrl) || n], embedUrl: (null == a ? void 0 : a.embedUrl) || `${o}/embed/${e}`, contentUrl: (null == a ? void 0 : a.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == a ? void 0 : a.description) && { description: a.description }), ...((null == a ? void 0 : a.uploadDate) && { uploadDate: a.uploadDate }), ...((null == a ? void 0 : a.duration) && { duration: a.duration }) };
    return JSON.stringify(i);
   }
   const r = a.forwardRef(function (e, t) {
     const [n, r] = a.useState(!1),
      [s, d] = a.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      p = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      u = e.title,
      m = e.poster || 'hqdefault',
      h = e.announce || 'Watch',
      b = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      f = a.useMemo(() => {
       const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(b ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, n) => {
          t.append(n, e);
         }),
        t
       );
      }, [e.muted, b, e.enableJsApi, e.playlist, c, e.params]),
      y = a.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      g = a.useMemo(() => (e.playlist ? `${y}/embed/videoseries?${f.toString()}` : `${y}/embed/${c}?${f.toString()}`), [e.playlist, y, c, f]),
      v = !e.thumbnail && !e.playlist && 'maxresdefault' === m,
      k = e.webp ? 'webp' : 'jpg',
      w = e.webp ? 'vi_webp' : 'vi',
      x = v
       ? ((e, t, n, o = 'maxresdefault') => {
          const [l, r] = (0, a.useState)('');
          return (
           (0, a.useEffect)(() => {
            const a = `https://img.youtube.com/${t}/${e}/${o}.${n}`,
             l = `https://img.youtube.com/${t}/${e}/hqdefault.${n}`,
             s = i[o],
             d = new Image();
            ((d.onload = () => {
             d.width < s ? r(l) : r(a);
            }),
             (d.onerror = () => r(l)),
             (d.src = a));
           }, [e, t, n, o]),
           l
          );
         })(e.id, w, k, m)
       : null,
      j = a.useMemo(() => e.thumbnail || x || `https://i.ytimg.com/${w}/${e.playlist ? p : c}/${m}.${k}`, [e.thumbnail, x, w, e.playlist, p, c, m, k]),
      $ = e.activatedClass || 'lyt-activated',
      z = e.adNetwork || !1,
      C = e.aspectHeight || 9,
      _ = e.aspectWidth || 16,
      I = e.iframeClass || '',
      L = e.playerClass || 'lty-playbtn',
      U = e.wrapperClass || 'yt-lite',
      S = a.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      N = e.rel ? 'prefetch' : 'preload',
      T = e.containerElement || 'article',
      P = !1 !== e.noscriptFallback;
     return (
      a.useEffect(() => {
       s && (S(), e.focusOnLoad && 'object' == typeof t && null != t && t.current && t.current.focus());
      }, [s, S, e.focusOnLoad, t]),
      (0, o.jsxs)(o.Fragment, {
       children: [
        !e.lazyLoad && (0, o.jsx)('link', { rel: N, href: j, as: 'image' }),
        (0, o.jsx)(o.Fragment, { children: n && (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('link', { rel: 'preconnect', href: y }), (0, o.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), z && (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, o.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, o.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: l(e.id, u, j, y, e.seo) } }),
        P && !e.playlist && (0, o.jsx)('noscript', { children: (0, o.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
        (0, o.jsxs)(T, {
         onPointerOver: () => {
          n || r(!0);
         },
         onClick: () => {
          s || d(!0);
         },
         className: `${U} ${s ? $ : ''}`,
         'data-title': u,
         role: s ? void 0 : 'img',
         'aria-label': s ? void 0 : `${u} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${j})` }), '--aspect-ratio': (C / _) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !s && (0, o.jsx)('img', { src: j, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, o.jsx)('button', { type: 'button', className: L, 'aria-label': `${h} ${u}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, children: (0, o.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), s && (0, o.jsx)('iframe', { ref: t, className: I, title: u, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: g, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    s = ({ id: e, title: t, ...n }) => (0, o.jsx)(r, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: t, poster: 'maxresdefault', ...n });
  },
  79692(e, t, n) {
   (n.r(t), n.d(t, { assets: () => d, contentTitle: () => s, default: () => u, frontMatter: () => r, metadata: () => o, toc: () => c }));
   const o = JSON.parse('{"id":"handboek/developer/component-inzetten","title":"Component inzetten \xb7 Developer \xb7 Handboek","description":"Bestaand component inzetten","source":"@site/docs/handboek/developer/05-component-inzetten.mdx","sourceDirName":"handboek/developer","slug":"/handboek/developer/component-inzetten","permalink":"/handboek/developer/component-inzetten","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/05-component-inzetten.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Component inzetten \xb7 Developer \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Component inzetten","pagination_label":"Component inzetten","description":"Bestaand component inzetten","keywords":["developer","bijdragen","component gebruiken"]},"sidebar":"handboek","previous":{"title":"Thema maken","permalink":"/handboek/developer/thema-maken"},"next":{"title":"Component uitbreiden","permalink":"/handboek/developer/component-uitbreiden"}}');
   var a = n(86070),
    i = n(18439),
    l = n(75397);
   const r = { title: 'Component inzetten \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Component inzetten', pagination_label: 'Component inzetten', description: 'Bestaand component inzetten', keywords: ['developer', 'bijdragen', 'component gebruiken'] },
    s = 'Bestaand component inzetten',
    d = {},
    c = [];
   function p(e) {
    const t = { h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.header, { children: (0, a.jsx)(t.h1, { id: 'bestaand-component-inzetten', children: 'Bestaand component inzetten' }) }), '\n', (0, a.jsx)(t.p, { children: 'We hebben een opname van de onboarding-week 2021 waarin we vertellen over het gebruiken van bestaande componenten uit de community:' }), '\n', (0, a.jsx)(l.L, { id: '7P6YUT3pmi8', title: 'Bestaand component inzetten' })] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
