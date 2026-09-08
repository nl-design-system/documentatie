/*! For license information please see 45917.1a698f30.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [45917],
 {
  18439(e, t, n) {
   n.d(t, { R: () => i, x: () => l });
   var a = n(30758);
   const o = {},
    r = a.createContext(o);
   function i(e) {
    const t = a.useContext(r);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function l(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), a.createElement(r.Provider, { value: t }, e.children));
   }
  },
  18652(e, t, n) {
   n.d(t, { A: () => r });
   var a = n(30758),
    o = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const r = (e, t, n, r) => {
    const i = (0, a.forwardRef)(({ color: n = 'currentColor', size: i = 24, stroke: l = 2, title: s, className: c, children: u, ...d }, p) => (0, a.createElement)('svg', { ref: p, ...o[e], width: i, height: i, className: ['tabler-icon', `tabler-icon-${t}`, c].join(' '), ...('filled' === e ? { fill: n } : { strokeWidth: l, stroke: n }), ...d }, [s && (0, a.createElement)('title', { key: 'svg-title' }, s), ...r.map(([e, t]) => (0, a.createElement)(e, t)), ...(Array.isArray(u) ? u : [u])]));
    return ((i.displayName = `${n}`), i);
   };
  },
  20201(e, t, n) {
   n.d(t, { Ay: () => l });
   var a = n(86070),
    o = n(30758);
   const r = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function i(e, t, n, a, o) {
    const r = { '@context': 'https://schema.org', '@type': 'VideoObject', name: o?.name || t, thumbnailUrl: [o?.thumbnailUrl || n], embedUrl: o?.embedUrl || `${a}/embed/${e}`, contentUrl: o?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(o?.description && { description: o.description }), ...(o?.uploadDate && { uploadDate: o.uploadDate }), ...(o?.duration && { duration: o.duration }) };
    return JSON.stringify(r);
   }
   const l = o.forwardRef(function (e, t) {
    const [n, l] = o.useState(!1),
     [s, c] = o.useState(e.alwaysLoadIframe || !1),
     u = encodeURIComponent(e.id),
     d = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     p = e.title,
     y = e.poster || 'hqdefault',
     f = e.announce || 'Watch',
     m = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     h = o.useMemo(() => {
      const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(m ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: u } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, n) => {
         t.append(n, e);
        }),
       t
      );
     }, [e.muted, m, e.enableJsApi, e.playlist, u, e.params]),
     b = o.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     g = o.useMemo(() => (e.playlist ? `${b}/embed/videoseries?${h.toString()}` : `${b}/embed/${u}?${h.toString()}`), [e.playlist, b, u, h]),
     w = !e.thumbnail && !e.playlist && 'maxresdefault' === y,
     v = e.webp ? 'webp' : 'jpg',
     k = e.webp ? 'vi_webp' : 'vi',
     j = w
      ? ((e, t, n, a = 'maxresdefault') => {
         const [i, l] = (0, o.useState)('');
         return (
          (0, o.useEffect)(() => {
           const o = `https://img.youtube.com/${t}/${e}/${a}.${n}`,
            i = `https://img.youtube.com/${t}/${e}/hqdefault.${n}`,
            s = r[a],
            c = new Image();
           ((c.onload = () => {
            c.width < s ? l(i) : l(o);
           }),
            (c.onerror = () => l(i)),
            (c.src = o));
          }, [e, t, n, a]),
          i
         );
        })(e.id, k, v, y)
      : null,
     P = o.useMemo(() => e.thumbnail || j || `https://i.ytimg.com/${k}/${e.playlist ? d : u}/${y}.${v}`, [e.thumbnail, j, k, e.playlist, d, u, y, v]),
     C = e.activatedClass || 'lyt-activated',
     x = e.adNetwork || !1,
     O = e.aspectHeight || 9,
     S = e.aspectWidth || 16,
     E = e.iframeClass || '',
     $ = e.playerClass || 'lty-playbtn',
     R = e.wrapperClass || 'yt-lite',
     A = o.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     N = e.rel ? 'prefetch' : 'preload',
     L = e.containerElement || 'article',
     T = !1 !== e.noscriptFallback,
     I = () => {
      s || c(!0);
     };
    return (
     o.useEffect(() => {
      s && (A(), e.focusOnLoad && 'object' == typeof t && t?.current && t.current.focus());
     }, [s, A, e.focusOnLoad, t]),
     o.useEffect(() => {
      if (!s || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
      let n = !1,
       a = !1;
      const o = (a) => {
       if ('https://www.youtube.com' !== a.origin && 'https://www.youtube-nocookie.com' !== a.origin) return;
       let o;
       try {
        o = 'string' == typeof a.data ? JSON.parse(a.data) : a.data;
       } catch {
        return;
       }
       switch (o.event) {
        case 'onReady':
         n || ((n = !0), e.onReady && e.onReady({ videoId: e.id, title: p }));
         break;
        case 'infoDelivery':
         if (void 0 !== o.info?.playerState) {
          const n = o.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: n, currentTime: o.info.currentTime, duration: o.info.duration }), n)) {
           case 1:
            e.onPlay?.();
            break;
           case 2:
            e.onPause?.();
            break;
           case 0:
            (e.onEnd?.(), e.stopOnEnd && 'object' == typeof t && t?.current?.contentWindow && t.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'));
            break;
           case 3:
            e.onBuffering?.();
          }
         }
         (void 0 !== o.info?.playbackRate && e.onPlaybackRateChange?.(o.info.playbackRate), void 0 !== o.info?.playbackQuality && e.onPlaybackQualityChange?.(o.info.playbackQuality));
         break;
        case 'onStateChange':
         if (void 0 !== o.info?.playerState) {
          const n = o.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: n, currentTime: o.info.currentTime, duration: o.info.duration }), n)) {
           case 1:
            e.onPlay?.();
            break;
           case 2:
            e.onPause?.();
            break;
           case 0:
            (e.onEnd?.(), e.stopOnEnd && 'object' == typeof t && t?.current?.contentWindow && t.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'));
            break;
           case 3:
            e.onBuffering?.();
          }
         }
         break;
        case 'onError':
         if (o.info && 'errorCode' in o.info) {
          const t = o.info.errorCode;
          e.onError && e.onError(t);
         }
         break;
        case 'onPlaybackRateChange':
         void 0 !== o.info?.playbackRate && e.onPlaybackRateChange?.(o.info.playbackRate);
         break;
        case 'onPlaybackQualityChange':
         void 0 !== o.info?.playbackQuality && e.onPlaybackQualityChange?.(o.info.playbackQuality);
       }
      };
      window.addEventListener('message', o);
      const r = [],
       i = () => {
        'object' == typeof t && t?.current?.contentWindow && t.current.contentWindow.postMessage('{"event":"listening","id":"' + u + '"}', '*');
       },
       l = () => {
        a ||
         ((a = !0),
         i(),
         [100, 300, 600, 1200, 2400].forEach((e) => {
          r.push(setTimeout(i, e));
         }));
       };
      return (
       'object' == typeof t && t?.current
        ? (t.current.addEventListener('load', l), 'complete' === t.current.contentDocument?.readyState && l())
        : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
           r.push(setTimeout(i, e));
          }),
       () => {
        (window.removeEventListener('message', o), r.forEach(clearTimeout), 'object' == typeof t && t?.current && t.current.removeEventListener('load', l));
       }
      );
     }, [s, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, u, p, t]),
     (0, a.jsxs)(a.Fragment, {
      children: [
       !e.lazyLoad && (0, a.jsx)('link', { rel: N, href: P, as: 'image' }),
       (0, a.jsx)(a.Fragment, { children: n && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: b }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), x && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: i(e.id, p, P, b, e.seo) } }),
       T && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
       (0, a.jsxs)(L, {
        onPointerOver: () => {
         n || l(!0);
        },
        onClick: I,
        className: `${R} ${s ? C : ''}`,
        'data-title': p,
        role: s || e.lazyLoad ? void 0 : 'img',
        'aria-label': s ? void 0 : `${p} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${P})` }), '--aspect-ratio': (O / S) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !s && (0, a.jsx)('img', { src: P, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !s && (0, a.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && s) && (0, a.jsx)('button', { type: 'button', className: $, 'aria-label': `${f} ${p}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, onClick: I, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: f }) }), s && (0, a.jsx)('iframe', { ref: t, className: E, title: p, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: g, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  41534(e, t, n) {
   function a(e, t) {
    if (null == e) return {};
    var n,
     a,
     o = (function (e, t) {
      if (null == e) return {};
      var n = {};
      for (var a in e)
       if ({}.hasOwnProperty.call(e, a)) {
        if (-1 !== t.indexOf(a)) continue;
        n[a] = e[a];
       }
      return n;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (a = 0; a < r.length; a++) ((n = r[a]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   n.d(t, { A: () => a });
  },
  48171(e, t, n) {
   function a(e) {
    return (
     (a =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     a(e)
    );
   }
   function o(e) {
    var t = (function (e, t) {
     if ('object' != a(e) || !e) return e;
     var n = e[Symbol.toPrimitive];
     if (void 0 !== n) {
      var o = n.call(e, t || 'default');
      if ('object' != a(o)) return o;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == a(t) ? t : t + '';
   }
   function r(e, t, n) {
    return ((t = o(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
   }
   n.d(t, { A: () => r });
  },
  71544(e, t, n) {
   n.d(t, { f: () => d });
   var a = n(48171),
    o = n(41534),
    r = n(86070),
    i = n(13526),
    l = n(30758),
    s = ['children', 'className', 'purpose'];
   function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     (t &&
      (a = a.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a));
    }
    return n;
   }
   function u(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? c(Object(n), !0).forEach(function (t) {
         (0, a.A)(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : c(Object(n)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
   }
   var d = (0, l.forwardRef)(function (e, t) {
    var n = e.children,
     l = e.className,
     c = e.purpose,
     d = (0, o.A)(e, s);
    return (0, r.jsx)('p', u(u({ className: (0, i.$)('nl-paragraph', (0, a.A)({}, 'nl-paragraph--lead', 'lead' === c), l), ref: t }, d), {}, { children: 'lead' === c ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   d.displayName = 'Paragraph';
  },
  90578(e, t, n) {
   n.d(t, { A: () => a });
   const a = (0, n(18652).A)('outline', 'calendar-event', 'CalendarEvent', [
    ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12', key: 'svg-0' }],
    ['path', { d: 'M16 3l0 4', key: 'svg-1' }],
    ['path', { d: 'M8 3l0 4', key: 'svg-2' }],
    ['path', { d: 'M4 11l16 0', key: 'svg-3' }],
    ['path', { d: 'M8 15h2v2h-2l0 -2', key: 'svg-4' }],
   ]);
  },
 },
]);
