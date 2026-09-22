/*! For license information please see 89ab4fc1.8772056b.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [9289],
 {
  790(e) {
   e.exports = JSON.parse('[{"uuid":"1bfd50e8-d845-492b-9553-51cae7dafd5b","isoDateTime":"2026-10-26T12:00:00.000Z","speakers":["DrStephDriver"],"subject":"Tracking conformance data within the code-base","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":null},{"uuid":"b919f274-381c-41db-9d1d-cc3b6934ce93","isoDateTime":"2026-10-26T14:00:00.000Z","speakers":["EricVanMullekom","MiekeTenDam"],"subject":"Digitale toegankelijkheid van kaartviewers","language":{"abbr":"NL","description":"Nederlands"},"videoId":null,"icalLink":null},{"uuid":"a23217db-b17d-4e97-ad46-1fd7d113c567","isoDateTime":"2026-10-27T14:00:00.000Z","speakers":["MarionCouesnon"],"subject":"Switching design systems without compromising accessibility","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":null},{"uuid":"dc60b53e-664e-4dac-badb-cb0754065ed7","isoDateTime":"2026-10-27T15:30:00.000Z","speakers":["ManonVanKeulen"],"subject":"Toegankelijkheid begint bij ontwerp","language":{"abbr":"NL","description":"Nederlands"},"videoId":null,"icalLink":null},{"uuid":"6b1d8785-cf2b-4c38-a4c1-b65458456728","isoDateTime":"2026-10-28T12:00:00.000Z","speakers":["FrederiqueSchimmelpenninckVanDerOije"],"subject":"Toegankelijke en herkenbare huisstijl","language":{"abbr":"NL","description":"Nederlands"},"videoId":null,"icalLink":null},{"uuid":"5c426f34-76eb-44c3-a951-277b49e6b442","isoDateTime":"2026-10-28T14:00:00.000Z","speakers":["JavierCuello"],"subject":"The renaissance of design tooling","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":null}]');
  },
  18439(e, n, a) {
   a.d(n, { R: () => r, x: () => o });
   var t = a(30758);
   const i = {},
    s = t.createContext(i);
   function r(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), t.createElement(s.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, a) {
   a.d(n, { A: () => s });
   var t = a(30758),
    i = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const s = (e, n, a, s) => {
    const r = (0, t.forwardRef)(({ color: a = 'currentColor', size: r = 24, stroke: o = 2, title: l, className: d, children: c, ...g }, m) => (0, t.createElement)('svg', { ref: m, ...i[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: a } : { strokeWidth: o, stroke: a }), ...g }, [l && (0, t.createElement)('title', { key: 'svg-title' }, l), ...s.map(([e, n]) => (0, t.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((r.displayName = `${a}`), r);
   };
  },
  19472(e, n, a) {
   a.d(n, { L: () => s });
   var t = a(20201),
    i = a(86070);
   const s = ({ id: e, title: n, ...a }) => (0, i.jsx)(t.Ay, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...a });
  },
  20201(e, n, a) {
   a.d(n, { Ay: () => o });
   var t = a(86070),
    i = a(30758);
   const s = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, n, a, t, i) {
    const s = { '@context': 'https://schema.org', '@type': 'VideoObject', name: i?.name || n, thumbnailUrl: [i?.thumbnailUrl || a], embedUrl: i?.embedUrl || `${t}/embed/${e}`, contentUrl: i?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(i?.description && { description: i.description }), ...(i?.uploadDate && { uploadDate: i.uploadDate }), ...(i?.duration && { duration: i.duration }) };
    return JSON.stringify(s);
   }
   const o = i.forwardRef(function (e, n) {
    const [a, o] = i.useState(!1),
     [l, d] = i.useState(e.alwaysLoadIframe || !1),
     c = encodeURIComponent(e.id),
     g = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     m = e.title,
     p = e.poster || 'hqdefault',
     h = e.announce || 'Watch',
     u = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     k = i.useMemo(() => {
      const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(u ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, a) => {
         n.append(a, e);
        }),
       n
      );
     }, [e.muted, u, e.enableJsApi, e.playlist, c, e.params]),
     b = i.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     j = i.useMemo(() => (e.playlist ? `${b}/embed/videoseries?${k.toString()}` : `${b}/embed/${c}?${k.toString()}`), [e.playlist, b, c, k]),
     v = !e.thumbnail && !e.playlist && 'maxresdefault' === p,
     f = e.webp ? 'webp' : 'jpg',
     w = e.webp ? 'vi_webp' : 'vi',
     y = v
      ? ((e, n, a, t = 'maxresdefault') => {
         const [r, o] = (0, i.useState)('');
         return (
          (0, i.useEffect)(() => {
           const i = `https://img.youtube.com/${n}/${e}/${t}.${a}`,
            r = `https://img.youtube.com/${n}/${e}/hqdefault.${a}`,
            l = s[t],
            d = new Image();
           ((d.onload = () => {
            d.width < l ? o(r) : o(i);
           }),
            (d.onerror = () => o(r)),
            (d.src = i));
          }, [e, n, a, t]),
          r
         );
        })(e.id, w, f, p)
      : null,
     x = i.useMemo(() => e.thumbnail || y || `https://i.ytimg.com/${w}/${e.playlist ? g : c}/${p}.${f}`, [e.thumbnail, y, w, e.playlist, g, c, p, f]),
     S = e.activatedClass || 'lyt-activated',
     D = e.adNetwork || !1,
     z = e.aspectHeight || 9,
     A = e.aspectWidth || 16,
     M = e.iframeClass || '',
     N = e.playerClass || 'lty-playbtn',
     T = e.wrapperClass || 'yt-lite',
     O = i.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     C = e.rel ? 'prefetch' : 'preload',
     E = e.containerElement || 'article',
     _ = !1 !== e.noscriptFallback,
     P = () => {
      l || d(!0);
     };
    return (
     i.useEffect(() => {
      l && (O(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
     }, [l, O, e.focusOnLoad, n]),
     i.useEffect(() => {
      if (!l || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
      let a = !1,
       t = !1;
      const i = (t) => {
       if ('https://www.youtube.com' !== t.origin && 'https://www.youtube-nocookie.com' !== t.origin) return;
       let i;
       try {
        i = 'string' == typeof t.data ? JSON.parse(t.data) : t.data;
       } catch {
        return;
       }
       switch (i.event) {
        case 'onReady':
         a || ((a = !0), e.onReady && e.onReady({ videoId: e.id, title: m }));
         break;
        case 'infoDelivery':
         if (void 0 !== i.info?.playerState) {
          const a = i.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: a, currentTime: i.info.currentTime, duration: i.info.duration }), a)) {
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
         (void 0 !== i.info?.playbackRate && e.onPlaybackRateChange?.(i.info.playbackRate), void 0 !== i.info?.playbackQuality && e.onPlaybackQualityChange?.(i.info.playbackQuality));
         break;
        case 'onStateChange':
         if (void 0 !== i.info?.playerState) {
          const a = i.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: a, currentTime: i.info.currentTime, duration: i.info.duration }), a)) {
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
         if (i.info && 'errorCode' in i.info) {
          const n = i.info.errorCode;
          e.onError && e.onError(n);
         }
         break;
        case 'onPlaybackRateChange':
         void 0 !== i.info?.playbackRate && e.onPlaybackRateChange?.(i.info.playbackRate);
         break;
        case 'onPlaybackQualityChange':
         void 0 !== i.info?.playbackQuality && e.onPlaybackQualityChange?.(i.info.playbackQuality);
       }
      };
      window.addEventListener('message', i);
      const s = [],
       r = () => {
        'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
       },
       o = () => {
        t ||
         ((t = !0),
         r(),
         [100, 300, 600, 1200, 2400].forEach((e) => {
          s.push(setTimeout(r, e));
         }));
       };
      return (
       'object' == typeof n && n?.current
        ? (n.current.addEventListener('load', o), 'complete' === n.current.contentDocument?.readyState && o())
        : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
           s.push(setTimeout(r, e));
          }),
       () => {
        (window.removeEventListener('message', i), s.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', o));
       }
      );
     }, [l, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, m, n]),
     (0, t.jsxs)(t.Fragment, {
      children: [
       !e.lazyLoad && (0, t.jsx)('link', { rel: C, href: x, as: 'image' }),
       (0, t.jsx)(t.Fragment, { children: a && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('link', { rel: 'preconnect', href: b }), (0, t.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), D && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, t.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, t.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, m, x, b, e.seo) } }),
       _ && !e.playlist && (0, t.jsx)('noscript', { children: (0, t.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${m} on YouTube`, children: ['Watch "', m, '" on YouTube'] }) }),
       (0, t.jsxs)(E, {
        onPointerOver: () => {
         a || o(!0);
        },
        onClick: P,
        className: `${T} ${l ? S : ''}`,
        'data-title': m,
        role: l || e.lazyLoad ? void 0 : 'img',
        'aria-label': l ? void 0 : `${m} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (z / A) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !l && (0, t.jsx)('img', { src: x, alt: `${m} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !l && (0, t.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && l) && (0, t.jsx)('button', { type: 'button', className: N, 'aria-label': `${h} ${m}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, onClick: P, children: (0, t.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), l && (0, t.jsx)('iframe', { ref: n, className: M, title: m, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: j, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  24456(e, n, a) {
   a.d(n, { F: () => r, N: () => o });
   var t = a(13526),
    i = a(84471),
    s = a(86070);
   const r = ({ children: e, ...n }) => {
     const { to: a, href: t, ...r } = n;
     let o = a || t;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, i.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, s.jsx)('a', { href: o, ...r, children: e }));
    },
    o = ({ className: e, boxContent: n, ...a }) => (0, s.jsx)(r, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', { 'utrecht-link--box-content': n }, e), ...a });
  },
  24658(e, n, a) {
   a.d(n, { H: () => d });
   var t = a(90578),
    i = a(46447),
    s = a(13526),
    r = a(19472),
    o = a(86070);
   const l = new Date().toISOString(),
    d = ({ lang: e = 'nl', headingLevel: n = 3, allSpeakers: a, videoId: d, children: c, allSessions: g, sessionId: m }) => {
     const p = g?.find(({ uuid: e }) => m === e),
      h = p && p.speakers.map((e) => a[e]).filter(Boolean),
      u = [d, p?.videoId, ...(p?.videoIds ?? [])].filter(Boolean);
     return p ? (0, o.jsxs)('article', { className: (0, s.A)('ma-dsw-session'), children: [(0, o.jsx)(i.DZ, { level: n, className: 'ma-dsw-session__title', id: p.subject.toLowerCase().replace(/\s/gi, '-'), children: p.subject }), (0, o.jsx)(i.fz, { className: 'ma-dsw-session__subtitle', lead: !0, children: h && h.map((e) => (e?.organisation ? `${e.name} - ${e.organisation}` : e.name)).join(' & ') }), u.length > 0 && u.map((e) => (0, o.jsx)(r.L, { id: e, title: p.subject, style: { marginBlock: '20px' } }, e)), p && p.isoDateTime && p.isoDateTime > l ? (0, o.jsx)(i.fz, { children: (0, o.jsx)('time', { dateTime: p.isoDateTime, children: new Intl.DateTimeFormat(e, { dateStyle: 'full', timeStyle: 'nl' === e ? 'short' : 'full', timeZone: 'Europe/Amsterdam' }).format(new Date(p.isoDateTime)) }) }) : (0, o.jsx)(o.Fragment, {}), c, 'nl' === e && h.find(({ language: e }) => 'nl' !== e) && (0, o.jsxs)(i.fz, { children: [(0, o.jsx)('b', { children: 'Goed te weten:' }), ' Deze sessie is in het Engels.'] }), p.captioned ? (p.captionId ? (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(i.fz, { children: ['nl' === e ? (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('b', { children: 'Bij deze sessie is een schrijftolk aanwezig: ' }) }) : (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('b', { children: 'Live captioning is available for this session: ' }) }), (0, o.jsxs)('a', { href: `https://text-on-tap.live/#e=${p.captionId}`, children: [(0, o.jsxs)('span', { className: 'sr-only', children: [p.subject, ' '] }), 'nl' === e ? 'in de browser' : 'in the browser'] }), 'nl' === e ? ' of ' : ' or ', (0, o.jsxs)('a', { href: `https://text-on-tap.live/openoverlay.html?e=${p.captionId}`, children: [(0, o.jsxs)('span', { className: 'sr-only', children: [p.subject, ' '] }), 'nl' === e ? 'met de Overlay tool' : 'with the de Overlay tool'] })] }) }) : 'nl' === e ? (0, o.jsx)(i.fz, { children: 'Voor deze sessie hebben we nog geen schrijftolk gevonden' }) : (0, o.jsx)(o.Fragment, {})) : (0, o.jsx)(o.Fragment, {}), (0, o.jsx)('aside', { className: (0, s.A)('ma-dsw-session__speakers'), children: h.map((n, a) => (0, o.jsxs)('div', { className: (0, s.A)('ma-dsw-session__speaker', 'ma-dsw-speaker'), children: [(0, o.jsx)('img', { className: (0, s.A)('ma-dsw-speaker__image'), src: n.image.src, alt: n.image.alt }), (0, o.jsx)(i.fz, { className: (0, s.A)('ma-dsw-speaker__description'), dangerouslySetInnerHTML: { __html: n.description[e] } })] }, a)) }), p && p.icalLink && !d ? (0, o.jsx)(i.fz, { children: (0, o.jsxs)(i.vx, { href: p.icalLink, download: p.icalLink, appearance: 'primary-action-button', children: [(0, o.jsx)(i.In, { children: (0, o.jsx)(t.A, {}) }), (0, o.jsx)('span', { children: 'nl' === e ? (0, o.jsxs)(o.Fragment, { children: ['Zet', (0, o.jsx)('span', { className: 'sr-only', children: p.subject }), ' in je agenda'] }) : (0, o.jsxs)(o.Fragment, { children: ['Add', (0, o.jsx)('span', { className: 'sr-only', children: p.subject }), ' to your calendar'] }) })] }) }) : null] }) : (0, o.jsx)(o.Fragment, {});
    };
  },
  29680(e, n, a) {
   a.d(n, { v: () => o });
   var t = a(24456),
    i = a(13526),
    s = a(86070);
   const r = ({ className: e, children: n, purpose: a, iconStart: t, iconEnd: r, href: o }) => (0, s.jsxs)('a', { className: (0, i.A)('nl-button', e, { 'nl-button--primary': 'primary' === a, 'nl-button--secondary': 'secondary' === a, 'nl-button--subtle': 'subtle' === a }), href: o, children: [t && (0, s.jsx)('span', { className: 'nl-button__icon-start', children: t }), (0, s.jsx)('span', { className: 'nl-button__label', children: n }), r && (0, s.jsx)('span', { className: 'nl-button__icon-end', children: r })] }),
    o = globalThis.isAstro
     ? ({ appearance: e, href: n, ...a }) => {
        let t = 'primary';
        return ((t = 'secondary-action' === e ? 'secondary' : t), (0, s.jsx)(r, { purpose: t, href: n, ...a }));
       }
     : ({ appearance: e, ...n }) => (0, s.jsx)(t.F, { className: (0, i.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  35683(e, n, a) {
   a.d(n, { K: () => t.e2 });
   var t = a(29181);
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  56561(e, n, a) {
   a.d(n, { f: () => g });
   var t = a(15540),
    i = a(69967),
    s = a(86070),
    r = a(13526),
    o = a(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, n) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      a.push.apply(a, t));
    }
    return a;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var a = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(a), !0).forEach(function (n) {
         (0, t.A)(e, n, a[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
        : d(Object(a)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
          });
    }
    return e;
   }
   var g = (0, o.forwardRef)(function (e, n) {
    var a = e.children,
     o = e.className,
     d = e.purpose,
     g = (0, i.A)(e, l);
    return (0, s.jsx)('p', c(c({ className: (0, r.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, g), {}, { children: 'lead' === d ? (0, s.jsx)('b', { className: 'nl-paragraph__lead', children: a }) : a }));
   });
   g.displayName = 'Paragraph';
  },
  64249(e, n, a) {
   a.d(n, { A: () => t });
   const t = (0, a(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  66153(e, n, a) {
   a.d(n, { f: () => t.f });
   var t = a(56561);
  },
  84471(e, n, a) {
   a.d(n, { bo: () => i, KF: () => m, mJ: () => u, VZ: () => x, cR: () => y, Pv: () => k, qZ: () => r, kD: () => f, QQ: () => D, B2: () => p, Pc: () => l, f4: () => o, GT: () => w, fX: () => s, eQ: () => v, B_: () => j, o_: () => b });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return g(c(n));
    },
    p = (e, n) => u(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: a }) => '' !== a && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => g(c(e.projects.flatMap((e) => h(e)))),
    k = (e) => {
     const n = h(e),
      a = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: a }) => '' !== a && e.includes(n))
       .map(({ name: t, id: i, value: s }) => {
        const r = /^(.+) URL/.exec(t)[1],
         o = 'Storybook' === r ? `${a} (${n}) in Storybook van ${e.title}` : `${a} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: i, value: s, description: o };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    b = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? f(e[a], [...n, a]) : []));
   }
   function w(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || a(e).localeCompare(a(n)));
   }
   const y = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    x = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    S = new Set(['ics', 'json', 'pdf']),
    D = (e) => {
     const n = e.split('/').pop() ?? '',
      a = n.split('.').pop()?.toLowerCase();
     return void 0 !== a && S.has(a);
    };
  },
  86109(e) {
   e.exports = JSON.parse('{"DrStephDriver":{"name":"Dr Steph Driver","organisation":"Open Library of Humanities","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-DrStephDriver.jpg","alt":"Dr Steph Driver"},"description":{"en":"Steph is the accessibility-specialist developer at the Open Library of Humanities.  As an assistive technology user herself, she is passionate about making open access truly accessible for everyone. She combines deep technical expertise with a passion for education, helping teams develop smarter workflows and innovative accessibility solutions. With a background spanning natural sciences, creative writing, technology and disability-activism, Steph brings a unique perspective to inclusive digital design.","nl":"Steph is ontwikkelaar en specialist op het gebied van toegankelijkheid bij de Open Library of Humanities. Als gebruiker van ondersteunende technologie zet zij zich vol passie in om open access voor iedereen werkelijk toegankelijk te maken. Ze combineert diepgaande technische expertise met een passie voor onderwijs en helpt teams bij het ontwikkelen van slimmere werkprocessen en innovatieve oplossingen voor toegankelijkheid. Met een achtergrond in de natuurwetenschappen, creatief schrijven, technologie en activisme rondom handicaps brengt Steph een uniek perspectief in op inclusief digitaal ontwerp."},"language":"en"},"EricVanMullekom":{"name":"Eric van Mullekom","organisation":"Kadaster","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-EricVanMullekom.jpg","alt":"Eric van Mullekom"},"description":{"nl":"Erik is sinds 2000 als projectmanager/product owner betrokken bij softwareontwikkeling, met oog voor techniek en gebruikersgemak. Bij het Kadaster is hij als Product Owner verantwoordelijk voor <a target=\\"blank\\" href=\\"https://generiekegeocomponenten.nl\\">generiekegeocomponenten.nl</a>, <a target=\\"blank\\" href=\\"https://kaartenvannederland.nl\\">kaartenvannederland.nl</a> en <a target=\\"blank\\" href=\\"https://verbeterdekaart.nl\\">terugmeldsysteem (o.a. verbeterdekaart.nl)</a>."},"language":"nl"},"MiekeTenDam":{"name":"Mieke ten Dam","organisation":"Kadaster","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-MiekeTenDam.jpg","alt":"Mieke ten Dam"},"description":{"nl":"Mieke werkt sinds 2019 bij het Kadaster als software engineer, met digitale toegankelijkheid als specialisme. Haar scrumteam ontwikkelt en beheert diverse websites, portals en applicaties, waaronder <a target=\\"blank\\" href=\\"https://www.kadaster.nl\\">www.kadaster.nl</a>, <a target=\\"blank\\" href=\\"https://topokaarten.kadaster.nl\\">topokaarten.kadaster.nl</a> en de zakelijke <a target=\\"blank\\" href=\\"https://mijn.kadaster.nl\\">mijn.kadaster.nl</a> omgeving."},"language":"nl"},"MarionCouesnon":{"name":"Marion Couesnon","organisation":"Digitalservice GmbH des Bundes","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-MarionCouesnon.jpg","alt":"Marion Couesnon"},"description":{"en":"Marion is an accessibility designer based in Berlin. She has been passionate about design since 2011 and has specialised in accessibility since 2019. She currently works for DigitalService, a company owned by the German federal government. Within the organisation, she implements accessibility practices whilst contributing to the design of services, including the <a target=\\"blank\\" href=\\"https://service.justiz.de\\">Ministry of Justice\u2019s online portal</a>. Outside of work, you might spot Marion at her boxing club or knitting on her sofa.","nl":"Marion is een ontwerper gespecialiseerd in toegankelijkheid, gevestigd in Berlijn. Ze is sinds 2011 gepassioneerd door design en heeft zich sinds 2019 toegelegd op toegankelijkheid. Momenteel werkt ze bij DigitalService, een bedrijf dat eigendom is van de Duitse federale overheid. Binnen de organisatie implementeert ze toegankelijkheidsmaatregelen en draagt ze bij aan het ontwerp van diensten, waaronder het <a target=\\"blank\\" href=\\"https://service.justiz.de\\">online portaal van het ministerie van Justitie</a>. Buiten haar werk kun je Marion tegenkomen bij haar boksclub of breiend op de bank."},"language":"en"},"ManonVanKeulen":{"name":"Manon van Keulen","organisation":"Digitaal Toegankelijk","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-ManonVanKeulen.jpg","alt":"Manon van Keulen"},"description":{"nl":"Het werk van Manon kreeg, na in 2020 omgeschoold te zijn naar Webdeveloper, al snel een focus op digitale toegankelijkheid. Tegenwoordig werkt zij als consultant bij Digitaal Toegankelijk. Via trainingen en adviestrajecten ondersteunt zij bedrijven om hun diensten toegankelijker te maken. Haar missie is te laten zien hoe meer aandacht voor de toegankelijkheid ook leidt tot een betere ervaring voor andere eindgebruikers. En hoe de eerste beslissingen tijdens het design daar al een grote invloed op kunnen hebben."},"language":"nl"},"FrederiqueSchimmelpenninckVanDerOije":{"name":"Fr\xe9d\xe9rique Schimmelpenninck van der Oije","organisation":"UWV","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-FrederiqueSchimmelpenninck.jpg","alt":"Fr\xe9d\xe9rique Schimmelpenninck van der Oije"},"description":{"nl":"Fr\xe9d\xe9rique Schimmelpenninck van der Oije is grafisch ontwerper, zij werkte eerder als ontwerper en beeldredacteur voor onder andere de Volkskrant en Het Financieele Dagblad en is nu Designmanager bij UWV. Daarnaast werkt zij als parttime docent op het Amsterdam Fashion Institute. Helder, herkenbaar en vooral toegankelijke communicatie zijn een belangrijke leidraad in haar werk en werkwijze. Bij UWV werkt zij aan een integrale aanpak van de huisstijl, van mobiel tot bewegwijzering en van beachflag tot formulier."},"language":"nl"},"JavierCuello":{"name":"Javier Cuello","organisation":"Fuller","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-JavierCuello.png","alt":"Javier Cuello"},"description":{"en":"Javier is a product designer specialising in design systems. Originally from Argentina, he has spent nearly 20 years in Europe working with companies like Wise, UEFA, Telef\xf3nica and Zara. He now runs his own independent design practice, helping teams build and scale their design systems.","nl":"Javier is een productontwerper die gespecialiseerd is in designsystemen. Hij komt oorspronkelijk uit Argentini\xeb en heeft bijna twintig jaar in Europa gewerkt voor bedrijven als Wise, UEFA, Telef\xf3nica en Zara. Tegenwoordig runt hij zijn eigen onafhankelijke ontwerppraktijk, waarin hij teams helpt bij het opzetten en opschalen van hun designsystemen."},"language":"en"}}');
  },
  89396(e, n, a) {
   (a.r(n), a.d(n, { assets: () => k, contentTitle: () => u, default: () => v, frontMatter: () => h, metadata: () => t, toc: () => b }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/programma","title":"Programma","description":"Programma voor de Design Systems Week 2026","source":"@site/docs/community/events/design-systems-week/programma.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week-2026/programma","permalink":"/events/design-systems-week-2026/programma","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/programma.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Programma","description":"Programma voor de Design Systems Week 2026","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Programma","pagination_label":"Programma","sidebar_position":2,"slug":"/events/design-systems-week-2026/programma","translations":{"en":"/events/design-systems-week-2026/en/program/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 Oktober, online"},"sidebar":"community","previous":{"title":"Over Design Systems Week","permalink":"/events/design-systems-week"},"next":{"title":"Tijdschema","permalink":"/events/design-systems-week-2026/tijdschema/"}}');
   var i = a(86070),
    s = a(18439),
    r = a(29680),
    o = a(35683),
    l = a(66153),
    d = a(64249),
    c = a(790),
    g = a(86109),
    m = a(24658),
    p = a(51130);
   const h = { title: 'Programma', description: 'Programma voor de Design Systems Week 2026', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Programma', pagination_label: 'Programma', sidebar_position: 2, slug: '/events/design-systems-week-2026/programma', translations: { en: '/events/design-systems-week-2026/en/program/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 Oktober, online' },
    u = 'Programma Design Systems Week settings.year',
    k = {},
    b = [];
   function j(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsxs)(n.h1, { id: 'programma-design-systems-week-settingsyear', children: ['Programma Design Systems Week ', p.Ok] }) }), '\n', (0, i.jsx)(l.f, { purpose: 'lead', children: (0, i.jsxs)(n.p, { children: ['NL Design System organiseert in ', p.Ok, ' voor de ', p.nl.Z, ' keer de Design Systems Week. Van', ' ', '\n', (0, i.jsx)('strong', { children: p.nl.M }), ' zijn er dagelijks meerdere korte sessies van diverse organisaties online te\nvolgen over het ', (0, i.jsx)(n.strong, { children: 'hoe en waarom van design systems' }), '.'] }) }), '\n', (0, i.jsxs)(o.K, { children: [(0, i.jsxs)(r.v, { href: `/events/design-systems-week-${p.Ok}/tijdschema`, appearance: 'primary-action', children: ['Bekijk het tijdschema', (0, i.jsx)(d.A, { slot: 'icon-end' })] }), !!p.MX && (0, i.jsxs)(r.v, { href: p.MX, appearance: 'secondary-action', children: ['Gebruik Miro', (0, i.jsx)(d.A, { slot: 'icon-end' })] })] }), '\n', !p.Ic && (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(l.f, { children: 'Het tijdschema is nog niet definitief. De sessies worden de komende weken verder uitgewerkt en toegevoegd. Houd deze pagina in de gaten voor updates.' }) }), '\n', '\n', (0, i.jsxs)(m.H, { allSpeakers: g, allSessions: c, sessionId: '1bfd50e8-d845-492b-9553-51cae7dafd5b', headingLevel: 2, children: [(0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Informatie over toegankelijkheidsconformiteit wordt vaak vastgelegd in aparte rapporten die snel verouderen. Maar\nwat als toegankelijkheidsgegevens direct naast je code zouden staan?' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'In deze sessie ontdek je hoe het open-source publicatieplatform Janeway zijn toegankelijkheidsproces opnieuw heeft\ningericht door gegevens over conformiteit rechtstreeks in de codebase te integreren. Elke bevinding op het gebied\nvan toegankelijkheid is gekoppeld aan de specifieke commit waarop de audit betrekking had, en wordt in verband\ngebracht met de werkzaamheden die nodig zijn voor verbetering. Dit vormt de basis voor een continu proces van\ngerichte toegankelijkheidsaudits en verbeteringen, in plaats van te vertrouwen op audits die slechts eens in de paar\njaar plaatsvinden.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Steph vertelt over de beweegredenen achter deze aanpak, de implementatie ervan en de lessen die gaandeweg zijn\ngeleerd. Of je nu ontwikkelaar of toegankelijkheidsspecialist bent, of simpelweg ge\xefnteresseerd bent in het\nverbeteren van workflows rondom toegankelijkheid: deze sessie biedt praktische inzichten in een duurzamere manier om\nconformiteitsgegevens te beheren.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'De implementatie is open source, waardoor je na de sessie eenvoudig in de technische details kunt duiken.' }) })] }), '\n', (0, i.jsxs)(m.H, { allSpeakers: g, allSessions: c, sessionId: 'b919f274-381c-41db-9d1d-cc3b6934ce93', headingLevel: 2, children: [(0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Hoe maak je interactieve kaarten toegankelijk voor iedereen? Dat is een vraag waar het Kadaster dagelijks aan werkt.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Op de websites van het Kadaster wordt veel ruimtelijke informatie via kaartviewers aangeboden. Juist deze\ninteractieve toepassingen brengen unieke uitdagingen met zich mee op het gebied van digitale toegankelijkheid.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'In deze sessie delen Eric en Mieke hoe het Kadaster deze vraagstukken multidisciplinair aanpakt. Aan de hand van\npraktijkvoorbeelden laten zij zien welke uitdagingen zij tegenkwamen, welke oplossingen zij hebben ontwikkeld en\nwelke lessen zij onderweg hebben geleerd.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Een inspirerende sessie voor iedereen die werkt aan toegankelijke digitale dienstverlening, interactieve interfaces\nof complexe gebruikerservaringen.' }) })] }), '\n', (0, i.jsxs)(m.H, { allSpeakers: g, allSessions: c, sessionId: 'a23217db-b17d-4e97-ad46-1fd7d113c567', headingLevel: 2, children: [(0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Wat gebeurt er als je je eigen design-systeem vervangt door een nieuwe, gedeelde standaard? Hoe zorg je ervoor dat\nde toegankelijkheid er niet op achteruitgaat?' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: "In deze sessie deelt Marion Couesnon van het 'Access to Justice'-team haar ervaringen met de migratie van hun eigen\ndesign-systeem naar het KERN Design System, dat zij zien als de toekomstige standaard voor Duitse overheidsdiensten." }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Je leert hoe het team de migratie vanuit het oogpunt van toegankelijkheid aanpakte, welke controles en beslissingen\nze onderweg namen en welke onverwachte uitdagingen ze toch nog tegenkwamen. Want zelfs als een design-systeem met\ntoegankelijkheid in gedachten is ontwikkeld, biedt de implementatie ervan niet automatisch garantie op een\ntoegankelijk resultaat.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Een praktische sessie vol geleerde lessen, valkuilen om te vermijden en tips voor teams die een soortgelijke\noverstap plannen.' }) })] }), '\n', (0, i.jsxs)(m.H, { allSpeakers: g, allSessions: c, sessionId: 'dc60b53e-664e-4dac-badb-cb0754065ed7', headingLevel: 2, children: [(0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Hoe maak je niet een ontwerp toegankelijk, maar ontwerp je vanaf het begin toegankelijk? Digitale toegankelijkheid\nis geen aanpassing achteraf, maar begint bij de keuzes die je maakt tijdens het ontwerpen.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'In deze sessie ontdek je hoe je toegankelijkheid als uitgangspunt kunt meenemen in ontwerpkeuzes en design systems.\nAan de hand van praktijkvoorbeelden zie je welke interactiepatronen goed werken en waar het in de praktijk vaak\nmisgaat. Denk aan verkeerd gebruikte tabellen, complexe formulieren en interactieve elementen waarvan niet duidelijk\nis hoe je ze moet gebruiken.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Geen pleisters plakken met ARIA achteraf, maar vanaf de start kiezen voor logische interacties en passende\nsemantiek. Zo ondersteunen vorm en interactie de gebruiker in plaats van een belemmering te vormen.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Een praktische sessie voor iedereen die betrokken is bij het ontwerpen, ontwikkelen en verbeteren van digitale\ndienstverlening.' }) })] }), '\n', (0, i.jsxs)(m.H, { allSpeakers: g, allSessions: c, sessionId: '6b1d8785-cf2b-4c38-a4c1-b65458456728', headingLevel: 2, children: [(0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Hoe ontwikkel je een huisstijl die niet alleen herkenbaar is, maar ook toegankelijk en toepasbaar op alle kanalen?' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'In deze sessie neemt UWV je mee in de ontwikkeling van de vernieuwde huisstijl. Met een nieuw kleurenpalet, een\nnieuw lettertype en een eigentijdse vormtaal is gewerkt aan een visuele identiteit die zowel op mobiel, web als in\nprint goed functioneert.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Fr\xe9d\xe9rique vertelt over het ontwerptraject, de afwegingen die zijn gemaakt en de resultaten die zijn behaald.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Een interessante sessie voor designers, communicatieprofessionals en iedereen die werkt aan een toegankelijke en\nherkenbare digitale overheid.' }) })] }), '\n', (0, i.jsxs)(m.H, { allSpeakers: g, allSessions: c, sessionId: '5c426f34-76eb-44c3-a951-277b49e6b442', headingLevel: 2, children: [(0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Wat als je precies de designtools zou kunnen bouwen die jouw team nodig heeft, in plaats van je workflow aan te\npassen aan de beschikbare tools?' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Het ontwikkelen van op maat gemaakte designtools is eenvoudiger dan ooit. In plaats van uitsluitend te vertrouwen op\nalgemene plug-ins en frameworks, kunnen teams nu kleine, doelgerichte tools bouwen die inspelen op de specifieke\nbehoeften van hun projecten en designsystemen.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Tijdens deze sessie deelt Javier Cuello praktijkvoorbeelden van hoe hij op maat gemaakte mini-plug-ins en\ndesigntools cre\xebert en gebruikt om problemen op te lossen die voorheen lastig aan te pakken leken. Hij laat zien wat\ner mogelijk is, waar deze tools waarde toevoegen en hoe ze de dagelijkse designworkflows kunnen verbeteren.' }) }), (0, i.jsx)(l.f, { children: (0, i.jsx)(n.p, { children: 'Een praktische en inspirerende sessie voor designers die hun tooling opnieuw willen bekijken, maar ook met volop\nnuttige inzichten voor developers.' }) })] })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j(e);
   }
  },
  90578(e, n, a) {
   a.d(n, { A: () => t });
   const t = (0, a(18652).A)('outline', 'calendar-event', 'CalendarEvent', [
    ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12', key: 'svg-0' }],
    ['path', { d: 'M16 3l0 4', key: 'svg-1' }],
    ['path', { d: 'M8 3l0 4', key: 'svg-2' }],
    ['path', { d: 'M4 11l16 0', key: 'svg-3' }],
    ['path', { d: 'M8 15h2v2h-2l0 -2', key: 'svg-4' }],
   ]);
  },
 },
]);
