/*! For license information please see 5c0cafdc.9b08381b.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50186],
 {
  790(e) {
   e.exports = [];
  },
  8671(e, t, n) {
   (n.r(t), n.d(t, { assets: () => m, contentTitle: () => d, default: () => h, frontMatter: () => c, metadata: () => s, toc: () => u }));
   const s = JSON.parse('{"id":"community/events/design-systems-week/en/program","title":"Program","description":"Program for the Design Systems Week 2026 organised by NL Design System","source":"@site/docs/community/events/design-systems-week/en/program.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week-2026/en/program","permalink":"/events/design-systems-week-2026/en/program","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/program.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Program","lang":"en","description":"Program for the Design Systems Week 2026 organised by NL Design System","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Program","pagination_label":"Design Systems Week 2026","sidebar_position":2,"slug":"/events/design-systems-week-2026/en/program","translations":{"nl":"/events/design-systems-week-2026/programma/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 October, online"},"sidebar":"community","previous":{"title":"About Design Systems Week","permalink":"/events/design-systems-week/en"},"next":{"title":"Timetable","permalink":"/events/design-systems-week-2026/en/timetable"}}');
   var a = n(86070),
    i = n(18439),
    o = n(46447),
    r = n(64249),
    l = (n(790), n(86109), n(31439), n(51130));
   const c = { title: 'Program', lang: 'en', description: 'Program for the Design Systems Week 2026 organised by NL Design System', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Program', pagination_label: 'Design Systems Week 2026', sidebar_position: 2, slug: '/events/design-systems-week-2026/en/program', translations: { nl: '/events/design-systems-week-2026/programma/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 October, online' },
    d = 'Design Systems Week settings.year',
    m = {},
    u = [];
   function p(e) {
    const t = { h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)('div', { lang: 'en', children: [(0, a.jsx)(t.header, { children: (0, a.jsxs)(t.h1, { id: 'design-systems-week-settingsyear', children: ['Design Systems Week ', l.Ok] }) }), (0, a.jsx)(o.fz, { lead: !0, children: (0, a.jsxs)(t.p, { children: ['NL Design System is organising the Design Systems Week for the fifth time. It will feature a number of short talks\nabout the how and why of design systems. All online. From ', l.en.M, ', we will cover subjects like\nmanaging design systems, integrating accessibility, user research and code.'] }) }), (0, a.jsxs)(o.e2, { children: [(0, a.jsxs)(o.vx, { href: `/events/design-systems-week-${l.Ok}/en/timetable`, appearance: 'primary-action-button', children: ['View the timetable', (0, a.jsx)(r.A, {})] }), !!l.MX && (0, a.jsxs)(o.vx, { href: l.MX, appearance: 'secondary-action-button', children: ['Use Miro', (0, a.jsx)(r.A, {})] })] })] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
  18439(e, t, n) {
   n.d(t, { R: () => o, x: () => r });
   var s = n(30758);
   const a = {},
    i = s.createContext(a);
   function o(e) {
    const t = s.useContext(i);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function r(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), s.createElement(i.Provider, { value: t }, e.children));
   }
  },
  18652(e, t, n) {
   n.d(t, { A: () => i });
   var s = n(30758),
    a = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const i = (e, t, n, i) => {
    const o = (0, s.forwardRef)(({ color: n = 'currentColor', size: o = 24, stroke: r = 2, title: l, className: c, children: d, ...m }, u) => (0, s.createElement)('svg', { ref: u, ...a[e], width: o, height: o, className: ['tabler-icon', `tabler-icon-${t}`, c].join(' '), ...('filled' === e ? { fill: n } : { strokeWidth: r, stroke: n }), ...m }, [l && (0, s.createElement)('title', { key: 'svg-title' }, l), ...i.map(([e, t]) => (0, s.createElement)(e, t)), ...(Array.isArray(d) ? d : [d])]));
    return ((o.displayName = `${n}`), o);
   };
  },
  31439(e, t, n) {
   n.d(t, { H: () => c });
   var s = n(90578),
    a = n(46447),
    i = n(13526),
    o = n(69280),
    r = n(86070);
   const l = new Date().toISOString(),
    c = ({ lang: e = 'nl', headingLevel: t = 3, allSpeakers: n, videoId: c, children: d, allSessions: m, sessionId: u }) => {
     const p = m?.find(({ uuid: e }) => u === e),
      h = p && p.speakers.map((e) => n[e]).filter(Boolean),
      g = [c, p?.videoId, ...(p?.videoIds ?? [])].filter(Boolean);
     return p ? (0, r.jsxs)('article', { className: (0, i.A)('ma-dsw-session'), children: [(0, r.jsx)(a.DZ, { level: t, className: 'ma-dsw-session__title', id: p.subject.toLowerCase().replace(/\s/gi, '-'), children: p.subject }), (0, r.jsx)(a.fz, { className: 'ma-dsw-session__subtitle', lead: !0, children: h && h.map((e) => (e?.organisation ? `${e.name} - ${e.organisation}` : e.name)).join(' & ') }), g.length > 0 && g.map((e) => (0, r.jsx)(o.L, { id: e, title: p.subject, style: { marginBlock: '20px' } }, e)), p && p.isoDateTime && p.isoDateTime > l ? (0, r.jsx)(a.fz, { children: (0, r.jsx)('time', { dateTime: p.isoDateTime, children: new Intl.DateTimeFormat(e, { dateStyle: 'full', timeStyle: 'nl' === e ? 'short' : 'full', timeZone: 'Europe/Amsterdam' }).format(new Date(p.isoDateTime)) }) }) : (0, r.jsx)(r.Fragment, {}), d, 'nl' === e && h.find(({ language: e }) => 'nl' !== e) && (0, r.jsxs)(a.fz, { children: [(0, r.jsx)('b', { children: 'Goed te weten:' }), ' Deze sessie is in het Engels.'] }), p.captioned ? (p.captionId ? (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(a.fz, { children: ['nl' === e ? (0, r.jsx)(r.Fragment, { children: (0, r.jsx)('b', { children: 'Bij deze sessie is een schrijftolk aanwezig: ' }) }) : (0, r.jsx)(r.Fragment, { children: (0, r.jsx)('b', { children: 'Live captioning is available for this session: ' }) }), (0, r.jsxs)('a', { href: `https://text-on-tap.live/#e=${p.captionId}`, children: [(0, r.jsxs)('span', { className: 'sr-only', children: [p.subject, ' '] }), 'nl' === e ? 'in de browser' : 'in the browser'] }), 'nl' === e ? ' of ' : ' or ', (0, r.jsxs)('a', { href: `https://text-on-tap.live/openoverlay.html?e=${p.captionId}`, children: [(0, r.jsxs)('span', { className: 'sr-only', children: [p.subject, ' '] }), 'nl' === e ? 'met de Overlay tool' : 'with the de Overlay tool'] })] }) }) : 'nl' === e ? (0, r.jsx)(a.fz, { children: 'Voor deze sessie hebben we nog geen schrijftolk gevonden' }) : (0, r.jsx)(r.Fragment, {})) : (0, r.jsx)(r.Fragment, {}), (0, r.jsx)('aside', { className: (0, i.A)('ma-dsw-session__speakers'), children: h.map((t, n) => (0, r.jsxs)('div', { className: (0, i.A)('ma-dsw-session__speaker', 'ma-dsw-speaker'), children: [(0, r.jsx)('img', { className: (0, i.A)('ma-dsw-speaker__image'), src: t.image.src, alt: t.image.alt }), (0, r.jsx)(a.fz, { className: (0, i.A)('ma-dsw-speaker__description'), children: t.description[e] })] }, n)) }), p && p.icalLink && !c ? (0, r.jsx)(a.fz, { children: (0, r.jsxs)(a.vx, { href: p.icalLink, download: p.icalLink, appearance: 'primary-action-button', children: [(0, r.jsx)(a.In, { children: (0, r.jsx)(s.A, {}) }), (0, r.jsx)('span', { children: 'nl' === e ? (0, r.jsxs)(r.Fragment, { children: ['Zet', (0, r.jsx)('span', { className: 'sr-only', children: p.subject }), ' in je agenda'] }) : (0, r.jsxs)(r.Fragment, { children: ['Add', (0, r.jsx)('span', { className: 'sr-only', children: p.subject }), ' to your calendar'] }) })] }) }) : null] }) : (0, r.jsx)(r.Fragment, {});
    };
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  64249(e, t, n) {
   n.d(t, { A: () => s });
   const s = (0, n(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  69280(e, t, n) {
   n.d(t, { L: () => l });
   var s = n(86070),
    a = n(30758);
   const i = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function o(e, t, n, s, a) {
    const i = { '@context': 'https://schema.org', '@type': 'VideoObject', name: a?.name || t, thumbnailUrl: [a?.thumbnailUrl || n], embedUrl: a?.embedUrl || `${s}/embed/${e}`, contentUrl: a?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(a?.description && { description: a.description }), ...(a?.uploadDate && { uploadDate: a.uploadDate }), ...(a?.duration && { duration: a.duration }) };
    return JSON.stringify(i);
   }
   const r = a.forwardRef(function (e, t) {
     const [n, r] = a.useState(!1),
      [l, c] = a.useState(e.alwaysLoadIframe || !1),
      d = encodeURIComponent(e.id),
      m = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      u = e.title,
      p = e.poster || 'hqdefault',
      h = e.announce || 'Watch',
      g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      y = a.useMemo(() => {
       const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: d } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, n) => {
          t.append(n, e);
         }),
        t
       );
      }, [e.muted, g, e.enableJsApi, e.playlist, d, e.params]),
      f = a.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      b = a.useMemo(() => (e.playlist ? `${f}/embed/videoseries?${y.toString()}` : `${f}/embed/${d}?${y.toString()}`), [e.playlist, f, d, y]),
      w = !e.thumbnail && !e.playlist && 'maxresdefault' === p,
      k = e.webp ? 'webp' : 'jpg',
      v = e.webp ? 'vi_webp' : 'vi',
      j = w
       ? ((e, t, n, s = 'maxresdefault') => {
          const [o, r] = (0, a.useState)('');
          return (
           (0, a.useEffect)(() => {
            const a = `https://img.youtube.com/${t}/${e}/${s}.${n}`,
             o = `https://img.youtube.com/${t}/${e}/hqdefault.${n}`,
             l = i[s],
             c = new Image();
            ((c.onload = () => {
             c.width < l ? r(o) : r(a);
            }),
             (c.onerror = () => r(o)),
             (c.src = a));
           }, [e, t, n, s]),
           o
          );
         })(e.id, v, k, p)
       : null,
      x = a.useMemo(() => e.thumbnail || j || `https://i.ytimg.com/${v}/${e.playlist ? m : d}/${p}.${k}`, [e.thumbnail, j, v, e.playlist, m, d, p, k]),
      S = e.activatedClass || 'lyt-activated',
      C = e.adNetwork || !1,
      _ = e.aspectHeight || 9,
      $ = e.aspectWidth || 16,
      P = e.iframeClass || '',
      N = e.playerClass || 'lty-playbtn',
      D = e.wrapperClass || 'yt-lite',
      E = a.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      L = e.rel ? 'prefetch' : 'preload',
      A = e.containerElement || 'article',
      I = !1 !== e.noscriptFallback,
      M = () => {
       l || c(!0);
      };
     return (
      a.useEffect(() => {
       l && (E(), e.focusOnLoad && 'object' == typeof t && t?.current && t.current.focus());
      }, [l, E, e.focusOnLoad, t]),
      a.useEffect(() => {
       if (!l || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
       let n = !1,
        s = !1;
       const a = (s) => {
        if ('https://www.youtube.com' !== s.origin && 'https://www.youtube-nocookie.com' !== s.origin) return;
        let a;
        try {
         a = 'string' == typeof s.data ? JSON.parse(s.data) : s.data;
        } catch {
         return;
        }
        switch (a.event) {
         case 'onReady':
          n || ((n = !0), e.onReady && e.onReady({ videoId: e.id, title: u }));
          break;
         case 'infoDelivery':
          if (void 0 !== a.info?.playerState) {
           const n = a.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: n, currentTime: a.info.currentTime, duration: a.info.duration }), n)) {
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
          (void 0 !== a.info?.playbackRate && e.onPlaybackRateChange?.(a.info.playbackRate), void 0 !== a.info?.playbackQuality && e.onPlaybackQualityChange?.(a.info.playbackQuality));
          break;
         case 'onStateChange':
          if (void 0 !== a.info?.playerState) {
           const n = a.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: n, currentTime: a.info.currentTime, duration: a.info.duration }), n)) {
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
          if (a.info && 'errorCode' in a.info) {
           const t = a.info.errorCode;
           e.onError && e.onError(t);
          }
          break;
         case 'onPlaybackRateChange':
          void 0 !== a.info?.playbackRate && e.onPlaybackRateChange?.(a.info.playbackRate);
          break;
         case 'onPlaybackQualityChange':
          void 0 !== a.info?.playbackQuality && e.onPlaybackQualityChange?.(a.info.playbackQuality);
        }
       };
       window.addEventListener('message', a);
       const i = [],
        o = () => {
         'object' == typeof t && t?.current?.contentWindow && t.current.contentWindow.postMessage('{"event":"listening","id":"' + d + '"}', '*');
        },
        r = () => {
         s ||
          ((s = !0),
          o(),
          [100, 300, 600, 1200, 2400].forEach((e) => {
           i.push(setTimeout(o, e));
          }));
        };
       return (
        'object' == typeof t && t?.current
         ? (t.current.addEventListener('load', r), 'complete' === t.current.contentDocument?.readyState && r())
         : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
            i.push(setTimeout(o, e));
           }),
        () => {
         (window.removeEventListener('message', a), i.forEach(clearTimeout), 'object' == typeof t && t?.current && t.current.removeEventListener('load', r));
        }
       );
      }, [l, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, d, u, t]),
      (0, s.jsxs)(s.Fragment, {
       children: [
        !e.lazyLoad && (0, s.jsx)('link', { rel: L, href: x, as: 'image' }),
        (0, s.jsx)(s.Fragment, { children: n && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('link', { rel: 'preconnect', href: f }), (0, s.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), C && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, s.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, s.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: o(e.id, u, x, f, e.seo) } }),
        I && !e.playlist && (0, s.jsx)('noscript', { children: (0, s.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
        (0, s.jsxs)(A, {
         onPointerOver: () => {
          n || r(!0);
         },
         onClick: M,
         className: `${D} ${l ? S : ''}`,
         'data-title': u,
         role: l || e.lazyLoad ? void 0 : 'img',
         'aria-label': l ? void 0 : `${u} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (_ / $) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !l && (0, s.jsx)('img', { src: x, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !l && (0, s.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && l) && (0, s.jsx)('button', { type: 'button', className: N, 'aria-label': `${h} ${u}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, onClick: M, children: (0, s.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), l && (0, s.jsx)('iframe', { ref: t, className: P, title: u, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: b, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    l = ({ id: e, title: t, ...n }) => (0, s.jsx)(r, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: t, poster: 'maxresdefault', ...n });
  },
  86109(e) {
   e.exports = {};
  },
  90578(e, t, n) {
   n.d(t, { A: () => s });
   const s = (0, n(18652).A)('outline', 'calendar-event', 'CalendarEvent', [
    ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12', key: 'svg-0' }],
    ['path', { d: 'M16 3l0 4', key: 'svg-1' }],
    ['path', { d: 'M8 3l0 4', key: 'svg-2' }],
    ['path', { d: 'M4 11l16 0', key: 'svg-3' }],
    ['path', { d: 'M8 15h2v2h-2l0 -2', key: 'svg-4' }],
   ]);
  },
 },
]);
