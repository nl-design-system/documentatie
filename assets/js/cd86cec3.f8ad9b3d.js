'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71134],
 {
  18439(e, t, n) {
   n.d(t, { R: () => i, x: () => l });
   var a = n(30758);
   const o = {},
    r = a.createContext(o);
   function i(e) {
    const t = a.useContext(r);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function l(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), a.createElement(r.Provider, { value: t }, e.children));
   }
  },
  20201(e, t, n) {
   n.d(t, { Ay: () => l });
   var a = n(86070),
    o = n(30758);
   const r = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function i(e, t, n, a, o) {
    const r = { '@context': 'https://schema.org', '@type': 'VideoObject', name: o?.name || t, thumbnailUrl: [o?.thumbnailUrl || n], embedUrl: o?.embedUrl || `${a}/embed/${e}`, contentUrl: o?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(o?.description && { description: o.description }), ...(o?.uploadDate && { uploadDate: o.uploadDate }), ...(o?.duration && { duration: o.duration }) };
    return JSON.stringify(r);
   }
   const l = o.forwardRef(function (e, t) {
    const [n, l] = o.useState(!1),
     [s, c] = o.useState(e.alwaysLoadIframe || !1),
     d = encodeURIComponent(e.id),
     p = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     u = e.title,
     m = e.poster || 'hqdefault',
     h = e.announce || 'Watch',
     g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     b = o.useMemo(() => {
      const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: d } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, n) => {
         t.append(n, e);
        }),
       t
      );
     }, [e.muted, g, e.enableJsApi, e.playlist, d, e.params]),
     f = o.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     y = o.useMemo(() => (e.playlist ? `${f}/embed/videoseries?${b.toString()}` : `${f}/embed/${d}?${b.toString()}`), [e.playlist, f, d, b]),
     k = !e.thumbnail && !e.playlist && 'maxresdefault' === m,
     j = e.webp ? 'webp' : 'jpg',
     v = e.webp ? 'vi_webp' : 'vi',
     x = k
      ? ((e, t, n, a = 'maxresdefault') => {
         const [i, l] = (0, o.useState)('');
         return (
          (0, o.useEffect)(() => {
           const o = `https://img.youtube.com/${t}/${e}/${a}.${n}`,
            i = `https://img.youtube.com/${t}/${e}/hqdefault.${n}`,
            s = r[a],
            c = new Image();
           ((c.onload = () => {
            c.width < s ? l(i) : l(o);
           }),
            (c.onerror = () => l(i)),
            (c.src = o));
          }, [e, t, n, a]),
          i
         );
        })(e.id, v, j, m)
      : null,
     w = o.useMemo(() => e.thumbnail || x || `https://i.ytimg.com/${v}/${e.playlist ? p : d}/${m}.${j}`, [e.thumbnail, x, v, e.playlist, p, d, m, j]),
     S = e.activatedClass || 'lyt-activated',
     _ = e.adNetwork || !1,
     T = e.aspectHeight || 9,
     N = e.aspectWidth || 16,
     D = e.iframeClass || '',
     O = e.playerClass || 'lty-playbtn',
     A = e.wrapperClass || 'yt-lite',
     E = o.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     C = e.rel ? 'prefetch' : 'preload',
     P = e.containerElement || 'article',
     $ = !1 !== e.noscriptFallback,
     L = () => {
      s || c(!0);
     };
    return (
     o.useEffect(() => {
      s && (E(), e.focusOnLoad && 'object' == typeof t && t?.current && t.current.focus());
     }, [s, E, e.focusOnLoad, t]),
     o.useEffect(() => {
      if (!s || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
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
      const r = [],
       i = () => {
        'object' == typeof t && t?.current?.contentWindow && t.current.contentWindow.postMessage('{"event":"listening","id":"' + d + '"}', '*');
       },
       l = () => {
        a ||
         ((a = !0),
         i(),
         [100, 300, 600, 1200, 2400].forEach((e) => {
          r.push(setTimeout(i, e));
         }));
       };
      return (
       'object' == typeof t && t?.current
        ? (t.current.addEventListener('load', l), 'complete' === t.current.contentDocument?.readyState && l())
        : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
           r.push(setTimeout(i, e));
          }),
       () => {
        (window.removeEventListener('message', o), r.forEach(clearTimeout), 'object' == typeof t && t?.current && t.current.removeEventListener('load', l));
       }
      );
     }, [s, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, d, u, t]),
     (0, a.jsxs)(a.Fragment, {
      children: [
       !e.lazyLoad && (0, a.jsx)('link', { rel: C, href: w, as: 'image' }),
       (0, a.jsx)(a.Fragment, { children: n && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: f }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), _ && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: i(e.id, u, w, f, e.seo) } }),
       $ && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
       (0, a.jsxs)(P, {
        onPointerOver: () => {
         n || l(!0);
        },
        onClick: L,
        className: `${A} ${s ? S : ''}`,
        'data-title': u,
        role: s || e.lazyLoad ? void 0 : 'img',
        'aria-label': s ? void 0 : `${u} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${w})` }), '--aspect-ratio': (T / N) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !s && (0, a.jsx)('img', { src: w, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !s && (0, a.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && s) && (0, a.jsx)('button', { type: 'button', className: O, 'aria-label': `${h} ${u}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, onClick: L, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), s && (0, a.jsx)('iframe', { ref: t, className: D, title: u, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: y, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  21530(e, t, n) {
   n.d(t, { AC: () => c, Fu: () => i, Wu: () => l, Zp: () => s });
   var a = n(46447),
    o = n(13526),
    r = n(86070);
   const i = ({ background: e, children: t, className: n, ...a }) => (0, r.jsx)('div', { className: (0, o.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, n), ...a, children: t }),
    l = (e) => (0, r.jsx)('div', { className: 'ma-card__content', ...e }),
    s = ({ href: e, appearance: t, className: n, component: i = 'div', background: l, children: s }) => {
     const c = (e) => ('article' === i ? (0, r.jsx)('article', { ...e }) : 'section' === i ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      d = (0, r.jsx)(c, { className: (0, o.A)('ma-cardgroup__card', l && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${t}`, n), children: s });
     return e ? (0, r.jsx)(a.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'large', children: t, className: n }) => (0, r.jsx)('div', { className: (0, o.A)('ma-cardgroup', `ma-cardgroup--${e}`, n), children: t });
  },
  24142(e, t, n) {
   n.d(t, { K: () => a.e2 });
   var a = n(29181);
  },
  25025(e, t, n) {
   (n.r(t), n.d(t, { assets: () => c, contentTitle: () => s, default: () => u, frontMatter: () => l, metadata: () => a, toc: () => d }));
   const a = JSON.parse('{"id":"community/expertteam-digitale-toegankelijkheid/index","title":"Expertteam Digitale Toegankelijkheid","description":"Over het deelproject Expertteam Digitale Toegankelijkheid","source":"@site/docs/community/expertteam-digitale-toegankelijkheid/index.mdx","sourceDirName":"community/expertteam-digitale-toegankelijkheid","slug":"/project/expertteam-digitale-toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/expertteam-digitale-toegankelijkheid/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Expertteam Digitale Toegankelijkheid","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Expertteam Digitale Toegankelijkheid","pagination_label":"Expertteam Digitale Toegankelijkheid","description":"Over het deelproject Expertteam Digitale Toegankelijkheid","slug":"/project/expertteam-digitale-toegankelijkheid","keywords":["Expertteam","deelproject","nl design system","contact"]},"sidebar":"community","previous":{"title":"Aanmelden","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden"},"next":{"title":"Design Tokens valideren","permalink":"/project/expertteam-digitale-toegankelijkheid/design-tokens-lint"}}');
   var o = n(86070),
    r = n(18439),
    i = (n(59292), n(21530), n(94309), n(80883));
   (n(34225), n(24142));
   const l = { title: 'Expertteam Digitale Toegankelijkheid', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Expertteam Digitale Toegankelijkheid', pagination_label: 'Expertteam Digitale Toegankelijkheid', description: 'Over het deelproject Expertteam Digitale Toegankelijkheid', slug: '/project/expertteam-digitale-toegankelijkheid', keywords: ['Expertteam', 'deelproject', 'nl design system', 'contact'] },
    s = 'Deelproject Expertteam Digitale Toegankelijkheid',
    c = {},
    d = [
     { value: 'Expertteam Digitale Toegankelijkheid in de Heartbeat', id: 'expertteam-digitale-toegankelijkheid-in-de-heartbeat', level: 2 },
     { value: 'Bekijk de voortgang op GitHub', id: 'bekijk-de-voortgang-op-github', level: 2 },
    ];
   function p(e) {
    const t = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(t.header, { children: (0, o.jsx)(t.h1, { id: 'deelproject-expertteam-digitale-toegankelijkheid', children: 'Deelproject Expertteam Digitale Toegankelijkheid' }) }), '\n', (0, o.jsx)(t.p, { children: 'Expertteam Digitale Toegankelijkheid is een deelproject van NL Design System, waarin nauw wordt samenwerkt met de NL Design System community.' }), '\n', (0, o.jsx)(t.p, { children: 'Op dit moment ligt de focus op het bouwen van tooling om toegankelijkheid in content, huisstijl en code te helpen verbeteren met behulp van NL Design System. Het doel is om met deze tooling overheidsorganisaties en hun leveranciers te helpen om veel voorkomende toegankelijkheidsproblemen makkelijker te kunnen voorkomen en oplossen.' }), '\n', (0, o.jsx)(t.h2, { id: 'expertteam-digitale-toegankelijkheid-in-de-heartbeat', children: 'Expertteam Digitale Toegankelijkheid in de Heartbeat' }), '\n', (0, o.jsx)(t.p, { children: 'Bekijk hieronder de YouTube afspeellijst met updates van het Expertteam Digitale Toegankelijkheid.' }), '\n', (0, o.jsx)(i.L, { id: 'PLnAxFMscDU3GB1sHyIECh-zghmfNG_-cU', playlist: !0, thumbnail: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/expertteam-digitale-toegankelijkheid-playlist.png', title: 'Expertteam Digitale Toegankelijkheid updates' }), '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', (0, o.jsx)(t.h2, { id: 'bekijk-de-voortgang-op-github', children: 'Bekijk de voortgang op GitHub' }), '\n', (0, o.jsxs)(t.ul, { children: ['\n', (0, o.jsx)(t.li, { children: (0, o.jsx)(t.a, { href: 'https://github.com/orgs/nl-design-system/projects/70/views/1?pane=info', children: 'De Backlog op het GitHub projectbord' }) }), '\n', (0, o.jsxs)(t.li, { children: [(0, o.jsx)(t.a, { href: 'https://github.com/nl-design-system/editor', children: 'De repository voor de referentie editor' }), ' voor het verbeteren van toegankelijkheid in content'] }), '\n', (0, o.jsxs)(t.li, { children: [(0, o.jsx)(t.a, { href: 'https://github.com/nl-design-system/theme-wizard', children: 'De repository voor de Theme Wizard' }), ' voor het verbeteren van toegankelijkheid in huisstijl en code'] }), '\n', (0, o.jsx)(t.li, { children: (0, o.jsx)(t.a, { href: 'https://clippy-storybook-git-main-nl-design-system.vercel.app/?path=/docs/patterns-cookie-consent-drawer--documentatie', children: 'De Storybook met Clippy componenten, templates en patronen' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
  32385(e, t, n) {
   n.d(t, { bo: () => o, KF: () => u, mJ: () => g, VZ: () => w, cR: () => x, Pv: () => b, qZ: () => i, kD: () => j, QQ: () => _, B2: () => m, Pc: () => s, f4: () => l, GT: () => v, fX: () => r, eQ: () => k, B_: () => y, o_: () => f });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    o = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    s = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
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
    b = (e) => {
     const t = h(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const a = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: a, id: o, value: r }) => {
        const i = /^(.+) URL/.exec(a)[1],
         l = 'Storybook' === i ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${i}`;
        return { brand: i.toLowerCase(), name: a, id: o, value: r, description: l };
       });
      return { frameworkName: t, tasks: a };
     });
    },
    f = (e) => e.join('.'),
    y = (e) => '--' + e.join('-'),
    k = (e, t) => t.reduce((e, t) => e?.[t], e);
   function j(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? j(e[n], [...t, n]) : []));
   }
   function v(e) {
    const t = new Map();
    function n(e) {
     return (t.has(e) || t.set(e, f(e)), t.get(e));
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
    S = new Set(['ics', 'json', 'pdf']),
    _ = (e) => {
     const t = e.split('/').pop() ?? '',
      n = t.split('.').pop()?.toLowerCase();
     return void 0 !== n && S.has(n);
    };
  },
  34225(e, t, n) {
   n.d(t, { v: () => l });
   var a = n(94309),
    o = n(13526),
    r = n(86070);
   const i = ({ className: e, children: t, purpose: n, iconStart: a, iconEnd: i, href: l }) => (0, r.jsxs)('a', { className: (0, o.A)('nl-button', e, { 'nl-button--primary': 'primary' === n, 'nl-button--secondary': 'secondary' === n, 'nl-button--subtle': 'subtle' === n }), href: l, children: [a && (0, r.jsx)('span', { className: 'nl-button__icon-start', children: a }), (0, r.jsx)('span', { className: 'nl-button__label', children: t }), i && (0, r.jsx)('span', { className: 'nl-button__icon-end', children: i })] }),
    l = globalThis.isAstro
     ? ({ appearance: e, href: t, ...n }) => {
        let a = 'primary';
        return ((a = 'secondary-action' === e ? 'secondary' : a), (0, r.jsx)(i, { purpose: a, href: t, ...n }));
       }
     : ({ appearance: e, ...t }) => (0, r.jsx)(a.F, { className: (0, o.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...t });
  },
  41534(e, t, n) {
   function a(e, t) {
    if (null == e) return {};
    var n,
     a,
     o = (function (e, t) {
      if (null == e) return {};
      var n = {};
      for (var a in e)
       if ({}.hasOwnProperty.call(e, a)) {
        if (-1 !== t.indexOf(a)) continue;
        n[a] = e[a];
       }
      return n;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (a = 0; a < r.length; a++) ((n = r[a]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   n.d(t, { A: () => a });
  },
  48171(e, t, n) {
   function a(e) {
    return (
     (a =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     a(e)
    );
   }
   function o(e) {
    var t = (function (e, t) {
     if ('object' != a(e) || !e) return e;
     var n = e[Symbol.toPrimitive];
     if (void 0 !== n) {
      var o = n.call(e, t || 'default');
      if ('object' != a(o)) return o;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == a(t) ? t : t + '';
   }
   function r(e, t, n) {
    return ((t = o(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
   }
   n.d(t, { A: () => r });
  },
  59292(e, t, n) {
   n.d(t, { f: () => a.f });
   var a = n(71544);
  },
  71544(e, t, n) {
   n.d(t, { f: () => p });
   var a = n(48171),
    o = n(41534),
    r = n(86070),
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
   var p = (0, l.forwardRef)(function (e, t) {
    var n = e.children,
     l = e.className,
     c = e.purpose,
     p = (0, o.A)(e, s);
    return (0, r.jsx)('p', d(d({ className: (0, i.$)('nl-paragraph', (0, a.A)({}, 'nl-paragraph--lead', 'lead' === c), l), ref: t }, p), {}, { children: 'lead' === c ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   p.displayName = 'Paragraph';
  },
  80883(e, t, n) {
   n.d(t, { L: () => r });
   var a = n(20201),
    o = n(86070);
   const r = ({ id: e, title: t, ...n }) => (0, o.jsx)(a.Ay, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: t, poster: 'maxresdefault', ...n });
  },
  94309(e, t, n) {
   n.d(t, { F: () => i, N: () => l });
   var a = n(13526),
    o = n(32385),
    r = n(86070);
   const i = ({ children: e, ...t }) => {
     const { to: n, href: a, ...i } = t;
     let l = n || a;
     const s = new URL(l, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === s.origin ? (s.pathname.endsWith('/') || (0, o.QQ)(s.pathname) || (s.pathname = `${s.pathname}/`), (l = s.toString().replace('https://nldesignsystem.nl', ''))) : ((i.target = '_blank'), (i.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: l, ...i, children: e }));
    },
    l = ({ className: e, ...t }) => (0, r.jsx)(i, { className: (0, a.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
 },
]);
