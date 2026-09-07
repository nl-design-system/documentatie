/*! For license information please see 89ab4fc1.405599e8.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [9289],
 {
  790(e) {
   e.exports = [];
  },
  18439(e, t, n) {
   n.d(t, { R: () => o, x: () => i });
   var a = n(30758);
   const s = {},
    r = a.createContext(s);
   function o(e) {
    const t = a.useContext(r);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function i(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), a.createElement(r.Provider, { value: t }, e.children));
   }
  },
  18652(e, t, n) {
   n.d(t, { A: () => r });
   var a = n(30758),
    s = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const r = (e, t, n, r) => {
    const o = (0, a.forwardRef)(({ color: n = 'currentColor', size: o = 24, stroke: i = 2, title: l, className: c, children: d, ...m }, p) => (0, a.createElement)('svg', { ref: p, ...s[e], width: o, height: o, className: ['tabler-icon', `tabler-icon-${t}`, c].join(' '), ...('filled' === e ? { fill: n } : { strokeWidth: i, stroke: n }), ...m }, [l && (0, a.createElement)('title', { key: 'svg-title' }, l), ...r.map(([e, t]) => (0, a.createElement)(e, t)), ...(Array.isArray(d) ? d : [d])]));
    return ((o.displayName = `${n}`), o);
   };
  },
  20201(e, t, n) {
   n.d(t, { Ay: () => i });
   var a = n(86070),
    s = n(30758);
   const r = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function o(e, t, n, a, s) {
    const r = { '@context': 'https://schema.org', '@type': 'VideoObject', name: s?.name || t, thumbnailUrl: [s?.thumbnailUrl || n], embedUrl: s?.embedUrl || `${a}/embed/${e}`, contentUrl: s?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(s?.description && { description: s.description }), ...(s?.uploadDate && { uploadDate: s.uploadDate }), ...(s?.duration && { duration: s.duration }) };
    return JSON.stringify(r);
   }
   const i = s.forwardRef(function (e, t) {
    const [n, i] = s.useState(!1),
     [l, c] = s.useState(e.alwaysLoadIframe || !1),
     d = encodeURIComponent(e.id),
     m = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     p = e.title,
     u = e.poster || 'hqdefault',
     h = e.announce || 'Watch',
     g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     y = s.useMemo(() => {
      const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: d } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, n) => {
         t.append(n, e);
        }),
       t
      );
     }, [e.muted, g, e.enableJsApi, e.playlist, d, e.params]),
     f = s.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     b = s.useMemo(() => (e.playlist ? `${f}/embed/videoseries?${y.toString()}` : `${f}/embed/${d}?${y.toString()}`), [e.playlist, f, d, y]),
     k = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
     w = e.webp ? 'webp' : 'jpg',
     v = e.webp ? 'vi_webp' : 'vi',
     j = k
      ? ((e, t, n, a = 'maxresdefault') => {
         const [o, i] = (0, s.useState)('');
         return (
          (0, s.useEffect)(() => {
           const s = `https://img.youtube.com/${t}/${e}/${a}.${n}`,
            o = `https://img.youtube.com/${t}/${e}/hqdefault.${n}`,
            l = r[a],
            c = new Image();
           ((c.onload = () => {
            c.width < l ? i(o) : i(s);
           }),
            (c.onerror = () => i(o)),
            (c.src = s));
          }, [e, t, n, a]),
          o
         );
        })(e.id, v, w, u)
      : null,
     x = s.useMemo(() => e.thumbnail || j || `https://i.ytimg.com/${v}/${e.playlist ? m : d}/${u}.${w}`, [e.thumbnail, j, v, e.playlist, m, d, u, w]),
     S = e.activatedClass || 'lyt-activated',
     A = e.adNetwork || !1,
     N = e.aspectHeight || 9,
     _ = e.aspectWidth || 16,
     P = e.iframeClass || '',
     O = e.playerClass || 'lty-playbtn',
     C = e.wrapperClass || 'yt-lite',
     D = s.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     T = e.rel ? 'prefetch' : 'preload',
     M = e.containerElement || 'article',
     E = !1 !== e.noscriptFallback,
     L = () => {
      l || c(!0);
     };
    return (
     s.useEffect(() => {
      l && (D(), e.focusOnLoad && 'object' == typeof t && t?.current && t.current.focus());
     }, [l, D, e.focusOnLoad, t]),
     s.useEffect(() => {
      if (!l || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
      let n = !1,
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
         n || ((n = !0), e.onReady && e.onReady({ videoId: e.id, title: p }));
         break;
        case 'infoDelivery':
         if (void 0 !== s.info?.playerState) {
          const n = s.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: n, currentTime: s.info.currentTime, duration: s.info.duration }), n)) {
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
         (void 0 !== s.info?.playbackRate && e.onPlaybackRateChange?.(s.info.playbackRate), void 0 !== s.info?.playbackQuality && e.onPlaybackQualityChange?.(s.info.playbackQuality));
         break;
        case 'onStateChange':
         if (void 0 !== s.info?.playerState) {
          const n = s.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: n, currentTime: s.info.currentTime, duration: s.info.duration }), n)) {
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
         if (s.info && 'errorCode' in s.info) {
          const t = s.info.errorCode;
          e.onError && e.onError(t);
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
      const r = [],
       o = () => {
        'object' == typeof t && t?.current?.contentWindow && t.current.contentWindow.postMessage('{"event":"listening","id":"' + d + '"}', '*');
       },
       i = () => {
        a ||
         ((a = !0),
         o(),
         [100, 300, 600, 1200, 2400].forEach((e) => {
          r.push(setTimeout(o, e));
         }));
       };
      return (
       'object' == typeof t && t?.current
        ? (t.current.addEventListener('load', i), 'complete' === t.current.contentDocument?.readyState && i())
        : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
           r.push(setTimeout(o, e));
          }),
       () => {
        (window.removeEventListener('message', s), r.forEach(clearTimeout), 'object' == typeof t && t?.current && t.current.removeEventListener('load', i));
       }
      );
     }, [l, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, d, p, t]),
     (0, a.jsxs)(a.Fragment, {
      children: [
       !e.lazyLoad && (0, a.jsx)('link', { rel: T, href: x, as: 'image' }),
       (0, a.jsx)(a.Fragment, { children: n && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: f }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), A && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: o(e.id, p, x, f, e.seo) } }),
       E && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
       (0, a.jsxs)(M, {
        onPointerOver: () => {
         n || i(!0);
        },
        onClick: L,
        className: `${C} ${l ? S : ''}`,
        'data-title': p,
        role: l || e.lazyLoad ? void 0 : 'img',
        'aria-label': l ? void 0 : `${p} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (N / _) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !l && (0, a.jsx)('img', { src: x, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !l && (0, a.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && l) && (0, a.jsx)('button', { type: 'button', className: O, 'aria-label': `${h} ${p}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, onClick: L, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), l && (0, a.jsx)('iframe', { ref: t, className: P, title: p, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: b, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  24142(e, t, n) {
   n.d(t, { K: () => a.e2 });
   var a = n(29181);
  },
  31439(e, t, n) {
   n.d(t, { H: () => c });
   var a = n(90578),
    s = n(46447),
    r = n(13526),
    o = n(80883),
    i = n(86070);
   const l = new Date().toISOString(),
    c = ({ lang: e = 'nl', headingLevel: t = 3, allSpeakers: n, videoId: c, children: d, allSessions: m, sessionId: p }) => {
     const u = m?.find(({ uuid: e }) => p === e),
      h = u && u.speakers.map((e) => n[e]).filter(Boolean),
      g = [c, u?.videoId, ...(u?.videoIds ?? [])].filter(Boolean);
     return u ? (0, i.jsxs)('article', { className: (0, r.A)('ma-dsw-session'), children: [(0, i.jsx)(s.DZ, { level: t, className: 'ma-dsw-session__title', id: u.subject.toLowerCase().replace(/\s/gi, '-'), children: u.subject }), (0, i.jsx)(s.fz, { className: 'ma-dsw-session__subtitle', lead: !0, children: h && h.map((e) => (e?.organisation ? `${e.name} - ${e.organisation}` : e.name)).join(' & ') }), g.length > 0 && g.map((e) => (0, i.jsx)(o.L, { id: e, title: u.subject, style: { marginBlock: '20px' } }, e)), u && u.isoDateTime && u.isoDateTime > l ? (0, i.jsx)(s.fz, { children: (0, i.jsx)('time', { dateTime: u.isoDateTime, children: new Intl.DateTimeFormat(e, { dateStyle: 'full', timeStyle: 'nl' === e ? 'short' : 'full', timeZone: 'Europe/Amsterdam' }).format(new Date(u.isoDateTime)) }) }) : (0, i.jsx)(i.Fragment, {}), d, 'nl' === e && h.find(({ language: e }) => 'nl' !== e) && (0, i.jsxs)(s.fz, { children: [(0, i.jsx)('b', { children: 'Goed te weten:' }), ' Deze sessie is in het Engels.'] }), u.captioned ? (u.captionId ? (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(s.fz, { children: ['nl' === e ? (0, i.jsx)(i.Fragment, { children: (0, i.jsx)('b', { children: 'Bij deze sessie is een schrijftolk aanwezig: ' }) }) : (0, i.jsx)(i.Fragment, { children: (0, i.jsx)('b', { children: 'Live captioning is available for this session: ' }) }), (0, i.jsxs)('a', { href: `https://text-on-tap.live/#e=${u.captionId}`, children: [(0, i.jsxs)('span', { className: 'sr-only', children: [u.subject, ' '] }), 'nl' === e ? 'in de browser' : 'in the browser'] }), 'nl' === e ? ' of ' : ' or ', (0, i.jsxs)('a', { href: `https://text-on-tap.live/openoverlay.html?e=${u.captionId}`, children: [(0, i.jsxs)('span', { className: 'sr-only', children: [u.subject, ' '] }), 'nl' === e ? 'met de Overlay tool' : 'with the de Overlay tool'] })] }) }) : 'nl' === e ? (0, i.jsx)(s.fz, { children: 'Voor deze sessie hebben we nog geen schrijftolk gevonden' }) : (0, i.jsx)(i.Fragment, {})) : (0, i.jsx)(i.Fragment, {}), (0, i.jsx)('aside', { className: (0, r.A)('ma-dsw-session__speakers'), children: h.map((t, n) => (0, i.jsxs)('div', { className: (0, r.A)('ma-dsw-session__speaker', 'ma-dsw-speaker'), children: [(0, i.jsx)('img', { className: (0, r.A)('ma-dsw-speaker__image'), src: t.image.src, alt: t.image.alt }), (0, i.jsx)(s.fz, { className: (0, r.A)('ma-dsw-speaker__description'), children: t.description[e] })] }, n)) }), u && u.icalLink && !c ? (0, i.jsx)(s.fz, { children: (0, i.jsxs)(s.vx, { href: u.icalLink, download: u.icalLink, appearance: 'primary-action-button', children: [(0, i.jsx)(s.In, { children: (0, i.jsx)(a.A, {}) }), (0, i.jsx)('span', { children: 'nl' === e ? (0, i.jsxs)(i.Fragment, { children: ['Zet', (0, i.jsx)('span', { className: 'sr-only', children: u.subject }), ' in je agenda'] }) : (0, i.jsxs)(i.Fragment, { children: ['Add', (0, i.jsx)('span', { className: 'sr-only', children: u.subject }), ' to your calendar'] }) })] }) }) : null] }) : (0, i.jsx)(i.Fragment, {});
    };
  },
  32385(e, t, n) {
   n.d(t, { bo: () => s, KF: () => p, mJ: () => g, VZ: () => x, cR: () => j, Pv: () => y, qZ: () => o, kD: () => w, QQ: () => A, B2: () => u, Pc: () => l, f4: () => i, GT: () => v, fX: () => r, eQ: () => k, B_: () => b, o_: () => f });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, t) => c.indexOf(e) - c.indexOf(t)),
    p = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return m(d(t));
    },
    u = (e, t) => g(e).includes(t),
    h = (e) => {
     const t = / URL \(([^)]+)\)/;
     return m(d(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    g = (e) => m(d(e.projects.flatMap((e) => h(e)))),
    y = (e) => {
     const t = h(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const a = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: a, id: s, value: r }) => {
        const o = /^(.+) URL/.exec(a)[1],
         i = 'Storybook' === o ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${o}`;
        return { brand: o.toLowerCase(), name: a, id: s, value: r, description: i };
       });
      return { frameworkName: t, tasks: a };
     });
    },
    f = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    k = (e, t) => t.reduce((e, t) => e?.[t], e);
   function w(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? w(e[n], [...t, n]) : []));
   }
   function v(e) {
    const t = new Map();
    function n(e) {
     return (t.has(e) || t.set(e, f(e)), t.get(e));
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   const j = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    x = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const t = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return t ? t[1] : e.replace(/^[\^~>=<]+/, '');
    },
    S = new Set(['ics', 'json', 'pdf']),
    A = (e) => {
     const t = e.split('/').pop() ?? '',
      n = t.split('.').pop()?.toLowerCase();
     return void 0 !== n && S.has(n);
    };
  },
  33491(e, t, n) {
   (n.r(t), n.d(t, { assets: () => u, contentTitle: () => p, default: () => y, frontMatter: () => m, metadata: () => a, toc: () => h }));
   const a = JSON.parse('{"id":"community/events/design-systems-week/programma","title":"Programma","description":"Programma voor de Design Systems Week 2026","source":"@site/docs/community/events/design-systems-week/programma.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week-2026/programma","permalink":"/events/design-systems-week-2026/programma","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/programma.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Programma","description":"Programma voor de Design Systems Week 2026","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Programma","pagination_label":"Programma","sidebar_position":2,"slug":"/events/design-systems-week-2026/programma","translations":{"en":"/events/design-systems-week-2026/en/program/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 Oktober, online"},"sidebar":"community","previous":{"title":"Over Design Systems Week","permalink":"/events/design-systems-week"},"next":{"title":"Tijdschema","permalink":"/events/design-systems-week-2026/tijdschema/"}}');
   var s = n(86070),
    r = n(18439),
    o = n(34225),
    i = n(24142),
    l = n(59292),
    c = n(64249),
    d = (n(790), n(86109), n(31439), n(51130));
   const m = { title: 'Programma', description: 'Programma voor de Design Systems Week 2026', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Programma', pagination_label: 'Programma', sidebar_position: 2, slug: '/events/design-systems-week-2026/programma', translations: { en: '/events/design-systems-week-2026/en/program/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 Oktober, online' },
    p = 'Programma Design Systems Week settings.year',
    u = {},
    h = [];
   function g(e) {
    const t = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(t.header, { children: (0, s.jsxs)(t.h1, { id: 'programma-design-systems-week-settingsyear', children: ['Programma Design Systems Week ', d.Ok] }) }), '\n', (0, s.jsx)(l.f, { purpose: 'lead', children: (0, s.jsxs)(t.p, { children: ['NL Design System organiseert in ', d.Ok, ' voor de ', d.nl.Z, ' keer de Design Systems Week. Van', ' ', '\n', (0, s.jsx)('strong', { children: d.nl.M }), ' zijn er dagelijks meerdere korte sessies van diverse organisaties online te\nvolgen over het ', (0, s.jsx)(t.strong, { children: 'hoe en waarom van design systems' }), '.'] }) }), '\n', (0, s.jsxs)(i.K, { children: [(0, s.jsxs)(o.v, { href: `/events/design-systems-week-${d.Ok}/tijdschema`, appearance: 'primary-action', children: ['Bekijk het tijdschema', (0, s.jsx)(c.A, { slot: 'icon-end' })] }), !!d.MX && (0, s.jsxs)(o.v, { href: d.MX, appearance: 'secondary-action', children: ['Gebruik Miro', (0, s.jsx)(c.A, { slot: 'icon-end' })] })] }), '\n', '\n', '\n'] });
   }
   function y(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(g, { ...e }) }) : g(e);
   }
  },
  34225(e, t, n) {
   n.d(t, { v: () => i });
   var a = n(94309),
    s = n(13526),
    r = n(86070);
   const o = ({ className: e, children: t, purpose: n, iconStart: a, iconEnd: o, href: i }) => (0, r.jsxs)('a', { className: (0, s.A)('nl-button', e, { 'nl-button--primary': 'primary' === n, 'nl-button--secondary': 'secondary' === n, 'nl-button--subtle': 'subtle' === n }), href: i, children: [a && (0, r.jsx)('span', { className: 'nl-button__icon-start', children: a }), (0, r.jsx)('span', { className: 'nl-button__label', children: t }), o && (0, r.jsx)('span', { className: 'nl-button__icon-end', children: o })] }),
    i = globalThis.isAstro
     ? ({ appearance: e, href: t, ...n }) => {
        let a = 'primary';
        return ((a = 'secondary-action' === e ? 'secondary' : a), (0, r.jsx)(o, { purpose: a, href: t, ...n }));
       }
     : ({ appearance: e, ...t }) => (0, r.jsx)(a.F, { className: (0, s.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...t });
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  56561(e, t, n) {
   n.d(t, { f: () => m });
   var a = n(15540),
    s = n(69967),
    r = n(86070),
    o = n(13526),
    i = n(30758),
    l = ['children', 'className', 'purpose'];
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
   var m = (0, i.forwardRef)(function (e, t) {
    var n = e.children,
     i = e.className,
     c = e.purpose,
     m = (0, s.A)(e, l);
    return (0, r.jsx)('p', d(d({ className: (0, o.$)('nl-paragraph', (0, a.A)({}, 'nl-paragraph--lead', 'lead' === c), i), ref: t }, m), {}, { children: 'lead' === c ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   m.displayName = 'Paragraph';
  },
  59292(e, t, n) {
   n.d(t, { f: () => a.f });
   var a = n(56561);
  },
  64249(e, t, n) {
   n.d(t, { A: () => a });
   const a = (0, n(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  80883(e, t, n) {
   n.d(t, { L: () => r });
   var a = n(20201),
    s = n(86070);
   const r = ({ id: e, title: t, ...n }) => (0, s.jsx)(a.Ay, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: t, poster: 'maxresdefault', ...n });
  },
  86109(e) {
   e.exports = {};
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
  94309(e, t, n) {
   n.d(t, { F: () => o, N: () => i });
   var a = n(13526),
    s = n(32385),
    r = n(86070);
   const o = ({ children: e, ...t }) => {
     const { to: n, href: a, ...o } = t;
     let i = n || a;
     const l = new URL(i, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, s.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (i = l.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: i, ...o, children: e }));
    },
    i = ({ className: e, ...t }) => (0, r.jsx)(o, { className: (0, a.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
 },
]);
