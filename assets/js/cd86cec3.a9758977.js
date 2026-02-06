'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71134],
 {
  4258(e, t, i) {
   i.d(t, { L: () => l });
   var a = i(78236),
    n = i(86070);
   const l = ({ id: e, title: t, ...i }) => (0, n.jsx)(a.A, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: t, poster: 'maxresdefault', ...i });
  },
  18439(e, t, i) {
   i.d(t, { R: () => o, x: () => r });
   var a = i(30758);
   const n = {},
    l = a.createContext(n);
   function o(e) {
    const t = a.useContext(l);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function r(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(n) : e.components || n) : o(e.components)), a.createElement(l.Provider, { value: t }, e.children));
   }
  },
  33500(e, t, i) {
   (i.r(t), i.d(t, { assets: () => d, contentTitle: () => s, default: () => m, frontMatter: () => r, metadata: () => a, toc: () => c }));
   const a = JSON.parse('{"id":"community/expertteam-digitale-toegankelijkheid/index","title":"Expertteam Digitale Toegankelijkheid \xb7 Project","description":"Over het deelproject Expertteam Digitale Toegankelijkheid","source":"@site/docs/community/expertteam-digitale-toegankelijkheid/index.mdx","sourceDirName":"community/expertteam-digitale-toegankelijkheid","slug":"/project/expertteam-digitale-toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/expertteam-digitale-toegankelijkheid/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Expertteam Digitale Toegankelijkheid \xb7 Project","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Expertteam Digitale Toegankelijkheid","pagination_label":"Expertteam Digitale Toegankelijkheid","description":"Over het deelproject Expertteam Digitale Toegankelijkheid","slug":"/project/expertteam-digitale-toegankelijkheid","keywords":["Expertteam","deelproject","nl design system","contact"]},"sidebar":"community","previous":{"title":"Aanmelden","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden"},"next":{"title":"Bijeenkomsten","permalink":"/community/events/overzicht"}}');
   var n = i(86070),
    l = i(18439),
    o = (i(46447), i(90495), i(45282), i(4258));
   i(88666);
   const r = { title: 'Expertteam Digitale Toegankelijkheid \xb7 Project', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Expertteam Digitale Toegankelijkheid', pagination_label: 'Expertteam Digitale Toegankelijkheid', description: 'Over het deelproject Expertteam Digitale Toegankelijkheid', slug: '/project/expertteam-digitale-toegankelijkheid', keywords: ['Expertteam', 'deelproject', 'nl design system', 'contact'] },
    s = 'Deelproject Expertteam Digitale Toegankelijkheid',
    d = {},
    c = [
     { value: 'Expertteam Digitale Toegankelijkheid in de Heartbeat', id: 'expertteam-digitale-toegankelijkheid-in-de-heartbeat', level: 2 },
     { value: 'Bekijk de voortgang op GitHub', id: 'bekijk-de-voortgang-op-github', level: 2 },
    ];
   function p(e) {
    const t = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(t.header, { children: (0, n.jsx)(t.h1, { id: 'deelproject-expertteam-digitale-toegankelijkheid', children: 'Deelproject Expertteam Digitale Toegankelijkheid' }) }), '\n', (0, n.jsx)(t.p, { children: 'Expertteam Digitale Toegankelijkheid is een deelproject van NL Design System, waarin nauw wordt samenwerkt met de NL Design System community.' }), '\n', (0, n.jsx)(t.p, { children: 'Op dit moment ligt de focus op het bouwen van tooling om toegankelijkheid in content, huisstijl en code te helpen verbeteren met behulp van NL Design System. Het doel is om met deze tooling overheidsorganisaties en hun leveranciers te helpen om veel voorkomende toegankelijkheidsproblemen makkelijker te kunnen voorkomen en oplossen.' }), '\n', (0, n.jsx)(t.h2, { id: 'expertteam-digitale-toegankelijkheid-in-de-heartbeat', children: 'Expertteam Digitale Toegankelijkheid in de Heartbeat' }), '\n', (0, n.jsx)(t.p, { children: 'Bekijk hieronder de YouTube afspeellijst met updates van het Expertteam Digitale Toegankelijkheid.' }), '\n', (0, n.jsx)(o.L, { id: 'PLnAxFMscDU3GB1sHyIECh-zghmfNG_-cU', playlist: !0, thumbnail: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/expertteam-digitale-toegankelijkheid-playlist.png', title: 'Expertteam Digitale Toegankelijkheid updates' }), '\n', (0, n.jsx)(t.h2, { id: 'bekijk-de-voortgang-op-github', children: 'Bekijk de voortgang op GitHub' }), '\n', (0, n.jsxs)(t.ul, { children: ['\n', (0, n.jsx)(t.li, { children: (0, n.jsx)(t.a, { href: 'https://github.com/orgs/nl-design-system/projects/70/views/1?pane=info', children: 'De Backlog op het GitHub projectbord' }) }), '\n', (0, n.jsxs)(t.li, { children: [(0, n.jsx)(t.a, { href: 'https://github.com/nl-design-system/editor', children: 'De repository voor de referentie editor' }), ' voor het verbeteren van toegankelijkheid in content'] }), '\n', (0, n.jsxs)(t.li, { children: [(0, n.jsx)(t.a, { href: 'https://github.com/nl-design-system/theme-wizard', children: 'De repository voor de Theme Wizard' }), ' voor het verbeteren van toegankelijkheid in huisstijl en code'] }), '\n', (0, n.jsx)(t.li, { children: (0, n.jsx)(t.a, { href: 'https://clippy-storybook-git-main-nl-design-system.vercel.app/?path=/docs/patterns-cookie-consent-drawer--documentatie', children: 'De Storybook met Clippy componenten, templates en patronen' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, l.R)(), ...e.components };
    return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(p, { ...e }) }) : p(e);
   }
  },
  45282(e, t, i) {
   i.d(t, { N: () => o });
   var a = i(63195),
    n = i(13526),
    l = i(86070);
   const o = ({ className: e, ...t }) => (0, l.jsx)(a.A, { className: (0, n.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  78236(e, t, i) {
   i.d(t, { A: () => r });
   var a = i(86070),
    n = i(30758);
   const l = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function o(e, t, i, a, n) {
    const l = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == n ? void 0 : n.name) || t, thumbnailUrl: [(null == n ? void 0 : n.thumbnailUrl) || i], embedUrl: (null == n ? void 0 : n.embedUrl) || `${a}/embed/${e}`, contentUrl: (null == n ? void 0 : n.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == n ? void 0 : n.description) && { description: n.description }), ...((null == n ? void 0 : n.uploadDate) && { uploadDate: n.uploadDate }), ...((null == n ? void 0 : n.duration) && { duration: n.duration }) };
    return JSON.stringify(l);
   }
   const r = n.forwardRef(function (e, t) {
    const [i, r] = n.useState(!1),
     [s, d] = n.useState(e.alwaysLoadIframe || !1),
     c = encodeURIComponent(e.id),
     p = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     m = e.title,
     u = e.poster || 'hqdefault',
     h = e.announce || 'Watch',
     g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     k = n.useMemo(() => {
      const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: c } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, i) => {
         t.append(i, e);
        }),
       t
      );
     }, [e.muted, g, e.enableJsApi, e.playlist, c, e.params]),
     j = n.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     x = n.useMemo(() => (e.playlist ? `${j}/embed/videoseries?${k.toString()}` : `${j}/embed/${c}?${k.toString()}`), [e.playlist, j, c, k]),
     b = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
     y = e.webp ? 'webp' : 'jpg',
     v = e.webp ? 'vi_webp' : 'vi',
     f = b
      ? ((e, t, i, a = 'maxresdefault') => {
         const [o, r] = (0, n.useState)('');
         return (
          (0, n.useEffect)(() => {
           const n = `https://img.youtube.com/${t}/${e}/${a}.${i}`,
            o = `https://img.youtube.com/${t}/${e}/hqdefault.${i}`,
            s = l[a],
            d = new Image();
           ((d.onload = () => {
            d.width < s ? r(o) : r(n);
           }),
            (d.onerror = () => r(o)),
            (d.src = n));
          }, [e, t, i, a]),
          o
         );
        })(e.id, v, y, u)
      : null,
     w = n.useMemo(() => e.thumbnail || f || `https://i.ytimg.com/${v}/${e.playlist ? p : c}/${u}.${y}`, [e.thumbnail, f, v, e.playlist, p, c, u, y]),
     _ = e.activatedClass || 'lyt-activated',
     $ = e.adNetwork || !1,
     D = e.aspectHeight || 9,
     N = e.aspectWidth || 16,
     T = e.iframeClass || '',
     E = e.playerClass || 'lty-playbtn',
     C = e.wrapperClass || 'yt-lite',
     L = n.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     S = e.rel ? 'prefetch' : 'preload',
     A = e.containerElement || 'article',
     I = !1 !== e.noscriptFallback;
    return (
     n.useEffect(() => {
      s && (L(), e.focusOnLoad && 'object' == typeof t && null != t && t.current && t.current.focus());
     }, [s, L, e.focusOnLoad, t]),
     (0, a.jsxs)(a.Fragment, {
      children: [
       !e.lazyLoad && (0, a.jsx)('link', { rel: S, href: w, as: 'image' }),
       (0, a.jsx)(a.Fragment, { children: i && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: j }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), $ && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: o(e.id, m, w, j, e.seo) } }),
       I && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${m} on YouTube`, children: ['Watch "', m, '" on YouTube'] }) }),
       (0, a.jsxs)(A, {
        onPointerOver: () => {
         i || r(!0);
        },
        onClick: () => {
         s || d(!0);
        },
        className: `${C} ${s ? _ : ''}`,
        'data-title': m,
        role: s ? void 0 : 'img',
        'aria-label': s ? void 0 : `${m} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${w})` }), '--aspect-ratio': (D / N) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !s && (0, a.jsx)('img', { src: w, alt: `${m} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, a.jsx)('button', { type: 'button', className: E, 'aria-label': `${h} ${m}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), s && (0, a.jsx)('iframe', { ref: t, className: T, title: m, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: x, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  88666(e, t, i) {
   i.d(t, { v: () => o });
   var a = i(63195),
    n = i(13526),
    l = i(86070);
   const o = ({ appearance: e, ...t }) => (0, l.jsx)(a.A, { className: (0, n.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...t });
  },
  90495(e, t, i) {
   i.d(t, { AC: () => d, Fu: () => o, Wu: () => r, Zp: () => s });
   var a = i(46447),
    n = i(13526),
    l = i(86070);
   const o = ({ background: e, children: t, className: i, ...a }) => (0, l.jsx)('div', { className: (0, n.A)('card__illustration', e && `card__illustration--${e}`, i), ...a, children: t }),
    r = (e) => (0, l.jsx)('div', { className: 'card__content', ...e }),
    s = ({ href: e, appearance: t, className: i, component: o = 'div', background: r, children: s }) => {
     const d = (e) => ('article' === o ? (0, l.jsx)('article', { ...e }) : 'section' === o ? (0, l.jsx)('section', { ...e }) : (0, l.jsx)('div', { ...e })),
      c = (0, l.jsx)(d, { className: (0, n.A)('cardgroup__card', r && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, i), children: s });
     return e ? (0, l.jsx)(a.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: t, className: i }) => (0, l.jsx)('div', { className: (0, n.A)('cardgroup', `cardgroup--${e}`, i), children: t });
  },
 },
]);
