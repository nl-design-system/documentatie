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
  20698(e, t, n) {
   n.d(t, { v: () => r });
   var a = n(53538),
    i = n(13526),
    o = n(86070);
   const r = ({ appearance: e, ...t }) => (0, o.jsx)(a.F, { className: (0, i.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...t });
  },
  26655(e, t, n) {
   n.d(t, { AC: () => d, Fu: () => r, Wu: () => l, Zp: () => s });
   var a = n(46447),
    i = n(13526),
    o = n(86070);
   const r = ({ background: e, children: t, className: n, ...a }) => (0, o.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, n), ...a, children: t }),
    l = (e) => (0, o.jsx)('div', { className: 'ma-card__content', ...e }),
    s = ({ href: e, appearance: t, className: n, component: r = 'div', background: l, children: s }) => {
     const d = (e) => ('article' === r ? (0, o.jsx)('article', { ...e }) : 'section' === r ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      c = (0, o.jsx)(d, { className: (0, i.A)('ma-cardgroup__card', l && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${t}`, n), children: s });
     return e ? (0, o.jsx)(a.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: t, className: n }) => (0, o.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, n), children: t });
  },
  33500(e, t, n) {
   (n.r(t), n.d(t, { assets: () => d, contentTitle: () => s, default: () => m, frontMatter: () => l, metadata: () => a, toc: () => c }));
   const a = JSON.parse('{"id":"community/expertteam-digitale-toegankelijkheid/index","title":"Expertteam Digitale Toegankelijkheid","description":"Over het deelproject Expertteam Digitale Toegankelijkheid","source":"@site/docs/community/expertteam-digitale-toegankelijkheid/index.mdx","sourceDirName":"community/expertteam-digitale-toegankelijkheid","slug":"/project/expertteam-digitale-toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/expertteam-digitale-toegankelijkheid/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Expertteam Digitale Toegankelijkheid","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Expertteam Digitale Toegankelijkheid","pagination_label":"Expertteam Digitale Toegankelijkheid","description":"Over het deelproject Expertteam Digitale Toegankelijkheid","slug":"/project/expertteam-digitale-toegankelijkheid","keywords":["Expertteam","deelproject","nl design system","contact"]},"sidebar":"community","previous":{"title":"Aanmelden","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden"},"next":{"title":"Design Tokens valideren","permalink":"/project/expertteam-digitale-toegankelijkheid/design-tokens-lint"}}');
   var i = n(86070),
    o = n(18439),
    r = (n(46447), n(26655), n(53538), n(72863));
   n(20698);
   const l = { title: 'Expertteam Digitale Toegankelijkheid', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Expertteam Digitale Toegankelijkheid', pagination_label: 'Expertteam Digitale Toegankelijkheid', description: 'Over het deelproject Expertteam Digitale Toegankelijkheid', slug: '/project/expertteam-digitale-toegankelijkheid', keywords: ['Expertteam', 'deelproject', 'nl design system', 'contact'] },
    s = 'Deelproject Expertteam Digitale Toegankelijkheid',
    d = {},
    c = [
     { value: 'Expertteam Digitale Toegankelijkheid in de Heartbeat', id: 'expertteam-digitale-toegankelijkheid-in-de-heartbeat', level: 2 },
     { value: 'Bekijk de voortgang op GitHub', id: 'bekijk-de-voortgang-op-github', level: 2 },
    ];
   function p(e) {
    const t = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t.header, { children: (0, i.jsx)(t.h1, { id: 'deelproject-expertteam-digitale-toegankelijkheid', children: 'Deelproject Expertteam Digitale Toegankelijkheid' }) }), '\n', (0, i.jsx)(t.p, { children: 'Expertteam Digitale Toegankelijkheid is een deelproject van NL Design System, waarin nauw wordt samenwerkt met de NL Design System community.' }), '\n', (0, i.jsx)(t.p, { children: 'Op dit moment ligt de focus op het bouwen van tooling om toegankelijkheid in content, huisstijl en code te helpen verbeteren met behulp van NL Design System. Het doel is om met deze tooling overheidsorganisaties en hun leveranciers te helpen om veel voorkomende toegankelijkheidsproblemen makkelijker te kunnen voorkomen en oplossen.' }), '\n', (0, i.jsx)(t.h2, { id: 'expertteam-digitale-toegankelijkheid-in-de-heartbeat', children: 'Expertteam Digitale Toegankelijkheid in de Heartbeat' }), '\n', (0, i.jsx)(t.p, { children: 'Bekijk hieronder de YouTube afspeellijst met updates van het Expertteam Digitale Toegankelijkheid.' }), '\n', (0, i.jsx)(r.L, { id: 'PLnAxFMscDU3GB1sHyIECh-zghmfNG_-cU', playlist: !0, thumbnail: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/expertteam-digitale-toegankelijkheid-playlist.png', title: 'Expertteam Digitale Toegankelijkheid updates' }), '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', (0, i.jsx)(t.h2, { id: 'bekijk-de-voortgang-op-github', children: 'Bekijk de voortgang op GitHub' }), '\n', (0, i.jsxs)(t.ul, { children: ['\n', (0, i.jsx)(t.li, { children: (0, i.jsx)(t.a, { href: 'https://github.com/orgs/nl-design-system/projects/70/views/1?pane=info', children: 'De Backlog op het GitHub projectbord' }) }), '\n', (0, i.jsxs)(t.li, { children: [(0, i.jsx)(t.a, { href: 'https://github.com/nl-design-system/editor', children: 'De repository voor de referentie editor' }), ' voor het verbeteren van toegankelijkheid in content'] }), '\n', (0, i.jsxs)(t.li, { children: [(0, i.jsx)(t.a, { href: 'https://github.com/nl-design-system/theme-wizard', children: 'De repository voor de Theme Wizard' }), ' voor het verbeteren van toegankelijkheid in huisstijl en code'] }), '\n', (0, i.jsx)(t.li, { children: (0, i.jsx)(t.a, { href: 'https://clippy-storybook-git-main-nl-design-system.vercel.app/?path=/docs/patterns-cookie-consent-drawer--documentatie', children: 'De Storybook met Clippy componenten, templates en patronen' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, o.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  53538(e, t, n) {
   n.d(t, { F: () => r, N: () => l });
   var a = n(13526),
    i = n(76097),
    o = n(86070);
   const r = ({ children: e, ...t }) => {
     const { to: n, href: a, ...r } = t;
     let l = n || a;
     const s = new URL(l, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === s.origin ? (s.pathname.endsWith('/') || (0, i.QQ)(s.pathname) || (s.pathname = `${s.pathname}/`), (l = s.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, o.jsx)('a', { href: l, ...r, children: e }));
    },
    l = ({ className: e, ...t }) => (0, o.jsx)(r, { className: (0, a.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  72863(e, t, n) {
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
      [s, d] = i.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      p = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      m = e.title,
      u = e.poster || 'hqdefault',
      h = e.announce || 'Watch',
      g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      k = i.useMemo(() => {
       const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, n) => {
          t.append(n, e);
         }),
        t
       );
      }, [e.muted, g, e.enableJsApi, e.playlist, c, e.params]),
      b = i.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      y = i.useMemo(() => (e.playlist ? `${b}/embed/videoseries?${k.toString()}` : `${b}/embed/${c}?${k.toString()}`), [e.playlist, b, c, k]),
      f = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
      j = e.webp ? 'webp' : 'jpg',
      v = e.webp ? 'vi_webp' : 'vi',
      x = f
       ? ((e, t, n, a = 'maxresdefault') => {
          const [r, l] = (0, i.useState)('');
          return (
           (0, i.useEffect)(() => {
            const i = `https://img.youtube.com/${t}/${e}/${a}.${n}`,
             r = `https://img.youtube.com/${t}/${e}/hqdefault.${n}`,
             s = o[a],
             d = new Image();
            ((d.onload = () => {
             d.width < s ? l(r) : l(i);
            }),
             (d.onerror = () => l(r)),
             (d.src = i));
           }, [e, t, n, a]),
           r
          );
         })(e.id, v, j, u)
       : null,
      w = i.useMemo(() => e.thumbnail || x || `https://i.ytimg.com/${v}/${e.playlist ? p : c}/${u}.${j}`, [e.thumbnail, x, v, e.playlist, p, c, u, j]),
      T = e.activatedClass || 'lyt-activated',
      S = e.adNetwork || !1,
      _ = e.aspectHeight || 9,
      C = e.aspectWidth || 16,
      D = e.iframeClass || '',
      E = e.playerClass || 'lty-playbtn',
      A = e.wrapperClass || 'yt-lite',
      N = i.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      P = e.rel ? 'prefetch' : 'preload',
      $ = e.containerElement || 'article',
      L = !1 !== e.noscriptFallback,
      O = () => {
       s || d(!0);
      };
     return (
      i.useEffect(() => {
       s && (N(), e.focusOnLoad && 'object' == typeof t && t?.current && t.current.focus());
      }, [s, N, e.focusOnLoad, t]),
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
          n || ((n = !0), e.onReady && e.onReady({ videoId: e.id, title: m }));
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
         'object' == typeof t && t?.current?.contentWindow && t.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
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
      }, [s, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, m, t]),
      (0, a.jsxs)(a.Fragment, {
       children: [
        !e.lazyLoad && (0, a.jsx)('link', { rel: P, href: w, as: 'image' }),
        (0, a.jsx)(a.Fragment, { children: n && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: b }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), S && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, m, w, b, e.seo) } }),
        L && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${m} on YouTube`, children: ['Watch "', m, '" on YouTube'] }) }),
        (0, a.jsxs)($, {
         onPointerOver: () => {
          n || l(!0);
         },
         onClick: O,
         className: `${A} ${s ? T : ''}`,
         'data-title': m,
         role: s || e.lazyLoad ? void 0 : 'img',
         'aria-label': s ? void 0 : `${m} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${w})` }), '--aspect-ratio': (_ / C) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !s && (0, a.jsx)('img', { src: w, alt: `${m} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !s && (0, a.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && s) && (0, a.jsx)('button', { type: 'button', className: E, 'aria-label': `${h} ${m}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, onClick: O, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), s && (0, a.jsx)('iframe', { ref: t, className: D, title: m, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: y, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    s = ({ id: e, title: t, ...n }) => (0, a.jsx)(l, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: t, poster: 'maxresdefault', ...n });
  },
  76097(e, t, n) {
   n.d(t, { bo: () => i, KF: () => m, mJ: () => g, VZ: () => w, cR: () => x, Pv: () => k, qZ: () => r, kD: () => j, QQ: () => S, B2: () => u, Pc: () => s, f4: () => l, GT: () => v, fX: () => o, eQ: () => f, B_: () => y, o_: () => b });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    s = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const p = (e) => [...e].sort((e, t) => d.indexOf(e) - d.indexOf(t)),
    m = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return p(c(t));
    },
    u = (e, t) => g(e).includes(t),
    h = (e) => {
     const t = / URL \(([^)]+)\)/;
     return p(c(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    g = (e) => p(c(e.projects.flatMap((e) => h(e)))),
    k = (e) => {
     const t = h(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const a = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: a, id: i, value: o }) => {
        const r = /^(.+) URL/.exec(a)[1],
         l = 'Storybook' === r ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${r}`;
        return { brand: r.toLowerCase(), name: a, id: i, value: o, description: l };
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
    T = new Set(['ics', 'json', 'pdf']),
    S = (e) => {
     const t = e.split('/').pop() ?? '',
      n = t.split('.').pop()?.toLowerCase();
     return void 0 !== n && T.has(n);
    };
  },
 },
]);
