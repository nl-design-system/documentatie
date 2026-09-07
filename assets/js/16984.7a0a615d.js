/*! For license information please see 16984.7a0a615d.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [16984, 94603],
 {
  18439(e, t, n) {
   n.d(t, { R: () => i, x: () => l });
   var a = n(30758);
   const r = {},
    o = a.createContext(r);
   function i(e) {
    const t = a.useContext(o);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function l(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : i(e.components)), a.createElement(o.Provider, { value: t }, e.children));
   }
  },
  18652(e, t, n) {
   n.d(t, { A: () => o });
   var a = n(30758),
    r = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const o = (e, t, n, o) => {
    const i = (0, a.forwardRef)(({ color: n = 'currentColor', size: i = 24, stroke: l = 2, title: s, className: c, children: d, ...u }, p) => (0, a.createElement)('svg', { ref: p, ...r[e], width: i, height: i, className: ['tabler-icon', `tabler-icon-${t}`, c].join(' '), ...('filled' === e ? { fill: n } : { strokeWidth: l, stroke: n }), ...u }, [s && (0, a.createElement)('title', { key: 'svg-title' }, s), ...o.map(([e, t]) => (0, a.createElement)(e, t)), ...(Array.isArray(d) ? d : [d])]));
    return ((i.displayName = `${n}`), i);
   };
  },
  20201(e, t, n) {
   n.d(t, { Ay: () => l });
   var a = n(86070),
    r = n(30758);
   const o = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function i(e, t, n, a, r) {
    const o = { '@context': 'https://schema.org', '@type': 'VideoObject', name: r?.name || t, thumbnailUrl: [r?.thumbnailUrl || n], embedUrl: r?.embedUrl || `${a}/embed/${e}`, contentUrl: r?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(r?.description && { description: r.description }), ...(r?.uploadDate && { uploadDate: r.uploadDate }), ...(r?.duration && { duration: r.duration }) };
    return JSON.stringify(o);
   }
   const l = r.forwardRef(function (e, t) {
    const [n, l] = r.useState(!1),
     [s, c] = r.useState(e.alwaysLoadIframe || !1),
     d = encodeURIComponent(e.id),
     u = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     p = e.title,
     y = e.poster || 'hqdefault',
     f = e.announce || 'Watch',
     h = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     b = r.useMemo(() => {
      const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(h ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: d } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, n) => {
         t.append(n, e);
        }),
       t
      );
     }, [e.muted, h, e.enableJsApi, e.playlist, d, e.params]),
     m = r.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     g = r.useMemo(() => (e.playlist ? `${m}/embed/videoseries?${b.toString()}` : `${m}/embed/${d}?${b.toString()}`), [e.playlist, m, d, b]),
     w = !e.thumbnail && !e.playlist && 'maxresdefault' === y,
     v = e.webp ? 'webp' : 'jpg',
     k = e.webp ? 'vi_webp' : 'vi',
     j = w
      ? ((e, t, n, a = 'maxresdefault') => {
         const [i, l] = (0, r.useState)('');
         return (
          (0, r.useEffect)(() => {
           const r = `https://img.youtube.com/${t}/${e}/${a}.${n}`,
            i = `https://img.youtube.com/${t}/${e}/hqdefault.${n}`,
            s = o[a],
            c = new Image();
           ((c.onload = () => {
            c.width < s ? l(i) : l(r);
           }),
            (c.onerror = () => l(i)),
            (c.src = r));
          }, [e, t, n, a]),
          i
         );
        })(e.id, k, v, y)
      : null,
     O = r.useMemo(() => e.thumbnail || j || `https://i.ytimg.com/${k}/${e.playlist ? u : d}/${y}.${v}`, [e.thumbnail, j, k, e.playlist, u, d, y, v]),
     P = e.activatedClass || 'lyt-activated',
     C = e.adNetwork || !1,
     x = e.aspectHeight || 9,
     E = e.aspectWidth || 16,
     $ = e.iframeClass || '',
     S = e.playerClass || 'lty-playbtn',
     R = e.wrapperClass || 'yt-lite',
     A = r.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     N = e.rel ? 'prefetch' : 'preload',
     L = e.containerElement || 'article',
     I = !1 !== e.noscriptFallback,
     M = () => {
      s || c(!0);
     };
    return (
     r.useEffect(() => {
      s && (A(), e.focusOnLoad && 'object' == typeof t && t?.current && t.current.focus());
     }, [s, A, e.focusOnLoad, t]),
     r.useEffect(() => {
      if (!s || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
      let n = !1,
       a = !1;
      const r = (a) => {
       if ('https://www.youtube.com' !== a.origin && 'https://www.youtube-nocookie.com' !== a.origin) return;
       let r;
       try {
        r = 'string' == typeof a.data ? JSON.parse(a.data) : a.data;
       } catch {
        return;
       }
       switch (r.event) {
        case 'onReady':
         n || ((n = !0), e.onReady && e.onReady({ videoId: e.id, title: p }));
         break;
        case 'infoDelivery':
         if (void 0 !== r.info?.playerState) {
          const n = r.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: n, currentTime: r.info.currentTime, duration: r.info.duration }), n)) {
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
         (void 0 !== r.info?.playbackRate && e.onPlaybackRateChange?.(r.info.playbackRate), void 0 !== r.info?.playbackQuality && e.onPlaybackQualityChange?.(r.info.playbackQuality));
         break;
        case 'onStateChange':
         if (void 0 !== r.info?.playerState) {
          const n = r.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: n, currentTime: r.info.currentTime, duration: r.info.duration }), n)) {
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
         if (r.info && 'errorCode' in r.info) {
          const t = r.info.errorCode;
          e.onError && e.onError(t);
         }
         break;
        case 'onPlaybackRateChange':
         void 0 !== r.info?.playbackRate && e.onPlaybackRateChange?.(r.info.playbackRate);
         break;
        case 'onPlaybackQualityChange':
         void 0 !== r.info?.playbackQuality && e.onPlaybackQualityChange?.(r.info.playbackQuality);
       }
      };
      window.addEventListener('message', r);
      const o = [],
       i = () => {
        'object' == typeof t && t?.current?.contentWindow && t.current.contentWindow.postMessage('{"event":"listening","id":"' + d + '"}', '*');
       },
       l = () => {
        a ||
         ((a = !0),
         i(),
         [100, 300, 600, 1200, 2400].forEach((e) => {
          o.push(setTimeout(i, e));
         }));
       };
      return (
       'object' == typeof t && t?.current
        ? (t.current.addEventListener('load', l), 'complete' === t.current.contentDocument?.readyState && l())
        : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
           o.push(setTimeout(i, e));
          }),
       () => {
        (window.removeEventListener('message', r), o.forEach(clearTimeout), 'object' == typeof t && t?.current && t.current.removeEventListener('load', l));
       }
      );
     }, [s, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, d, p, t]),
     (0, a.jsxs)(a.Fragment, {
      children: [
       !e.lazyLoad && (0, a.jsx)('link', { rel: N, href: O, as: 'image' }),
       (0, a.jsx)(a.Fragment, { children: n && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: m }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), C && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: i(e.id, p, O, m, e.seo) } }),
       I && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
       (0, a.jsxs)(L, {
        onPointerOver: () => {
         n || l(!0);
        },
        onClick: M,
        className: `${R} ${s ? P : ''}`,
        'data-title': p,
        role: s || e.lazyLoad ? void 0 : 'img',
        'aria-label': s ? void 0 : `${p} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${O})` }), '--aspect-ratio': (x / E) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !s && (0, a.jsx)('img', { src: O, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !s && (0, a.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && s) && (0, a.jsx)('button', { type: 'button', className: S, 'aria-label': `${f} ${p}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, onClick: M, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: f }) }), s && (0, a.jsx)('iframe', { ref: t, className: $, title: p, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: g, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  56561(e, t, n) {
   n.d(t, { f: () => u });
   var a = n(15540),
    r = n(69967),
    o = n(86070),
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
   function d(e) {
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
   var u = (0, l.forwardRef)(function (e, t) {
    var n = e.children,
     l = e.className,
     c = e.purpose,
     u = (0, r.A)(e, s);
    return (0, o.jsx)('p', d(d({ className: (0, i.$)('nl-paragraph', (0, a.A)({}, 'nl-paragraph--lead', 'lead' === c), l), ref: t }, u), {}, { children: 'lead' === c ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   u.displayName = 'Paragraph';
  },
  63009(e, t, n) {
   n.d(t, { N: () => u });
   var a = n(15540),
    r = n(69967),
    o = n(86070),
    i = n(13526),
    l = n(30758),
    s = ['children', 'className', 'current', 'disabled', 'href', 'inlineBox'];
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
   function d(e) {
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
   var u = (0, l.forwardRef)(function (e, t) {
    var n = e.children,
     l = e.className,
     c = e.current,
     u = e.disabled,
     p = e.href,
     y = e.inlineBox,
     f = (0, r.A)(e, s);
    return (0, o.jsx)('a', d(d({ 'aria-current': c || void 0, 'aria-disabled': u, className: (0, i.$)('nl-link', (0, a.A)((0, a.A)((0, a.A)({}, 'nl-link--current', c), 'nl-link--disabled', u), 'nl-link--inline-box', y), l), href: u ? void 0 : p, role: u ? 'link' : void 0, ref: t, tabIndex: u ? 0 : void 0 }, f), {}, { children: n }));
   });
   u.displayName = 'Link';
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
