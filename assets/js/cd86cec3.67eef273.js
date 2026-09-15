'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71134],
 {
  18439(e, t, n) {
   n.d(t, { R: () => r, x: () => s });
   var a = n(30758);
   const o = {},
    i = a.createContext(o);
   function r(e) {
    const t = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function s(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), a.createElement(i.Provider, { value: t }, e.children));
   }
  },
  19472(e, t, n) {
   n.d(t, { L: () => i });
   var a = n(20201),
    o = n(86070);
   const i = ({ id: e, title: t, ...n }) => (0, o.jsx)(a.Ay, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: t, poster: 'maxresdefault', ...n });
  },
  20201(e, t, n) {
   n.d(t, { Ay: () => s });
   var a = n(86070),
    o = n(30758);
   const i = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, t, n, a, o) {
    const i = { '@context': 'https://schema.org', '@type': 'VideoObject', name: o?.name || t, thumbnailUrl: [o?.thumbnailUrl || n], embedUrl: o?.embedUrl || `${a}/embed/${e}`, contentUrl: o?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(o?.description && { description: o.description }), ...(o?.uploadDate && { uploadDate: o.uploadDate }), ...(o?.duration && { duration: o.duration }) };
    return JSON.stringify(i);
   }
   const s = o.forwardRef(function (e, t) {
    const [n, s] = o.useState(!1),
     [l, c] = o.useState(e.alwaysLoadIframe || !1),
     d = encodeURIComponent(e.id),
     p = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     u = e.title,
     m = e.poster || 'hqdefault',
     h = e.announce || 'Watch',
     g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     k = o.useMemo(() => {
      const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: d } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, n) => {
         t.append(n, e);
        }),
       t
      );
     }, [e.muted, g, e.enableJsApi, e.playlist, d, e.params]),
     b = o.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     y = o.useMemo(() => (e.playlist ? `${b}/embed/videoseries?${k.toString()}` : `${b}/embed/${d}?${k.toString()}`), [e.playlist, b, d, k]),
     f = !e.thumbnail && !e.playlist && 'maxresdefault' === m,
     j = e.webp ? 'webp' : 'jpg',
     v = e.webp ? 'vi_webp' : 'vi',
     x = f
      ? ((e, t, n, a = 'maxresdefault') => {
         const [r, s] = (0, o.useState)('');
         return (
          (0, o.useEffect)(() => {
           const o = `https://img.youtube.com/${t}/${e}/${a}.${n}`,
            r = `https://img.youtube.com/${t}/${e}/hqdefault.${n}`,
            l = i[a],
            c = new Image();
           ((c.onload = () => {
            c.width < l ? s(r) : s(o);
           }),
            (c.onerror = () => s(r)),
            (c.src = o));
          }, [e, t, n, a]),
          r
         );
        })(e.id, v, j, m)
      : null,
     w = o.useMemo(() => e.thumbnail || x || `https://i.ytimg.com/${v}/${e.playlist ? p : d}/${m}.${j}`, [e.thumbnail, x, v, e.playlist, p, d, m, j]),
     _ = e.activatedClass || 'lyt-activated',
     T = e.adNetwork || !1,
     S = e.aspectHeight || 9,
     D = e.aspectWidth || 16,
     N = e.iframeClass || '',
     A = e.playerClass || 'lty-playbtn',
     E = e.wrapperClass || 'yt-lite',
     C = o.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     O = e.rel ? 'prefetch' : 'preload',
     P = e.containerElement || 'article',
     $ = !1 !== e.noscriptFallback,
     L = () => {
      l || c(!0);
     };
    return (
     o.useEffect(() => {
      l && (C(), e.focusOnLoad && 'object' == typeof t && t?.current && t.current.focus());
     }, [l, C, e.focusOnLoad, t]),
     o.useEffect(() => {
      if (!l || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
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
         n || ((n = !0), e.onReady && e.onReady({ videoId: e.id, title: u }));
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
      const i = [],
       r = () => {
        'object' == typeof t && t?.current?.contentWindow && t.current.contentWindow.postMessage('{"event":"listening","id":"' + d + '"}', '*');
       },
       s = () => {
        a ||
         ((a = !0),
         r(),
         [100, 300, 600, 1200, 2400].forEach((e) => {
          i.push(setTimeout(r, e));
         }));
       };
      return (
       'object' == typeof t && t?.current
        ? (t.current.addEventListener('load', s), 'complete' === t.current.contentDocument?.readyState && s())
        : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
           i.push(setTimeout(r, e));
          }),
       () => {
        (window.removeEventListener('message', o), i.forEach(clearTimeout), 'object' == typeof t && t?.current && t.current.removeEventListener('load', s));
       }
      );
     }, [l, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, d, u, t]),
     (0, a.jsxs)(a.Fragment, {
      children: [
       !e.lazyLoad && (0, a.jsx)('link', { rel: O, href: w, as: 'image' }),
       (0, a.jsx)(a.Fragment, { children: n && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: b }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), T && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, u, w, b, e.seo) } }),
       $ && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
       (0, a.jsxs)(P, {
        onPointerOver: () => {
         n || s(!0);
        },
        onClick: L,
        className: `${E} ${l ? _ : ''}`,
        'data-title': u,
        role: l || e.lazyLoad ? void 0 : 'img',
        'aria-label': l ? void 0 : `${u} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${w})` }), '--aspect-ratio': (S / D) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !l && (0, a.jsx)('img', { src: w, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !l && (0, a.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && l) && (0, a.jsx)('button', { type: 'button', className: A, 'aria-label': `${h} ${u}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, onClick: L, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), l && (0, a.jsx)('iframe', { ref: t, className: N, title: u, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: y, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  23049(e, t, n) {
   (n.r(t), n.d(t, { assets: () => c, contentTitle: () => l, default: () => u, frontMatter: () => s, metadata: () => a, toc: () => d }));
   const a = JSON.parse('{"id":"community/expertteam-digitale-toegankelijkheid/index","title":"Expertteam Digitale Toegankelijkheid","description":"Over het deelproject Expertteam Digitale Toegankelijkheid","source":"@site/docs/community/expertteam-digitale-toegankelijkheid/index.mdx","sourceDirName":"community/expertteam-digitale-toegankelijkheid","slug":"/project/expertteam-digitale-toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/expertteam-digitale-toegankelijkheid/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Expertteam Digitale Toegankelijkheid","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Expertteam Digitale Toegankelijkheid","pagination_label":"Expertteam Digitale Toegankelijkheid","description":"Over het deelproject Expertteam Digitale Toegankelijkheid","slug":"/project/expertteam-digitale-toegankelijkheid","keywords":["Expertteam","deelproject","nl design system","contact"]},"sidebar":"community","previous":{"title":"Aanmelden","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden"},"next":{"title":"Design Tokens valideren","permalink":"/project/expertteam-digitale-toegankelijkheid/design-tokens-lint"}}');
   var o = n(86070),
    i = n(18439),
    r = (n(66153), n(26165), n(24456), n(19472));
   (n(29680), n(35683));
   const s = { title: 'Expertteam Digitale Toegankelijkheid', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Expertteam Digitale Toegankelijkheid', pagination_label: 'Expertteam Digitale Toegankelijkheid', description: 'Over het deelproject Expertteam Digitale Toegankelijkheid', slug: '/project/expertteam-digitale-toegankelijkheid', keywords: ['Expertteam', 'deelproject', 'nl design system', 'contact'] },
    l = 'Deelproject Expertteam Digitale Toegankelijkheid',
    c = {},
    d = [
     { value: 'Expertteam Digitale Toegankelijkheid in de Heartbeat', id: 'expertteam-digitale-toegankelijkheid-in-de-heartbeat', level: 2 },
     { value: 'Bekijk de voortgang op GitHub', id: 'bekijk-de-voortgang-op-github', level: 2 },
    ];
   function p(e) {
    const t = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(t.header, { children: (0, o.jsx)(t.h1, { id: 'deelproject-expertteam-digitale-toegankelijkheid', children: 'Deelproject Expertteam Digitale Toegankelijkheid' }) }), '\n', (0, o.jsx)(t.p, { children: 'Expertteam Digitale Toegankelijkheid is een deelproject van NL Design System, waarin nauw wordt samenwerkt met de NL Design System community.' }), '\n', (0, o.jsx)(t.p, { children: 'Op dit moment ligt de focus op het bouwen van tooling om toegankelijkheid in content, huisstijl en code te helpen verbeteren met behulp van NL Design System. Het doel is om met deze tooling overheidsorganisaties en hun leveranciers te helpen om veel voorkomende toegankelijkheidsproblemen makkelijker te kunnen voorkomen en oplossen.' }), '\n', (0, o.jsx)(t.h2, { id: 'expertteam-digitale-toegankelijkheid-in-de-heartbeat', children: 'Expertteam Digitale Toegankelijkheid in de Heartbeat' }), '\n', (0, o.jsx)(t.p, { children: 'Bekijk hieronder de YouTube afspeellijst met updates van het Expertteam Digitale Toegankelijkheid.' }), '\n', (0, o.jsx)(r.L, { id: 'PLnAxFMscDU3GB1sHyIECh-zghmfNG_-cU', playlist: !0, thumbnail: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/expertteam-digitale-toegankelijkheid-playlist.png', title: 'Expertteam Digitale Toegankelijkheid updates' }), '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', (0, o.jsx)(t.h2, { id: 'bekijk-de-voortgang-op-github', children: 'Bekijk de voortgang op GitHub' }), '\n', (0, o.jsxs)(t.ul, { children: ['\n', (0, o.jsx)(t.li, { children: (0, o.jsx)(t.a, { href: 'https://github.com/orgs/nl-design-system/projects/70/views/1?pane=info', children: 'De Backlog op het GitHub projectbord' }) }), '\n', (0, o.jsxs)(t.li, { children: [(0, o.jsx)(t.a, { href: 'https://github.com/nl-design-system/editor', children: 'De repository voor de referentie editor' }), ' voor het verbeteren van toegankelijkheid in content'] }), '\n', (0, o.jsxs)(t.li, { children: [(0, o.jsx)(t.a, { href: 'https://github.com/nl-design-system/theme-wizard', children: 'De repository voor de Theme Wizard' }), ' voor het verbeteren van toegankelijkheid in huisstijl en code'] }), '\n', (0, o.jsx)(t.li, { children: (0, o.jsx)(t.a, { href: 'https://clippy-storybook-git-main-nl-design-system.vercel.app/?path=/docs/patterns-cookie-consent-drawer--documentatie', children: 'De Storybook met Clippy componenten, templates en patronen' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
  24456(e, t, n) {
   n.d(t, { F: () => r, N: () => s });
   var a = n(13526),
    o = n(84471),
    i = n(86070);
   const r = ({ children: e, ...t }) => {
     const { to: n, href: a, ...r } = t;
     let s = n || a;
     const l = new URL(s, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, o.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (s = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: s, ...r, children: e }));
    },
    s = ({ className: e, ...t }) => (0, i.jsx)(r, { className: (0, a.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  26165(e, t, n) {
   n.d(t, { AC: () => c, Fu: () => r, Wu: () => s, Zp: () => l });
   var a = n(46447),
    o = n(13526),
    i = n(86070);
   const r = ({ background: e, children: t, className: n, ...a }) => (0, i.jsx)('div', { className: (0, o.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, n), ...a, children: t }),
    s = (e) => (0, i.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: t, className: n, component: r = 'div', background: s, children: l }) => {
     const c = (e) => ('article' === r ? (0, i.jsx)('article', { ...e }) : 'section' === r ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      d = (0, i.jsx)(c, { className: (0, o.A)('ma-cardgroup__card', s && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${t}`, n), children: l });
     return e ? (0, i.jsx)(a.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'large', children: t, className: n }) => (0, i.jsx)('div', { className: (0, o.A)('ma-cardgroup', `ma-cardgroup--${e}`, n), children: t });
  },
  29680(e, t, n) {
   n.d(t, { v: () => s });
   var a = n(24456),
    o = n(13526),
    i = n(86070);
   const r = ({ className: e, children: t, purpose: n, iconStart: a, iconEnd: r, href: s }) => (0, i.jsxs)('a', { className: (0, o.A)('nl-button', e, { 'nl-button--primary': 'primary' === n, 'nl-button--secondary': 'secondary' === n, 'nl-button--subtle': 'subtle' === n }), href: s, children: [a && (0, i.jsx)('span', { className: 'nl-button__icon-start', children: a }), (0, i.jsx)('span', { className: 'nl-button__label', children: t }), r && (0, i.jsx)('span', { className: 'nl-button__icon-end', children: r })] }),
    s = globalThis.isAstro
     ? ({ appearance: e, href: t, ...n }) => {
        let a = 'primary';
        return ((a = 'secondary-action' === e ? 'secondary' : a), (0, i.jsx)(r, { purpose: a, href: t, ...n }));
       }
     : ({ appearance: e, ...t }) => (0, i.jsx)(a.F, { className: (0, o.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...t });
  },
  35683(e, t, n) {
   n.d(t, { K: () => a.e2 });
   var a = n(29181);
  },
  56561(e, t, n) {
   n.d(t, { f: () => p });
   var a = n(15540),
    o = n(69967),
    i = n(86070),
    r = n(13526),
    s = n(30758),
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
   var p = (0, s.forwardRef)(function (e, t) {
    var n = e.children,
     s = e.className,
     c = e.purpose,
     p = (0, o.A)(e, l);
    return (0, i.jsx)('p', d(d({ className: (0, r.$)('nl-paragraph', (0, a.A)({}, 'nl-paragraph--lead', 'lead' === c), s), ref: t }, p), {}, { children: 'lead' === c ? (0, i.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   p.displayName = 'Paragraph';
  },
  66153(e, t, n) {
   n.d(t, { f: () => a.f });
   var a = n(56561);
  },
  84471(e, t, n) {
   n.d(t, { bo: () => o, KF: () => u, mJ: () => g, VZ: () => w, cR: () => x, Pv: () => k, qZ: () => r, kD: () => j, QQ: () => T, B2: () => m, Pc: () => l, f4: () => s, GT: () => v, fX: () => i, eQ: () => f, B_: () => y, o_: () => b });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    o = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const p = (e) => [...e].sort((e, t) => c.indexOf(e) - c.indexOf(t)),
    u = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return p(d(t));
    },
    m = (e, t) => g(e).includes(t),
    h = (e) => {
     const t = / URL \(([^)]+)\)/;
     return p(d(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    g = (e) => p(d(e.projects.flatMap((e) => h(e)))),
    k = (e) => {
     const t = h(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const a = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: a, id: o, value: i }) => {
        const r = /^(.+) URL/.exec(a)[1],
         s = 'Storybook' === r ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${r}`;
        return { brand: r.toLowerCase(), name: a, id: o, value: i, description: s };
       });
      return { frameworkName: t, tasks: a };
     });
    },
    b = (e) => e.join('.'),
    y = (e) => '--' + e.join('-'),
    f = (e, t) => t.reduce((e, t) => e?.[t], e);
   function j(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? j(e[n], [...t, n]) : []));
   }
   function v(e) {
    const t = new Map();
    function n(e) {
     return (t.has(e) || t.set(e, b(e)), t.get(e));
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   const x = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    w = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const t = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return t ? t[1] : e.replace(/^[\^~>=<]+/, '');
    },
    _ = new Set(['ics', 'json', 'pdf']),
    T = (e) => {
     const t = e.split('/').pop() ?? '',
      n = t.split('.').pop()?.toLowerCase();
     return void 0 !== n && _.has(n);
    };
  },
 },
]);
