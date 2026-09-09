/*! For license information please see 89ab4fc1.30eed198.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [9289],
 {
  790(e) {
   e.exports = JSON.parse('[{"uuid":"1bfd50e8-d845-492b-9553-51cae7dafd5b","isoDateTime":"2026-10-26T12:00:00.000Z","speakers":["DrStephDriver"],"subject":"Tracking conformance data within the code-base","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":null},{"uuid":"b919f274-381c-41db-9d1d-cc3b6934ce93","isoDateTime":"2026-10-26T14:00:00.000Z","speakers":["EricVanMullekom","MiekeTenDam"],"subject":"Digitale toegankelijkheid van kaartviewers","language":{"abbr":"NL","description":"Nederlands"},"videoId":null,"icalLink":null},{"uuid":"a23217db-b17d-4e97-ad46-1fd7d113c567","isoDateTime":"2026-10-27T14:00:00.000Z","speakers":["MarionCouesnon"],"subject":"Switching design systems without compromising accessibility","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":null}]');
  },
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => o });
   var a = t(30758);
   const s = {},
    i = a.createContext(s);
   function r(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), a.createElement(i.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, t) {
   t.d(n, { A: () => i });
   var a = t(30758),
    s = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const i = (e, n, t, i) => {
    const r = (0, a.forwardRef)(({ color: t = 'currentColor', size: r = 24, stroke: o = 2, title: l, className: d, children: c, ...m }, p) => (0, a.createElement)('svg', { ref: p, ...s[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: o, stroke: t }), ...m }, [l && (0, a.createElement)('title', { key: 'svg-title' }, l), ...i.map(([e, n]) => (0, a.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((r.displayName = `${t}`), r);
   };
  },
  19472(e, n, t) {
   t.d(n, { L: () => i });
   var a = t(20201),
    s = t(86070);
   const i = ({ id: e, title: n, ...t }) => (0, s.jsx)(a.Ay, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...t });
  },
  20201(e, n, t) {
   t.d(n, { Ay: () => o });
   var a = t(86070),
    s = t(30758);
   const i = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, n, t, a, s) {
    const i = { '@context': 'https://schema.org', '@type': 'VideoObject', name: s?.name || n, thumbnailUrl: [s?.thumbnailUrl || t], embedUrl: s?.embedUrl || `${a}/embed/${e}`, contentUrl: s?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(s?.description && { description: s.description }), ...(s?.uploadDate && { uploadDate: s.uploadDate }), ...(s?.duration && { duration: s.duration }) };
    return JSON.stringify(i);
   }
   const o = s.forwardRef(function (e, n) {
    const [t, o] = s.useState(!1),
     [l, d] = s.useState(e.alwaysLoadIframe || !1),
     c = encodeURIComponent(e.id),
     m = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     p = e.title,
     g = e.poster || 'hqdefault',
     h = e.announce || 'Watch',
     u = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     k = s.useMemo(() => {
      const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(u ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
         n.append(t, e);
        }),
       n
      );
     }, [e.muted, u, e.enableJsApi, e.playlist, c, e.params]),
     b = s.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     f = s.useMemo(() => (e.playlist ? `${b}/embed/videoseries?${k.toString()}` : `${b}/embed/${c}?${k.toString()}`), [e.playlist, b, c, k]),
     v = !e.thumbnail && !e.playlist && 'maxresdefault' === g,
     y = e.webp ? 'webp' : 'jpg',
     j = e.webp ? 'vi_webp' : 'vi',
     w = v
      ? ((e, n, t, a = 'maxresdefault') => {
         const [r, o] = (0, s.useState)('');
         return (
          (0, s.useEffect)(() => {
           const s = `https://img.youtube.com/${n}/${e}/${a}.${t}`,
            r = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
            l = i[a],
            d = new Image();
           ((d.onload = () => {
            d.width < l ? o(r) : o(s);
           }),
            (d.onerror = () => o(r)),
            (d.src = s));
          }, [e, n, t, a]),
          r
         );
        })(e.id, j, y, g)
      : null,
     x = s.useMemo(() => e.thumbnail || w || `https://i.ytimg.com/${j}/${e.playlist ? m : c}/${g}.${y}`, [e.thumbnail, w, j, e.playlist, m, c, g, y]),
     S = e.activatedClass || 'lyt-activated',
     D = e.adNetwork || !1,
     M = e.aspectHeight || 9,
     A = e.aspectWidth || 16,
     N = e.iframeClass || '',
     O = e.playerClass || 'lty-playbtn',
     _ = e.wrapperClass || 'yt-lite',
     z = s.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     C = e.rel ? 'prefetch' : 'preload',
     P = e.containerElement || 'article',
     T = !1 !== e.noscriptFallback,
     E = () => {
      l || d(!0);
     };
    return (
     s.useEffect(() => {
      l && (z(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
     }, [l, z, e.focusOnLoad, n]),
     s.useEffect(() => {
      if (!l || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
      let t = !1,
       a = !1;
      const s = (a) => {
       if ('https://www.youtube.com' !== a.origin && 'https://www.youtube-nocookie.com' !== a.origin) return;
       let s;
       try {
        s = 'string' == typeof a.data ? JSON.parse(a.data) : a.data;
       } catch {
        return;
       }
       switch (s.event) {
        case 'onReady':
         t || ((t = !0), e.onReady && e.onReady({ videoId: e.id, title: p }));
         break;
        case 'infoDelivery':
         if (void 0 !== s.info?.playerState) {
          const t = s.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: s.info.currentTime, duration: s.info.duration }), t)) {
           case 1:
            e.onPlay?.();
            break;
           case 2:
            e.onPause?.();
            break;
           case 0:
            (e.onEnd?.(), e.stopOnEnd && 'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'));
            break;
           case 3:
            e.onBuffering?.();
          }
         }
         (void 0 !== s.info?.playbackRate && e.onPlaybackRateChange?.(s.info.playbackRate), void 0 !== s.info?.playbackQuality && e.onPlaybackQualityChange?.(s.info.playbackQuality));
         break;
        case 'onStateChange':
         if (void 0 !== s.info?.playerState) {
          const t = s.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: s.info.currentTime, duration: s.info.duration }), t)) {
           case 1:
            e.onPlay?.();
            break;
           case 2:
            e.onPause?.();
            break;
           case 0:
            (e.onEnd?.(), e.stopOnEnd && 'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'));
            break;
           case 3:
            e.onBuffering?.();
          }
         }
         break;
        case 'onError':
         if (s.info && 'errorCode' in s.info) {
          const n = s.info.errorCode;
          e.onError && e.onError(n);
         }
         break;
        case 'onPlaybackRateChange':
         void 0 !== s.info?.playbackRate && e.onPlaybackRateChange?.(s.info.playbackRate);
         break;
        case 'onPlaybackQualityChange':
         void 0 !== s.info?.playbackQuality && e.onPlaybackQualityChange?.(s.info.playbackQuality);
       }
      };
      window.addEventListener('message', s);
      const i = [],
       r = () => {
        'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
       },
       o = () => {
        a ||
         ((a = !0),
         r(),
         [100, 300, 600, 1200, 2400].forEach((e) => {
          i.push(setTimeout(r, e));
         }));
       };
      return (
       'object' == typeof n && n?.current
        ? (n.current.addEventListener('load', o), 'complete' === n.current.contentDocument?.readyState && o())
        : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
           i.push(setTimeout(r, e));
          }),
       () => {
        (window.removeEventListener('message', s), i.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', o));
       }
      );
     }, [l, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, p, n]),
     (0, a.jsxs)(a.Fragment, {
      children: [
       !e.lazyLoad && (0, a.jsx)('link', { rel: C, href: x, as: 'image' }),
       (0, a.jsx)(a.Fragment, { children: t && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: b }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), D && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, p, x, b, e.seo) } }),
       T && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
       (0, a.jsxs)(P, {
        onPointerOver: () => {
         t || o(!0);
        },
        onClick: E,
        className: `${_} ${l ? S : ''}`,
        'data-title': p,
        role: l || e.lazyLoad ? void 0 : 'img',
        'aria-label': l ? void 0 : `${p} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (M / A) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !l && (0, a.jsx)('img', { src: x, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !l && (0, a.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && l) && (0, a.jsx)('button', { type: 'button', className: O, 'aria-label': `${h} ${p}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, onClick: E, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), l && (0, a.jsx)('iframe', { ref: n, className: N, title: p, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: f, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  24456(e, n, t) {
   t.d(n, { F: () => r, N: () => o });
   var a = t(13526),
    s = t(84471),
    i = t(86070);
   const r = ({ children: e, ...n }) => {
     const { to: t, href: a, ...r } = n;
     let o = t || a;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, s.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: o, ...r, children: e }));
    },
    o = ({ className: e, ...n }) => (0, i.jsx)(r, { className: (0, a.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  24658(e, n, t) {
   t.d(n, { H: () => d });
   var a = t(90578),
    s = t(46447),
    i = t(13526),
    r = t(19472),
    o = t(86070);
   const l = new Date().toISOString(),
    d = ({ lang: e = 'nl', headingLevel: n = 3, allSpeakers: t, videoId: d, children: c, allSessions: m, sessionId: p }) => {
     const g = m?.find(({ uuid: e }) => p === e),
      h = g && g.speakers.map((e) => t[e]).filter(Boolean),
      u = [d, g?.videoId, ...(g?.videoIds ?? [])].filter(Boolean);
     return g ? (0, o.jsxs)('article', { className: (0, i.A)('ma-dsw-session'), children: [(0, o.jsx)(s.DZ, { level: n, className: 'ma-dsw-session__title', id: g.subject.toLowerCase().replace(/\s/gi, '-'), children: g.subject }), (0, o.jsx)(s.fz, { className: 'ma-dsw-session__subtitle', lead: !0, children: h && h.map((e) => (e?.organisation ? `${e.name} - ${e.organisation}` : e.name)).join(' & ') }), u.length > 0 && u.map((e) => (0, o.jsx)(r.L, { id: e, title: g.subject, style: { marginBlock: '20px' } }, e)), g && g.isoDateTime && g.isoDateTime > l ? (0, o.jsx)(s.fz, { children: (0, o.jsx)('time', { dateTime: g.isoDateTime, children: new Intl.DateTimeFormat(e, { dateStyle: 'full', timeStyle: 'nl' === e ? 'short' : 'full', timeZone: 'Europe/Amsterdam' }).format(new Date(g.isoDateTime)) }) }) : (0, o.jsx)(o.Fragment, {}), c, 'nl' === e && h.find(({ language: e }) => 'nl' !== e) && (0, o.jsxs)(s.fz, { children: [(0, o.jsx)('b', { children: 'Goed te weten:' }), ' Deze sessie is in het Engels.'] }), g.captioned ? (g.captionId ? (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(s.fz, { children: ['nl' === e ? (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('b', { children: 'Bij deze sessie is een schrijftolk aanwezig: ' }) }) : (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('b', { children: 'Live captioning is available for this session: ' }) }), (0, o.jsxs)('a', { href: `https://text-on-tap.live/#e=${g.captionId}`, children: [(0, o.jsxs)('span', { className: 'sr-only', children: [g.subject, ' '] }), 'nl' === e ? 'in de browser' : 'in the browser'] }), 'nl' === e ? ' of ' : ' or ', (0, o.jsxs)('a', { href: `https://text-on-tap.live/openoverlay.html?e=${g.captionId}`, children: [(0, o.jsxs)('span', { className: 'sr-only', children: [g.subject, ' '] }), 'nl' === e ? 'met de Overlay tool' : 'with the de Overlay tool'] })] }) }) : 'nl' === e ? (0, o.jsx)(s.fz, { children: 'Voor deze sessie hebben we nog geen schrijftolk gevonden' }) : (0, o.jsx)(o.Fragment, {})) : (0, o.jsx)(o.Fragment, {}), (0, o.jsx)('aside', { className: (0, i.A)('ma-dsw-session__speakers'), children: h.map((n, t) => (0, o.jsxs)('div', { className: (0, i.A)('ma-dsw-session__speaker', 'ma-dsw-speaker'), children: [(0, o.jsx)('img', { className: (0, i.A)('ma-dsw-speaker__image'), src: n.image.src, alt: n.image.alt }), (0, o.jsx)(s.fz, { className: (0, i.A)('ma-dsw-speaker__description'), dangerouslySetInnerHTML: { __html: n.description[e] } })] }, t)) }), g && g.icalLink && !d ? (0, o.jsx)(s.fz, { children: (0, o.jsxs)(s.vx, { href: g.icalLink, download: g.icalLink, appearance: 'primary-action-button', children: [(0, o.jsx)(s.In, { children: (0, o.jsx)(a.A, {}) }), (0, o.jsx)('span', { children: 'nl' === e ? (0, o.jsxs)(o.Fragment, { children: ['Zet', (0, o.jsx)('span', { className: 'sr-only', children: g.subject }), ' in je agenda'] }) : (0, o.jsxs)(o.Fragment, { children: ['Add', (0, o.jsx)('span', { className: 'sr-only', children: g.subject }), ' to your calendar'] }) })] }) }) : null] }) : (0, o.jsx)(o.Fragment, {});
    };
  },
  29680(e, n, t) {
   t.d(n, { v: () => o });
   var a = t(24456),
    s = t(13526),
    i = t(86070);
   const r = ({ className: e, children: n, purpose: t, iconStart: a, iconEnd: r, href: o }) => (0, i.jsxs)('a', { className: (0, s.A)('nl-button', e, { 'nl-button--primary': 'primary' === t, 'nl-button--secondary': 'secondary' === t, 'nl-button--subtle': 'subtle' === t }), href: o, children: [a && (0, i.jsx)('span', { className: 'nl-button__icon-start', children: a }), (0, i.jsx)('span', { className: 'nl-button__label', children: n }), r && (0, i.jsx)('span', { className: 'nl-button__icon-end', children: r })] }),
    o = globalThis.isAstro
     ? ({ appearance: e, href: n, ...t }) => {
        let a = 'primary';
        return ((a = 'secondary-action' === e ? 'secondary' : a), (0, i.jsx)(r, { purpose: a, href: n, ...t }));
       }
     : ({ appearance: e, ...n }) => (0, i.jsx)(a.F, { className: (0, s.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  35683(e, n, t) {
   t.d(n, { K: () => a.e2 });
   var a = t(29181);
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  56561(e, n, t) {
   t.d(n, { f: () => m });
   var a = t(15540),
    s = t(69967),
    i = t(86070),
    r = t(13526),
    o = t(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     (n &&
      (a = a.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, a));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, a.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var m = (0, o.forwardRef)(function (e, n) {
    var t = e.children,
     o = e.className,
     d = e.purpose,
     m = (0, s.A)(e, l);
    return (0, i.jsx)('p', c(c({ className: (0, r.$)('nl-paragraph', (0, a.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, m), {}, { children: 'lead' === d ? (0, i.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   m.displayName = 'Paragraph';
  },
  64249(e, n, t) {
   t.d(n, { A: () => a });
   const a = (0, t(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  66153(e, n, t) {
   t.d(n, { f: () => a.f });
   var a = t(56561);
  },
  84471(e, n, t) {
   t.d(n, { bo: () => s, KF: () => p, mJ: () => u, VZ: () => x, cR: () => w, Pv: () => k, qZ: () => r, kD: () => y, QQ: () => D, B2: () => g, Pc: () => l, f4: () => o, GT: () => j, fX: () => i, eQ: () => v, B_: () => f, o_: () => b });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    p = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return m(c(n));
    },
    g = (e, n) => u(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => m(c(e.projects.flatMap((e) => h(e)))),
    k = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const a = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: a, id: s, value: i }) => {
        const r = /^(.+) URL/.exec(a)[1],
         o = 'Storybook' === r ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: a, id: s, value: i, description: o };
       });
      return { frameworkName: n, tasks: a };
     });
    },
    b = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function y(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? y(e[t], [...n, t]) : []));
   }
   function j(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const w = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    x = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    S = new Set(['ics', 'json', 'pdf']),
    D = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && S.has(t);
    };
  },
  86109(e) {
   e.exports = JSON.parse('{"DrStephDriver":{"name":"Dr Steph Driver","organisation":"Open Library of Humanities","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-DrStephDriver.jpg","alt":"Dr Steph Driver"},"description":{"en":"Steph is the accessibility-specialist developer at the Open Library of Humanities.  As an assistive technology user herself, she is passionate about making open access truly accessible for everyone. She combines deep technical expertise with a passion for education, helping teams develop smarter workflows and innovative accessibility solutions. With a background spanning natural sciences, creative writing, technology and disability-activism, Steph brings a unique perspective to inclusive digital design.","nl":"Steph is ontwikkelaar en specialist op het gebied van toegankelijkheid bij de Open Library of Humanities. Als gebruiker van ondersteunende technologie zet zij zich vol passie in om open access voor iedereen werkelijk toegankelijk te maken. Ze combineert diepgaande technische expertise met een passie voor onderwijs en helpt teams bij het ontwikkelen van slimmere werkprocessen en innovatieve oplossingen voor toegankelijkheid. Met een achtergrond in de natuurwetenschappen, creatief schrijven, technologie en activisme rondom handicaps brengt Steph een uniek perspectief in op inclusief digitaal ontwerp."},"language":"en"},"MarionCouesnon":{"name":"Marion Couesnon","organisation":"Digitalservice GmbH des Bundes","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-MarionCouesnon.jpg","alt":"Marion Couesnon"},"description":{"en":"Marion is an accessibility designer based in Berlin. She has been passionate about design since 2011 and has specialised in accessibility since 2019. She currently works for DigitalService, a company owned by the German federal government. Within the organisation, she implements accessibility practices whilst contributing to the design of services, including the <a target=\\"blank\\" href=\\"https://service.justiz.de\\">Ministry of Justice\u2019s online portal</a>. Outside of work, you might spot Marion at her boxing club or knitting on her sofa.","nl":"Marion is een ontwerper gespecialiseerd in toegankelijkheid, gevestigd in Berlijn. Ze is sinds 2011 gepassioneerd door design en heeft zich sinds 2019 toegelegd op toegankelijkheid. Momenteel werkt ze bij DigitalService, een bedrijf dat eigendom is van de Duitse federale overheid. Binnen de organisatie implementeert ze toegankelijkheidsmaatregelen en draagt ze bij aan het ontwerp van diensten, waaronder het <a target=\\"blank\\" href=\\"https://service.justiz.de\\">online portaal van het ministerie van Justitie</a>. Buiten haar werk kun je Marion tegenkomen bij haar boksclub of breiend op de bank."},"language":"en"},"EricVanMullekom":{"name":"Eric van Mullekom","organisation":"Kadaster","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-EricVanMullekom.jpg","alt":"Eric van Mullekom"},"description":{"nl":"Erik is sinds 2000 als projectmanager/product owner betrokken bij softwareontwikkeling, met oog voor techniek en gebruikersgemak. Bij het Kadaster is hij als Product Owner verantwoordelijk voor <a target=\\"blank\\" href=\\"https://generiekegeocomponenten.nl\\">generiekegeocomponenten.nl</a>, <a target=\\"blank\\" href=\\"https://kaartenvannederland.nl\\">kaartenvannederland.nl</a> en <a target=\\"blank\\" href=\\"https://verbeterdekaart.nl\\">terugmeldsysteem (o.a. verbeterdekaart.nl)</a>."},"language":"nl"},"MiekeTenDam":{"name":"Mieke ten Dam","organisation":"Kadaster","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-MiekeTenDam.jpg","alt":"Mieke ten Dam"},"description":{"nl":"Mieke werkt sinds 2019 bij het Kadaster als software engineer, met digitale toegankelijkheid als specialisme. Haar scrumteam ontwikkelt en beheert diverse websites, portals en applicaties, waaronder <a target=\\"blank\\" href=\\"https://www.kadaster.nl\\">www.kadaster.nl</a>, <a target=\\"blank\\" href=\\"https://topokaarten.kadaster.nl\\">topokaarten.kadaster.nl</a> en de zakelijke <a target=\\"blank\\" href=\\"https://mijn.kadaster.nl\\">mijn.kadaster.nl</a> omgeving."},"language":"nl"}}');
  },
  89396(e, n, t) {
   (t.r(n), t.d(n, { assets: () => k, contentTitle: () => u, default: () => v, frontMatter: () => h, metadata: () => a, toc: () => b }));
   const a = JSON.parse('{"id":"community/events/design-systems-week/programma","title":"Programma","description":"Programma voor de Design Systems Week 2026","source":"@site/docs/community/events/design-systems-week/programma.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week-2026/programma","permalink":"/events/design-systems-week-2026/programma","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/programma.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Programma","description":"Programma voor de Design Systems Week 2026","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Programma","pagination_label":"Programma","sidebar_position":2,"slug":"/events/design-systems-week-2026/programma","translations":{"en":"/events/design-systems-week-2026/en/program/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 Oktober, online"},"sidebar":"community","previous":{"title":"Over Design Systems Week","permalink":"/events/design-systems-week"},"next":{"title":"Tijdschema","permalink":"/events/design-systems-week-2026/tijdschema/"}}');
   var s = t(86070),
    i = t(18439),
    r = t(29680),
    o = t(35683),
    l = t(66153),
    d = t(64249),
    c = t(790),
    m = t(86109),
    p = t(24658),
    g = t(51130);
   const h = { title: 'Programma', description: 'Programma voor de Design Systems Week 2026', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Programma', pagination_label: 'Programma', sidebar_position: 2, slug: '/events/design-systems-week-2026/programma', translations: { en: '/events/design-systems-week-2026/en/program/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 Oktober, online' },
    u = 'Programma Design Systems Week settings.year',
    k = {},
    b = [];
   function f(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsxs)(n.h1, { id: 'programma-design-systems-week-settingsyear', children: ['Programma Design Systems Week ', g.Ok] }) }), '\n', (0, s.jsx)(l.f, { purpose: 'lead', children: (0, s.jsxs)(n.p, { children: ['NL Design System organiseert in ', g.Ok, ' voor de ', g.nl.Z, ' keer de Design Systems Week. Van', ' ', '\n', (0, s.jsx)('strong', { children: g.nl.M }), ' zijn er dagelijks meerdere korte sessies van diverse organisaties online te\nvolgen over het ', (0, s.jsx)(n.strong, { children: 'hoe en waarom van design systems' }), '.'] }) }), '\n', (0, s.jsxs)(o.K, { children: [(0, s.jsxs)(r.v, { href: `/events/design-systems-week-${g.Ok}/tijdschema`, appearance: 'primary-action', children: ['Bekijk het tijdschema', (0, s.jsx)(d.A, { slot: 'icon-end' })] }), !!g.MX && (0, s.jsxs)(r.v, { href: g.MX, appearance: 'secondary-action', children: ['Gebruik Miro', (0, s.jsx)(d.A, { slot: 'icon-end' })] })] }), '\n', !g.Ic && (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(l.f, { children: 'Het tijdschema is nog niet definitief. De sessies worden de komende weken verder uitgewerkt en toegevoegd. Houd deze pagina in de gaten voor updates.' }) }), '\n', '\n', (0, s.jsxs)(p.H, { allSpeakers: m, allSessions: c, sessionId: '1bfd50e8-d845-492b-9553-51cae7dafd5b', headingLevel: 2, children: [(0, s.jsx)(l.f, { children: (0, s.jsx)(n.p, { children: 'Informatie over toegankelijkheidsconformiteit wordt vaak vastgelegd in aparte rapporten die snel verouderen. Maar\nwat als toegankelijkheidsgegevens direct naast je code zouden staan?' }) }), (0, s.jsx)(l.f, { children: (0, s.jsx)(n.p, { children: 'In deze sessie ontdek je hoe het open-source publicatieplatform Janeway zijn toegankelijkheidsproces opnieuw heeft\ningericht door gegevens over conformiteit rechtstreeks in de codebase te integreren. Elke bevinding op het gebied\nvan toegankelijkheid is gekoppeld aan de specifieke commit waarop de audit betrekking had, en wordt in verband\ngebracht met de werkzaamheden die nodig zijn voor verbetering. Dit vormt de basis voor een continu proces van\ngerichte toegankelijkheidsaudits en verbeteringen, in plaats van te vertrouwen op audits die slechts eens in de paar\njaar plaatsvinden.' }) }), (0, s.jsx)(l.f, { children: (0, s.jsx)(n.p, { children: 'Steph vertelt over de beweegredenen achter deze aanpak, de implementatie ervan en de lessen die gaandeweg zijn\ngeleerd. Of je nu ontwikkelaar of toegankelijkheidsspecialist bent, of simpelweg ge\xefnteresseerd bent in het\nverbeteren van workflows rondom toegankelijkheid: deze sessie biedt praktische inzichten in een duurzamere manier om\nconformiteitsgegevens te beheren.' }) }), (0, s.jsx)(l.f, { children: (0, s.jsx)(n.p, { children: 'De implementatie is open source, waardoor je na de sessie eenvoudig in de technische details kunt duiken.' }) })] }), '\n', (0, s.jsxs)(p.H, { allSpeakers: m, allSessions: c, sessionId: 'b919f274-381c-41db-9d1d-cc3b6934ce93', headingLevel: 2, children: [(0, s.jsx)(l.f, { children: (0, s.jsx)(n.p, { children: 'Hoe maak je interactieve kaarten toegankelijk voor iedereen? Dat is een vraag waar het Kadaster dagelijks aan werkt.' }) }), (0, s.jsx)(l.f, { children: (0, s.jsx)(n.p, { children: 'Op de websites van het Kadaster wordt veel ruimtelijke informatie via kaartviewers aangeboden. Juist deze\ninteractieve toepassingen brengen unieke uitdagingen met zich mee op het gebied van digitale toegankelijkheid.' }) }), (0, s.jsx)(l.f, { children: (0, s.jsx)(n.p, { children: 'In deze sessie delen Eric en Mieke hoe het Kadaster deze vraagstukken multidisciplinair aanpakt. Aan de hand van\npraktijkvoorbeelden laten zij zien welke uitdagingen zij tegenkwamen, welke oplossingen zij hebben ontwikkeld en\nwelke lessen zij onderweg hebben geleerd.' }) }), (0, s.jsx)(l.f, { children: (0, s.jsx)(n.p, { children: 'Een inspirerende sessie voor iedereen die werkt aan toegankelijke digitale dienstverlening, interactieve interfaces\nof complexe gebruikerservaringen.' }) })] }), '\n', (0, s.jsxs)(p.H, { allSpeakers: m, allSessions: c, sessionId: 'a23217db-b17d-4e97-ad46-1fd7d113c567', headingLevel: 2, children: [(0, s.jsx)(l.f, { children: (0, s.jsx)(n.p, { children: 'Wat gebeurt er als je je eigen design-systeem vervangt door een nieuwe, gedeelde standaard? Hoe zorg je ervoor dat\nde toegankelijkheid er niet op achteruitgaat?' }) }), (0, s.jsx)(l.f, { children: (0, s.jsx)(n.p, { children: "In deze sessie deelt Marion Couesnon van het 'Access to Justice'-team haar ervaringen met de migratie van hun eigen\ndesign-systeem naar het KERN Design System, dat zij zien als de toekomstige standaard voor Duitse overheidsdiensten." }) }), (0, s.jsx)(l.f, { children: (0, s.jsx)(n.p, { children: 'Je leert hoe het team de migratie vanuit het oogpunt van toegankelijkheid aanpakte, welke controles en beslissingen\nze onderweg namen en welke onverwachte uitdagingen ze toch nog tegenkwamen. Want zelfs als een design-systeem met\ntoegankelijkheid in gedachten is ontwikkeld, biedt de implementatie ervan niet automatisch garantie op een\ntoegankelijk resultaat.' }) }), (0, s.jsx)(l.f, { children: (0, s.jsx)(n.p, { children: 'Een praktische sessie vol geleerde lessen, valkuilen om te vermijden en tips voor teams die een soortgelijke\noverstap plannen.' }) })] })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(f, { ...e }) }) : f(e);
   }
  },
  90578(e, n, t) {
   t.d(n, { A: () => a });
   const a = (0, t(18652).A)('outline', 'calendar-event', 'CalendarEvent', [
    ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12', key: 'svg-0' }],
    ['path', { d: 'M16 3l0 4', key: 'svg-1' }],
    ['path', { d: 'M8 3l0 4', key: 'svg-2' }],
    ['path', { d: 'M4 11l16 0', key: 'svg-3' }],
    ['path', { d: 'M8 15h2v2h-2l0 -2', key: 'svg-4' }],
   ]);
  },
 },
]);
