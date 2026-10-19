/*! For license information please see 12165.f2f6a96c.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [12165],
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
  18652(e, t, a) {
   a.d(t, { A: () => o });
   var n = a(30758),
    r = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const o = (e, t, a, o) => {
    const i = (0, n.forwardRef)(({ color: a = 'currentColor', size: i = 24, stroke: l = 2, title: d, className: s, children: c, ...h }, u) => (0, n.createElement)('svg', { ref: u, ...r[e], width: i, height: i, className: ['tabler-icon', `tabler-icon-${t}`, s].join(' '), ...('filled' === e ? { fill: a } : { strokeWidth: l, stroke: a }), ...h }, [d && (0, n.createElement)('title', { key: 'svg-title' }, d), ...o.map(([e, t]) => (0, n.createElement)(e, t)), ...(Array.isArray(c) ? c : [c])]));
    return ((i.displayName = `${a}`), i);
   };
  },
  20201(e, t, a) {
   a.d(t, { Ay: () => l });
   var n = a(86070),
    r = a(30758);
   const o = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function i(e, t, a, n, r) {
    const o = { '@context': 'https://schema.org', '@type': 'VideoObject', name: r?.name || t, thumbnailUrl: [r?.thumbnailUrl || a], embedUrl: r?.embedUrl || `${n}/embed/${e}`, contentUrl: r?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(r?.description && { description: r.description }), ...(r?.uploadDate && { uploadDate: r.uploadDate }), ...(r?.duration && { duration: r.duration }) };
    return JSON.stringify(o);
   }
   const l = r.forwardRef(function (e, t) {
    const [a, l] = r.useState(!1),
     [d, s] = r.useState(e.alwaysLoadIframe || !1),
     c = encodeURIComponent(e.id),
     h = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     u = e.title,
     p = e.poster || 'hqdefault',
     y = e.announce || 'Watch',
     g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     v = r.useMemo(() => {
      const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, a) => {
         t.append(a, e);
        }),
       t
      );
     }, [e.muted, g, e.enableJsApi, e.playlist, c, e.params]),
     k = r.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     m = r.useMemo(() => (e.playlist ? `${k}/embed/videoseries?${v.toString()}` : `${k}/embed/${c}?${v.toString()}`), [e.playlist, k, c, v]),
     f = !e.thumbnail && !e.playlist && 'maxresdefault' === p,
     b = e.webp ? 'webp' : 'jpg',
     w = e.webp ? 'vi_webp' : 'vi',
     M = f
      ? ((e, t, a, n = 'maxresdefault') => {
         const [i, l] = (0, r.useState)('');
         return (
          (0, r.useEffect)(() => {
           const r = `https://img.youtube.com/${t}/${e}/${n}.${a}`,
            i = `https://img.youtube.com/${t}/${e}/hqdefault.${a}`,
            d = o[n],
            s = new Image();
           ((s.onload = () => {
            s.width < d ? l(i) : l(r);
           }),
            (s.onerror = () => l(i)),
            (s.src = r));
          }, [e, t, a, n]),
          i
         );
        })(e.id, w, b, p)
      : null,
     x = r.useMemo(() => e.thumbnail || M || `https://i.ytimg.com/${w}/${e.playlist ? h : c}/${p}.${b}`, [e.thumbnail, M, w, e.playlist, h, c, p, b]),
     A = e.activatedClass || 'lyt-activated',
     C = e.adNetwork || !1,
     j = e.aspectHeight || 9,
     _ = e.aspectWidth || 16,
     E = e.iframeClass || '',
     $ = e.playerClass || 'lty-playbtn',
     N = e.wrapperClass || 'yt-lite',
     S = r.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     P = e.rel ? 'prefetch' : 'preload',
     R = e.containerElement || 'article',
     L = !1 !== e.noscriptFallback,
     T = () => {
      d || s(!0);
     };
    return (
     r.useEffect(() => {
      d && (S(), e.focusOnLoad && 'object' == typeof t && t?.current && t.current.focus());
     }, [d, S, e.focusOnLoad, t]),
     r.useEffect(() => {
      if (!d || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
      let a = !1,
       n = !1;
      const r = (n) => {
       if ('https://www.youtube.com' !== n.origin && 'https://www.youtube-nocookie.com' !== n.origin) return;
       let r;
       try {
        r = 'string' == typeof n.data ? JSON.parse(n.data) : n.data;
       } catch {
        return;
       }
       switch (r.event) {
        case 'onReady':
         a || ((a = !0), e.onReady && e.onReady({ videoId: e.id, title: u }));
         break;
        case 'infoDelivery':
         if (void 0 !== r.info?.playerState) {
          const a = r.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: a, currentTime: r.info.currentTime, duration: r.info.duration }), a)) {
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
          const a = r.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: a, currentTime: r.info.currentTime, duration: r.info.duration }), a)) {
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
        'object' == typeof t && t?.current?.contentWindow && t.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
       },
       l = () => {
        n ||
         ((n = !0),
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
     }, [d, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, u, t]),
     (0, n.jsxs)(n.Fragment, {
      children: [
       !e.lazyLoad && (0, n.jsx)('link', { rel: P, href: x, as: 'image' }),
       (0, n.jsx)(n.Fragment, { children: a && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)('link', { rel: 'preconnect', href: k }), (0, n.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), C && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, n.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, n.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: i(e.id, u, x, k, e.seo) } }),
       L && !e.playlist && (0, n.jsx)('noscript', { children: (0, n.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
       (0, n.jsxs)(R, {
        onPointerOver: () => {
         a || l(!0);
        },
        onClick: T,
        className: `${N} ${d ? A : ''}`,
        'data-title': u,
        role: d || e.lazyLoad ? void 0 : 'img',
        'aria-label': d ? void 0 : `${u} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (j / _) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !d && (0, n.jsx)('img', { src: x, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !d && (0, n.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && d) && (0, n.jsx)('button', { type: 'button', className: $, 'aria-label': `${y} ${u}`, 'aria-hidden': d || void 0, tabIndex: d ? -1 : 0, onClick: T, children: (0, n.jsx)('span', { className: 'lty-visually-hidden', children: y }) }), d && (0, n.jsx)('iframe', { ref: t, className: E, title: u, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: m, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
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
  39831(e, t, a) {
   a.d(t, { Z: () => h });
   var n = a(86070),
    r = a(30758);
   function o(e) {
    var t,
     a,
     n = '';
    if ('string' == typeof e || 'number' == typeof e) n += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++) e[t] && (a = o(e[t])) && (n && (n += ' '), (n += a));
     } else for (a in e) e[a] && (n && (n += ' '), (n += a));
    return n;
   }
   function i() {
    for (var e, t, a = 0, n = '', r = arguments.length; a < r; a++) (e = arguments[a]) && (t = o(e)) && (n && (n += ' '), (n += t));
    return n;
   }
   const l = (0, r.forwardRef)(({ boxContent: e, children: t, className: a, external: r, href: o, placeholder: l, role: d, ...s }, c) => (0, n.jsx)('a', { href: l ? void 0 : o, ref: c, role: d || (l ? 'link' : void 0), className: i('utrecht-link', 'utrecht-link--html-a', { 'utrecht-link--box-content': e, 'utrecht-link--external': r, 'utrecht-link--placeholder': l }, a), 'aria-disabled': l ? 'true' : void 0, rel: r ? 'external noopener noreferrer' : void 0, ...s, children: t }));
   function d(e) {
    var t,
     a,
     n = '';
    if ('string' == typeof e || 'number' == typeof e) n += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++) e[t] && (a = d(e[t])) && (n && (n += ' '), (n += a));
     } else for (a in e) e[a] && (n && (n += ' '), (n += a));
    return n;
   }
   function s() {
    for (var e, t, a = 0, n = '', r = arguments.length; a < r; a++) (e = arguments[a]) && (t = d(e)) && (n && (n += ' '), (n += t));
    return n;
   }
   l.displayName = 'Link';
   const c = ({ level: e, ...t }) => {
     const a = 2 === e ? 'h2' : 3 === e ? 'h3' : 4 === e ? 'h4' : 5 === e ? 'h5' : 6 === e ? 'h6' : 'h1';
     return (0, n.jsx)(a, { ...t });
    },
    h = (0, r.forwardRef)(({ image: e, heading: t, headingLevel: a, href: o, Link: i, className: d, body: h, ...u }, p) => {
     const y = (0, r.useRef)(null),
      g = i || l,
      v = (0, r.useId)(),
      k = o
       ? {
          tabIndex: 0,
          role: 'link',
          onClick: () => {
           o && y.current && y.current.click();
          },
          onKeyDown: (e) => {
           ('Enter' === e.key || ' ' === e.key) && y.current && o && (e.preventDefault(), y.current.click());
          },
          'aria-labelledby': v,
         }
       : {};
     return (0, n.jsx)('div', { ref: p, className: s('utrecht-card', d, { 'utrecht-card--link': o }), ...k, ...u, children: (0, n.jsxs)('div', { className: 'utrecht-card__content', children: [(0, n.jsx)('div', { className: s('utrecht-card__heading'), children: a && t && (0, n.jsx)(c, { id: v, className: s(`utrecht-heading-${a}`, 'utrecht-card__header'), level: a, children: (0, n.jsx)(g, { ref: y, href: o, className: s('utrecht-card__link'), children: t }) }) }), e && (0, n.jsx)('div', { className: s('utrecht-card__image'), children: e }), h && (0, n.jsx)('div', { className: s('utrecht-card__body'), children: h })] }) });
    });
   ((h.displayName = 'Card'),
    ((e) => {
     if ('undefined' != typeof window) {
      const t = document.head || document.getElementsByTagName('head')[0],
       a = document.createElement('style');
      (a.appendChild(document.createTextNode(e)), t.appendChild(a));
     }
    })('.utrecht-card{background-color:var(--utrecht-card-background-color);border-radius:var(--utrecht-card-border-radius);box-shadow:var(--utrecht-card-box-shadow);color:var(--utrecht-card-color);display:flex;flex-direction:column;inline-size:var(--utrecht-card-inline-size,100%);max-inline-size:var(--utrecht-card-max-inline-size,100%);row-gap:var(--utrecht-card-row-gap)}.utrecht-card--link{cursor:pointer;text-decoration-skip-ink:none}.utrecht-card--link:hover{--utrecht-link-text-decoration:underline;--utrecht-link-text-decoration-thickness:var(--utrecht-card-link-hover-text-decoration-thickness)}.utrecht-card__heading{--utrecht-heading-color:var(--utrecht-card-heading-color);order:2;padding-inline-end:var(--utrecht-card-heading-padding-inline-end);padding-inline-start:var(--utrecht-card-heading-padding-inline-start)}.utrecht-card__image{order:1}.utrecht-card__image img:not(.utrecht-img):not(img[height]){height:auto}.utrecht-card__image img:not(.utrecht-img):not(img[width]){width:auto}.utrecht-card__image img:not(img[height]),.utrecht-card__image img:not(img[width]){max-height:100%;max-width:100%}.utrecht-card__content{display:flex;flex-direction:column;padding-block-end:var(--utrecht-card-content-padding-block-end);row-gap:var(--utrecht-card-content-row-gap)}.utrecht-card__content:not(:has(img)){padding-block-start:var(--utrecht-card-content-padding-block-start)}.utrecht-card__body{order:3;padding-inline-end:var(--utrecht-card-body-padding-inline-end);padding-inline-start:var(--utrecht-card-body-padding-inline-start)}'));
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
