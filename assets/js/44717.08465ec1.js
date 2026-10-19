/*! For license information please see 44717.08465ec1.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [44717],
 {
  1375(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'line-height', 'LineHeight', [
    ['path', { d: 'M3 8l3 -3l3 3', key: 'svg-0' }],
    ['path', { d: 'M3 16l3 3l3 -3', key: 'svg-1' }],
    ['path', { d: 'M6 5l0 14', key: 'svg-2' }],
    ['path', { d: 'M13 6l7 0', key: 'svg-3' }],
    ['path', { d: 'M13 12l7 0', key: 'svg-4' }],
    ['path', { d: 'M13 18l7 0', key: 'svg-5' }],
   ]);
  },
  4077(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'mood-happy', 'MoodHappy', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  4603(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'copy', 'Copy', [
    ['path', { d: 'M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666', key: 'svg-0' }],
    ['path', { d: 'M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1', key: 'svg-1' }],
   ]);
  },
  13088(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'ruler', 'Ruler', [
    ['path', { d: 'M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1', key: 'svg-0' }],
    ['path', { d: 'M4 8l2 0', key: 'svg-1' }],
    ['path', { d: 'M4 12l3 0', key: 'svg-2' }],
    ['path', { d: 'M4 16l2 0', key: 'svg-3' }],
    ['path', { d: 'M8 4l0 2', key: 'svg-4' }],
    ['path', { d: 'M12 4l0 3', key: 'svg-5' }],
    ['path', { d: 'M16 4l0 2', key: 'svg-6' }],
   ]);
  },
  18439(e, t, a) {
   a.d(t, { R: () => s, x: () => l });
   var n = a(30758);
   const o = {},
    r = n.createContext(o);
   function s(e) {
    const t = n.useContext(r);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function l(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), n.createElement(r.Provider, { value: t }, e.children));
   }
  },
  18652(e, t, a) {
   a.d(t, { A: () => r });
   var n = a(30758),
    o = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const r = (e, t, a, r) => {
    const s = (0, n.forwardRef)(({ color: a = 'currentColor', size: s = 24, stroke: l = 2, title: i, className: c, children: d, ...p }, h) => (0, n.createElement)('svg', { ref: h, ...o[e], width: s, height: s, className: ['tabler-icon', `tabler-icon-${t}`, c].join(' '), ...('filled' === e ? { fill: a } : { strokeWidth: l, stroke: a }), ...p }, [i && (0, n.createElement)('title', { key: 'svg-title' }, i), ...r.map(([e, t]) => (0, n.createElement)(e, t)), ...(Array.isArray(d) ? d : [d])]));
    return ((s.displayName = `${a}`), s);
   };
  },
  20201(e, t, a) {
   a.d(t, { Ay: () => l });
   var n = a(86070),
    o = a(30758);
   const r = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function s(e, t, a, n, o) {
    const r = { '@context': 'https://schema.org', '@type': 'VideoObject', name: o?.name || t, thumbnailUrl: [o?.thumbnailUrl || a], embedUrl: o?.embedUrl || `${n}/embed/${e}`, contentUrl: o?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(o?.description && { description: o.description }), ...(o?.uploadDate && { uploadDate: o.uploadDate }), ...(o?.duration && { duration: o.duration }) };
    return JSON.stringify(r);
   }
   const l = o.forwardRef(function (e, t) {
    const [a, l] = o.useState(!1),
     [i, c] = o.useState(e.alwaysLoadIframe || !1),
     d = encodeURIComponent(e.id),
     p = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     h = e.title,
     u = e.poster || 'hqdefault',
     y = e.announce || 'Watch',
     g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     v = o.useMemo(() => {
      const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: d } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, a) => {
         t.append(a, e);
        }),
       t
      );
     }, [e.muted, g, e.enableJsApi, e.playlist, d, e.params]),
     k = o.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     f = o.useMemo(() => (e.playlist ? `${k}/embed/videoseries?${v.toString()}` : `${k}/embed/${d}?${v.toString()}`), [e.playlist, k, d, v]),
     m = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
     b = e.webp ? 'webp' : 'jpg',
     w = e.webp ? 'vi_webp' : 'vi',
     M = m
      ? ((e, t, a, n = 'maxresdefault') => {
         const [s, l] = (0, o.useState)('');
         return (
          (0, o.useEffect)(() => {
           const o = `https://img.youtube.com/${t}/${e}/${n}.${a}`,
            s = `https://img.youtube.com/${t}/${e}/hqdefault.${a}`,
            i = r[n],
            c = new Image();
           ((c.onload = () => {
            c.width < i ? l(s) : l(o);
           }),
            (c.onerror = () => l(s)),
            (c.src = o));
          }, [e, t, a, n]),
          s
         );
        })(e.id, w, b, u)
      : null,
     A = o.useMemo(() => e.thumbnail || M || `https://i.ytimg.com/${w}/${e.playlist ? p : d}/${u}.${b}`, [e.thumbnail, M, w, e.playlist, p, d, u, b]),
     j = e.activatedClass || 'lyt-activated',
     C = e.adNetwork || !1,
     P = e.aspectHeight || 9,
     x = e.aspectWidth || 16,
     E = e.iframeClass || '',
     $ = e.playerClass || 'lty-playbtn',
     S = e.wrapperClass || 'yt-lite',
     O = o.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     R = e.rel ? 'prefetch' : 'preload',
     L = e.containerElement || 'article',
     N = !1 !== e.noscriptFallback,
     T = () => {
      i || c(!0);
     };
    return (
     o.useEffect(() => {
      i && (O(), e.focusOnLoad && 'object' == typeof t && t?.current && t.current.focus());
     }, [i, O, e.focusOnLoad, t]),
     o.useEffect(() => {
      if (!i || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
      let a = !1,
       n = !1;
      const o = (n) => {
       if ('https://www.youtube.com' !== n.origin && 'https://www.youtube-nocookie.com' !== n.origin) return;
       let o;
       try {
        o = 'string' == typeof n.data ? JSON.parse(n.data) : n.data;
       } catch {
        return;
       }
       switch (o.event) {
        case 'onReady':
         a || ((a = !0), e.onReady && e.onReady({ videoId: e.id, title: h }));
         break;
        case 'infoDelivery':
         if (void 0 !== o.info?.playerState) {
          const a = o.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: a, currentTime: o.info.currentTime, duration: o.info.duration }), a)) {
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
          const a = o.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: a, currentTime: o.info.currentTime, duration: o.info.duration }), a)) {
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
       s = () => {
        'object' == typeof t && t?.current?.contentWindow && t.current.contentWindow.postMessage('{"event":"listening","id":"' + d + '"}', '*');
       },
       l = () => {
        n ||
         ((n = !0),
         s(),
         [100, 300, 600, 1200, 2400].forEach((e) => {
          r.push(setTimeout(s, e));
         }));
       };
      return (
       'object' == typeof t && t?.current
        ? (t.current.addEventListener('load', l), 'complete' === t.current.contentDocument?.readyState && l())
        : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
           r.push(setTimeout(s, e));
          }),
       () => {
        (window.removeEventListener('message', o), r.forEach(clearTimeout), 'object' == typeof t && t?.current && t.current.removeEventListener('load', l));
       }
      );
     }, [i, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, d, h, t]),
     (0, n.jsxs)(n.Fragment, {
      children: [
       !e.lazyLoad && (0, n.jsx)('link', { rel: R, href: A, as: 'image' }),
       (0, n.jsx)(n.Fragment, { children: a && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)('link', { rel: 'preconnect', href: k }), (0, n.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), C && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, n.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, n.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: s(e.id, h, A, k, e.seo) } }),
       N && !e.playlist && (0, n.jsx)('noscript', { children: (0, n.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${h} on YouTube`, children: ['Watch "', h, '" on YouTube'] }) }),
       (0, n.jsxs)(L, {
        onPointerOver: () => {
         a || l(!0);
        },
        onClick: T,
        className: `${S} ${i ? j : ''}`,
        'data-title': h,
        role: i || e.lazyLoad ? void 0 : 'img',
        'aria-label': i ? void 0 : `${h} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${A})` }), '--aspect-ratio': (P / x) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !i && (0, n.jsx)('img', { src: A, alt: `${h} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !i && (0, n.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && i) && (0, n.jsx)('button', { type: 'button', className: $, 'aria-label': `${y} ${h}`, 'aria-hidden': i || void 0, tabIndex: i ? -1 : 0, onClick: T, children: (0, n.jsx)('span', { className: 'lty-visually-hidden', children: y }) }), i && (0, n.jsx)('iframe', { ref: t, className: E, title: h, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: f, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  23436(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'file-unknown', 'FileUnknown', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2', key: 'svg-1' }],
    ['path', { d: 'M12 17v.01', key: 'svg-2' }],
    ['path', { d: 'M12 14a1.5 1.5 0 1 0 -1.14 -2.474', key: 'svg-3' }],
   ]);
  },
  24214(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'text-size', 'TextSize', [
    ['path', { d: 'M3 7v-2h13v2', key: 'svg-0' }],
    ['path', { d: 'M10 5v14', key: 'svg-1' }],
    ['path', { d: 'M12 19h-4', key: 'svg-2' }],
    ['path', { d: 'M15 13v-1h6v1', key: 'svg-3' }],
    ['path', { d: 'M18 12v7', key: 'svg-4' }],
    ['path', { d: 'M17 19h2', key: 'svg-5' }],
   ]);
  },
  35193(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'palette', 'Palette', [
    ['path', { d: 'M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25', key: 'svg-0' }],
    ['path', { d: 'M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-1' }],
    ['path', { d: 'M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-2' }],
    ['path', { d: 'M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-3' }],
   ]);
  },
  43864(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'shadow', 'Shadow', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M13 12h5', key: 'svg-1' }],
    ['path', { d: 'M13 15h4', key: 'svg-2' }],
    ['path', { d: 'M13 18h1', key: 'svg-3' }],
    ['path', { d: 'M13 9h4', key: 'svg-4' }],
    ['path', { d: 'M13 6h1', key: 'svg-5' }],
   ]);
  },
  56561(e, t, a) {
   a.d(t, { f: () => p });
   var n = a(15540),
    o = a(69967),
    r = a(86070),
    s = a(13526),
    l = a(30758),
    i = ['children', 'className', 'purpose'];
   function c(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     (t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      a.push.apply(a, n));
    }
    return a;
   }
   function d(e) {
    for (var t = 1; t < arguments.length; t++) {
     var a = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? c(Object(a), !0).forEach(function (t) {
         (0, n.A)(e, t, a[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
        : c(Object(a)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
          });
    }
    return e;
   }
   var p = (0, l.forwardRef)(function (e, t) {
    var a = e.children,
     l = e.className,
     c = e.purpose,
     p = (0, o.A)(e, i);
    return (0, r.jsx)('p', d(d({ className: (0, s.$)('nl-paragraph', (0, n.A)({}, 'nl-paragraph--lead', 'lead' === c), l), ref: t }, p), {}, { children: 'lead' === c ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: a }) : a }));
   });
   p.displayName = 'Paragraph';
  },
  58315(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'mood-sad', 'MoodSad', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
  60529(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'user', 'User', [
    ['path', { d: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0', key: 'svg-0' }],
    ['path', { d: 'M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2', key: 'svg-1' }],
   ]);
  },
  64249(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  73563(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'number', 'Number', [
    ['path', { d: 'M4 17v-10l7 10v-10', key: 'svg-0' }],
    ['path', { d: 'M15 17h5', key: 'svg-1' }],
    ['path', { d: 'M15 10a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0', key: 'svg-2' }],
   ]);
  },
  79532(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'underline', 'Underline', [
    ['path', { d: 'M7 5v5a5 5 0 0 0 10 0v-5', key: 'svg-0' }],
    ['path', { d: 'M5 19h14', key: 'svg-1' }],
   ]);
  },
  82999(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'pointer', 'Pointer', [['path', { d: 'M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563', key: 'svg-0' }]]);
  },
  90578(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'calendar-event', 'CalendarEvent', [
    ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12', key: 'svg-0' }],
    ['path', { d: 'M16 3l0 4', key: 'svg-1' }],
    ['path', { d: 'M8 3l0 4', key: 'svg-2' }],
    ['path', { d: 'M4 11l16 0', key: 'svg-3' }],
    ['path', { d: 'M8 15h2v2h-2l0 -2', key: 'svg-4' }],
   ]);
  },
  91525(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'file-typography', 'FileTypography', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2', key: 'svg-1' }],
    ['path', { d: 'M11 18h2', key: 'svg-2' }],
    ['path', { d: 'M12 18v-7', key: 'svg-3' }],
    ['path', { d: 'M9 12v-1h6v1', key: 'svg-4' }],
   ]);
  },
  92081(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'bold', 'Bold', [
    ['path', { d: 'M7 5h6a3.5 3.5 0 0 1 0 7h-6l0 -7', key: 'svg-0' }],
    ['path', { d: 'M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7', key: 'svg-1' }],
   ]);
  },
  96345(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'chevron-down', 'ChevronDown', [['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]]);
  },
 },
]);
