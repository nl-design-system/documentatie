'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71134],
 {
  18439(e, t, n) {
   n.d(t, { R: () => r, x: () => l });
   var a = n(30758);
   const i = {},
    o = a.createContext(i);
   function r(e) {
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
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), a.createElement(o.Provider, { value: t }, e.children));
   }
  },
  33500(e, t, n) {
   (n.r(t), n.d(t, { assets: () => c, contentTitle: () => s, default: () => u, frontMatter: () => l, metadata: () => a, toc: () => d }));
   const a = JSON.parse('{"id":"community/expertteam-digitale-toegankelijkheid/index","title":"Expertteam Digitale Toegankelijkheid","description":"Over het deelproject Expertteam Digitale Toegankelijkheid","source":"@site/docs/community/expertteam-digitale-toegankelijkheid/index.mdx","sourceDirName":"community/expertteam-digitale-toegankelijkheid","slug":"/project/expertteam-digitale-toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/expertteam-digitale-toegankelijkheid/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Expertteam Digitale Toegankelijkheid","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Expertteam Digitale Toegankelijkheid","pagination_label":"Expertteam Digitale Toegankelijkheid","description":"Over het deelproject Expertteam Digitale Toegankelijkheid","slug":"/project/expertteam-digitale-toegankelijkheid","keywords":["Expertteam","deelproject","nl design system","contact"]},"sidebar":"community","previous":{"title":"Aanmelden","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden"},"next":{"title":"Bijeenkomsten","permalink":"/community/events/overzicht"}}');
   var i = n(86070),
    o = n(18439),
    r = (n(46447), n(90495), n(45282), n(73058));
   n(88666);
   const l = { title: 'Expertteam Digitale Toegankelijkheid', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Expertteam Digitale Toegankelijkheid', pagination_label: 'Expertteam Digitale Toegankelijkheid', description: 'Over het deelproject Expertteam Digitale Toegankelijkheid', slug: '/project/expertteam-digitale-toegankelijkheid', keywords: ['Expertteam', 'deelproject', 'nl design system', 'contact'] },
    s = 'Deelproject Expertteam Digitale Toegankelijkheid',
    c = {},
    d = [
     { value: 'Expertteam Digitale Toegankelijkheid in de Heartbeat', id: 'expertteam-digitale-toegankelijkheid-in-de-heartbeat', level: 2 },
     { value: 'Bekijk de voortgang op GitHub', id: 'bekijk-de-voortgang-op-github', level: 2 },
    ];
   function p(e) {
    const t = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t.header, { children: (0, i.jsx)(t.h1, { id: 'deelproject-expertteam-digitale-toegankelijkheid', children: 'Deelproject Expertteam Digitale Toegankelijkheid' }) }), '\n', (0, i.jsx)(t.p, { children: 'Expertteam Digitale Toegankelijkheid is een deelproject van NL Design System, waarin nauw wordt samenwerkt met de NL Design System community.' }), '\n', (0, i.jsx)(t.p, { children: 'Op dit moment ligt de focus op het bouwen van tooling om toegankelijkheid in content, huisstijl en code te helpen verbeteren met behulp van NL Design System. Het doel is om met deze tooling overheidsorganisaties en hun leveranciers te helpen om veel voorkomende toegankelijkheidsproblemen makkelijker te kunnen voorkomen en oplossen.' }), '\n', (0, i.jsx)(t.h2, { id: 'expertteam-digitale-toegankelijkheid-in-de-heartbeat', children: 'Expertteam Digitale Toegankelijkheid in de Heartbeat' }), '\n', (0, i.jsx)(t.p, { children: 'Bekijk hieronder de YouTube afspeellijst met updates van het Expertteam Digitale Toegankelijkheid.' }), '\n', (0, i.jsx)(r.L, { id: 'PLnAxFMscDU3GB1sHyIECh-zghmfNG_-cU', playlist: !0, thumbnail: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/expertteam-digitale-toegankelijkheid-playlist.png', title: 'Expertteam Digitale Toegankelijkheid updates' }), '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', (0, i.jsx)(t.h2, { id: 'bekijk-de-voortgang-op-github', children: 'Bekijk de voortgang op GitHub' }), '\n', (0, i.jsxs)(t.ul, { children: ['\n', (0, i.jsx)(t.li, { children: (0, i.jsx)(t.a, { href: 'https://github.com/orgs/nl-design-system/projects/70/views/1?pane=info', children: 'De Backlog op het GitHub projectbord' }) }), '\n', (0, i.jsxs)(t.li, { children: [(0, i.jsx)(t.a, { href: 'https://github.com/nl-design-system/editor', children: 'De repository voor de referentie editor' }), ' voor het verbeteren van toegankelijkheid in content'] }), '\n', (0, i.jsxs)(t.li, { children: [(0, i.jsx)(t.a, { href: 'https://github.com/nl-design-system/theme-wizard', children: 'De repository voor de Theme Wizard' }), ' voor het verbeteren van toegankelijkheid in huisstijl en code'] }), '\n', (0, i.jsx)(t.li, { children: (0, i.jsx)(t.a, { href: 'https://clippy-storybook-git-main-nl-design-system.vercel.app/?path=/docs/patterns-cookie-consent-drawer--documentatie', children: 'De Storybook met Clippy componenten, templates en patronen' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, o.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  45282(e, t, n) {
   n.d(t, { F: () => o, N: () => r });
   var a = n(13526),
    i = n(86070);
   const o = ({ children: e, ...t }) => {
     const { to: n, href: a, ...o } = t;
     let r = n || a;
     const l = new URL(r, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? ((l.pathname = l.pathname.endsWith('/') ? l.pathname : `${l.pathname}/`), (r = l.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: r, ...o, children: e }));
    },
    r = ({ className: e, ...t }) => (0, i.jsx)(o, { className: (0, a.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  73058(e, t, n) {
   n.d(t, { L: () => s });
   var a = n(86070),
    i = n(30758);
   const o = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, t, n, a, i) {
    const o = { '@context': 'https://schema.org', '@type': 'VideoObject', name: i?.name || t, thumbnailUrl: [i?.thumbnailUrl || n], embedUrl: i?.embedUrl || `${a}/embed/${e}`, contentUrl: i?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(i?.description && { description: i.description }), ...(i?.uploadDate && { uploadDate: i.uploadDate }), ...(i?.duration && { duration: i.duration }) };
    return JSON.stringify(o);
   }
   const l = i.forwardRef(function (e, t) {
     const [n, l] = i.useState(!1),
      [s, c] = i.useState(e.alwaysLoadIframe || !1),
      d = encodeURIComponent(e.id),
      p = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      u = e.title,
      h = e.poster || 'hqdefault',
      m = e.announce || 'Watch',
      g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      k = i.useMemo(() => {
       const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: d } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, n) => {
          t.append(n, e);
         }),
        t
       );
      }, [e.muted, g, e.enableJsApi, e.playlist, d, e.params]),
      y = i.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      b = i.useMemo(() => (e.playlist ? `${y}/embed/videoseries?${k.toString()}` : `${y}/embed/${d}?${k.toString()}`), [e.playlist, y, d, k]),
      f = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
      j = e.webp ? 'webp' : 'jpg',
      x = e.webp ? 'vi_webp' : 'vi',
      v = f
       ? ((e, t, n, a = 'maxresdefault') => {
          const [r, l] = (0, i.useState)('');
          return (
           (0, i.useEffect)(() => {
            const i = `https://img.youtube.com/${t}/${e}/${a}.${n}`,
             r = `https://img.youtube.com/${t}/${e}/hqdefault.${n}`,
             s = o[a],
             c = new Image();
            ((c.onload = () => {
             c.width < s ? l(r) : l(i);
            }),
             (c.onerror = () => l(r)),
             (c.src = i));
           }, [e, t, n, a]),
           r
          );
         })(e.id, x, j, h)
       : null,
      w = i.useMemo(() => e.thumbnail || v || `https://i.ytimg.com/${x}/${e.playlist ? p : d}/${h}.${j}`, [e.thumbnail, v, x, e.playlist, p, d, h, j]),
      E = e.activatedClass || 'lyt-activated',
      _ = e.adNetwork || !1,
      C = e.aspectHeight || 9,
      $ = e.aspectWidth || 16,
      T = e.iframeClass || '',
      D = e.playerClass || 'lty-playbtn',
      N = e.wrapperClass || 'yt-lite',
      S = i.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      P = e.rel ? 'prefetch' : 'preload',
      L = e.containerElement || 'article',
      R = !1 !== e.noscriptFallback,
      O = () => {
       s || c(!0);
      };
     return (
      i.useEffect(() => {
       s && (S(), e.focusOnLoad && 'object' == typeof t && t?.current && t.current.focus());
      }, [s, S, e.focusOnLoad, t]),
      i.useEffect(() => {
       if (!s || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
       let n = !1,
        a = !1;
       const i = (a) => {
        if ('https://www.youtube.com' !== a.origin && 'https://www.youtube-nocookie.com' !== a.origin) return;
        let i;
        try {
         i = 'string' == typeof a.data ? JSON.parse(a.data) : a.data;
        } catch {
         return;
        }
        switch (i.event) {
         case 'onReady':
          n || ((n = !0), e.onReady && e.onReady({ videoId: e.id, title: u }));
          break;
         case 'infoDelivery':
          if (void 0 !== i.info?.playerState) {
           const n = i.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: n, currentTime: i.info.currentTime, duration: i.info.duration }), n)) {
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
          (void 0 !== i.info?.playbackRate && e.onPlaybackRateChange?.(i.info.playbackRate), void 0 !== i.info?.playbackQuality && e.onPlaybackQualityChange?.(i.info.playbackQuality));
          break;
         case 'onStateChange':
          if (void 0 !== i.info?.playerState) {
           const n = i.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: n, currentTime: i.info.currentTime, duration: i.info.duration }), n)) {
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
          if (i.info && 'errorCode' in i.info) {
           const t = i.info.errorCode;
           e.onError && e.onError(t);
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
       const o = [],
        r = () => {
         'object' == typeof t && t?.current?.contentWindow && t.current.contentWindow.postMessage('{"event":"listening","id":"' + d + '"}', '*');
        },
        l = () => {
         a ||
          ((a = !0),
          r(),
          [100, 300, 600, 1200, 2400].forEach((e) => {
           o.push(setTimeout(r, e));
          }));
        };
       return (
        'object' == typeof t && t?.current
         ? (t.current.addEventListener('load', l), 'complete' === t.current.contentDocument?.readyState && l())
         : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
            o.push(setTimeout(r, e));
           }),
        () => {
         (window.removeEventListener('message', i), o.forEach(clearTimeout), 'object' == typeof t && t?.current && t.current.removeEventListener('load', l));
        }
       );
      }, [s, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, d, u, t]),
      (0, a.jsxs)(a.Fragment, {
       children: [
        !e.lazyLoad && (0, a.jsx)('link', { rel: P, href: w, as: 'image' }),
        (0, a.jsx)(a.Fragment, { children: n && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: y }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), _ && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, u, w, y, e.seo) } }),
        R && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
        (0, a.jsxs)(L, {
         onPointerOver: () => {
          n || l(!0);
         },
         onClick: O,
         className: `${N} ${s ? E : ''}`,
         'data-title': u,
         role: s || e.lazyLoad ? void 0 : 'img',
         'aria-label': s ? void 0 : `${u} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${w})` }), '--aspect-ratio': (C / $) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !s && (0, a.jsx)('img', { src: w, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !s && (0, a.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && s) && (0, a.jsx)('button', { type: 'button', className: D, 'aria-label': `${m} ${u}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, onClick: O, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: m }) }), s && (0, a.jsx)('iframe', { ref: t, className: T, title: u, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: b, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    s = ({ id: e, title: t, ...n }) => (0, a.jsx)(l, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: t, poster: 'maxresdefault', ...n });
  },
  88666(e, t, n) {
   n.d(t, { v: () => r });
   var a = n(45282),
    i = n(13526),
    o = n(86070);
   const r = ({ appearance: e, ...t }) => (0, o.jsx)(a.F, { className: (0, i.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...t });
  },
  90495(e, t, n) {
   n.d(t, { AC: () => c, Fu: () => r, Wu: () => l, Zp: () => s });
   var a = n(46447),
    i = n(13526),
    o = n(86070);
   const r = ({ background: e, children: t, className: n, ...a }) => (0, o.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, n), ...a, children: t }),
    l = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    s = ({ href: e, appearance: t, className: n, component: r = 'div', background: l, children: s }) => {
     const c = (e) => ('article' === r ? (0, o.jsx)('article', { ...e }) : 'section' === r ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      d = (0, o.jsx)(c, { className: (0, i.A)('cardgroup__card', l && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: s });
     return e ? (0, o.jsx)(a.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'medium', children: t, className: n }) => (0, o.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
 },
]);
