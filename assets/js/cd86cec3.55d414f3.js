'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71134],
 {
  18439(e, t, i) {
   i.d(t, { R: () => l, x: () => o });
   var n = i(30758);
   const a = {},
    r = n.createContext(a);
   function l(e) {
    const t = n.useContext(r);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function o(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : l(e.components)), n.createElement(r.Provider, { value: t }, e.children));
   }
  },
  33500(e, t, i) {
   (i.r(t), i.d(t, { assets: () => d, contentTitle: () => s, default: () => m, frontMatter: () => o, metadata: () => n, toc: () => c }));
   const n = JSON.parse('{"id":"community/expertteam-digitale-toegankelijkheid/index","title":"Expertteam Digitale Toegankelijkheid","description":"Over het deelproject Expertteam Digitale Toegankelijkheid","source":"@site/docs/community/expertteam-digitale-toegankelijkheid/index.mdx","sourceDirName":"community/expertteam-digitale-toegankelijkheid","slug":"/project/expertteam-digitale-toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/expertteam-digitale-toegankelijkheid/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Expertteam Digitale Toegankelijkheid","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Expertteam Digitale Toegankelijkheid","pagination_label":"Expertteam Digitale Toegankelijkheid","description":"Over het deelproject Expertteam Digitale Toegankelijkheid","slug":"/project/expertteam-digitale-toegankelijkheid","keywords":["Expertteam","deelproject","nl design system","contact"]},"sidebar":"community","previous":{"title":"Aanmelden","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden"},"next":{"title":"Bijeenkomsten","permalink":"/community/events/overzicht"}}');
   var a = i(86070),
    r = i(18439),
    l = (i(46447), i(90495), i(45282), i(75397));
   i(88666);
   const o = { title: 'Expertteam Digitale Toegankelijkheid', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Expertteam Digitale Toegankelijkheid', pagination_label: 'Expertteam Digitale Toegankelijkheid', description: 'Over het deelproject Expertteam Digitale Toegankelijkheid', slug: '/project/expertteam-digitale-toegankelijkheid', keywords: ['Expertteam', 'deelproject', 'nl design system', 'contact'] },
    s = 'Deelproject Expertteam Digitale Toegankelijkheid',
    d = {},
    c = [
     { value: 'Expertteam Digitale Toegankelijkheid in de Heartbeat', id: 'expertteam-digitale-toegankelijkheid-in-de-heartbeat', level: 2 },
     { value: 'Bekijk de voortgang op GitHub', id: 'bekijk-de-voortgang-op-github', level: 2 },
    ];
   function p(e) {
    const t = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.header, { children: (0, a.jsx)(t.h1, { id: 'deelproject-expertteam-digitale-toegankelijkheid', children: 'Deelproject Expertteam Digitale Toegankelijkheid' }) }), '\n', (0, a.jsx)(t.p, { children: 'Expertteam Digitale Toegankelijkheid is een deelproject van NL Design System, waarin nauw wordt samenwerkt met de NL Design System community.' }), '\n', (0, a.jsx)(t.p, { children: 'Op dit moment ligt de focus op het bouwen van tooling om toegankelijkheid in content, huisstijl en code te helpen verbeteren met behulp van NL Design System. Het doel is om met deze tooling overheidsorganisaties en hun leveranciers te helpen om veel voorkomende toegankelijkheidsproblemen makkelijker te kunnen voorkomen en oplossen.' }), '\n', (0, a.jsx)(t.h2, { id: 'expertteam-digitale-toegankelijkheid-in-de-heartbeat', children: 'Expertteam Digitale Toegankelijkheid in de Heartbeat' }), '\n', (0, a.jsx)(t.p, { children: 'Bekijk hieronder de YouTube afspeellijst met updates van het Expertteam Digitale Toegankelijkheid.' }), '\n', (0, a.jsx)(l.L, { id: 'PLnAxFMscDU3GB1sHyIECh-zghmfNG_-cU', playlist: !0, thumbnail: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/expertteam-digitale-toegankelijkheid-playlist.png', title: 'Expertteam Digitale Toegankelijkheid updates' }), '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', (0, a.jsx)(t.h2, { id: 'bekijk-de-voortgang-op-github', children: 'Bekijk de voortgang op GitHub' }), '\n', (0, a.jsxs)(t.ul, { children: ['\n', (0, a.jsx)(t.li, { children: (0, a.jsx)(t.a, { href: 'https://github.com/orgs/nl-design-system/projects/70/views/1?pane=info', children: 'De Backlog op het GitHub projectbord' }) }), '\n', (0, a.jsxs)(t.li, { children: [(0, a.jsx)(t.a, { href: 'https://github.com/nl-design-system/editor', children: 'De repository voor de referentie editor' }), ' voor het verbeteren van toegankelijkheid in content'] }), '\n', (0, a.jsxs)(t.li, { children: [(0, a.jsx)(t.a, { href: 'https://github.com/nl-design-system/theme-wizard', children: 'De repository voor de Theme Wizard' }), ' voor het verbeteren van toegankelijkheid in huisstijl en code'] }), '\n', (0, a.jsx)(t.li, { children: (0, a.jsx)(t.a, { href: 'https://clippy-storybook-git-main-nl-design-system.vercel.app/?path=/docs/patterns-cookie-consent-drawer--documentatie', children: 'De Storybook met Clippy componenten, templates en patronen' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
  45282(e, t, i) {
   i.d(t, { F: () => r, N: () => l });
   var n = i(13526),
    a = i(86070);
   const r = ({ children: e, ...t }) => {
     const { to: i, href: n, ...r } = t;
     let l = i || n;
     const o = new URL(l, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === o.origin ? ((o.pathname = o.pathname.endsWith('/') ? o.pathname : `${o.pathname}/`), (l = o.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, a.jsx)('a', { href: l, ...r, children: e }));
    },
    l = ({ className: e, ...t }) => (0, a.jsx)(r, { className: (0, n.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  75397(e, t, i) {
   i.d(t, { L: () => s });
   var n = i(30758),
    a = i(86070);
   const r = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function l(e, t, i, n, a) {
    const r = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == a ? void 0 : a.name) || t, thumbnailUrl: [(null == a ? void 0 : a.thumbnailUrl) || i], embedUrl: (null == a ? void 0 : a.embedUrl) || `${n}/embed/${e}`, contentUrl: (null == a ? void 0 : a.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == a ? void 0 : a.description) && { description: a.description }), ...((null == a ? void 0 : a.uploadDate) && { uploadDate: a.uploadDate }), ...((null == a ? void 0 : a.duration) && { duration: a.duration }) };
    return JSON.stringify(r);
   }
   const o = n.forwardRef(function (e, t) {
     const [i, o] = n.useState(!1),
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
      b = n.useMemo(() => (e.playlist ? `${j}/embed/videoseries?${k.toString()}` : `${j}/embed/${c}?${k.toString()}`), [e.playlist, j, c, k]),
      x = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
      y = e.webp ? 'webp' : 'jpg',
      f = e.webp ? 'vi_webp' : 'vi',
      v = x
       ? ((e, t, i, a = 'maxresdefault') => {
          const [l, o] = (0, n.useState)('');
          return (
           (0, n.useEffect)(() => {
            const n = `https://img.youtube.com/${t}/${e}/${a}.${i}`,
             l = `https://img.youtube.com/${t}/${e}/hqdefault.${i}`,
             s = r[a],
             d = new Image();
            ((d.onload = () => {
             d.width < s ? o(l) : o(n);
            }),
             (d.onerror = () => o(l)),
             (d.src = n));
           }, [e, t, i, a]),
           l
          );
         })(e.id, f, y, u)
       : null,
      w = n.useMemo(() => e.thumbnail || v || `https://i.ytimg.com/${f}/${e.playlist ? p : c}/${u}.${y}`, [e.thumbnail, v, f, e.playlist, p, c, u, y]),
      _ = e.activatedClass || 'lyt-activated',
      $ = e.adNetwork || !1,
      D = e.aspectHeight || 9,
      N = e.aspectWidth || 16,
      T = e.iframeClass || '',
      E = e.playerClass || 'lty-playbtn',
      C = e.wrapperClass || 'yt-lite',
      S = n.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      L = e.rel ? 'prefetch' : 'preload',
      U = e.containerElement || 'article',
      I = !1 !== e.noscriptFallback;
     return (
      n.useEffect(() => {
       s && (S(), e.focusOnLoad && 'object' == typeof t && null != t && t.current && t.current.focus());
      }, [s, S, e.focusOnLoad, t]),
      (0, a.jsxs)(a.Fragment, {
       children: [
        !e.lazyLoad && (0, a.jsx)('link', { rel: L, href: w, as: 'image' }),
        (0, a.jsx)(a.Fragment, { children: i && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: j }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), $ && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: l(e.id, m, w, j, e.seo) } }),
        I && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${m} on YouTube`, children: ['Watch "', m, '" on YouTube'] }) }),
        (0, a.jsxs)(U, {
         onPointerOver: () => {
          i || o(!0);
         },
         onClick: () => {
          s || d(!0);
         },
         className: `${C} ${s ? _ : ''}`,
         'data-title': m,
         role: s ? void 0 : 'img',
         'aria-label': s ? void 0 : `${m} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${w})` }), '--aspect-ratio': (D / N) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !s && (0, a.jsx)('img', { src: w, alt: `${m} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, a.jsx)('button', { type: 'button', className: E, 'aria-label': `${h} ${m}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), s && (0, a.jsx)('iframe', { ref: t, className: T, title: m, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: b, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    s = ({ id: e, title: t, ...i }) => {
     const r = (0, n.useCallback)((e) => {
      if (!e) return;
      const t = e.querySelector('[role="img"]');
      t && t.setAttribute('role', 'group');
      const i = new MutationObserver(() => {
       const t = e.querySelector('[role="img"]');
       t && (t.setAttribute('role', 'group'), i.disconnect());
      });
      i.observe(e, { attributes: !0, subtree: !0, attributeFilter: ['role'] });
     }, []);
     return (0, a.jsx)('div', { ref: r, children: (0, a.jsx)(o, { adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: t, poster: 'maxresdefault', ...i }) });
    };
  },
  88666(e, t, i) {
   i.d(t, { v: () => l });
   var n = i(45282),
    a = i(13526),
    r = i(86070);
   const l = ({ appearance: e, ...t }) => (0, r.jsx)(n.F, { className: (0, a.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...t });
  },
  90495(e, t, i) {
   i.d(t, { AC: () => d, Fu: () => l, Wu: () => o, Zp: () => s });
   var n = i(46447),
    a = i(13526),
    r = i(86070);
   const l = ({ background: e, children: t, className: i, ...n }) => (0, r.jsx)('div', { className: (0, a.A)('card__illustration', e && `card__illustration--${e}`, i), ...n, children: t }),
    o = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    s = ({ href: e, appearance: t, className: i, component: l = 'div', background: o, children: s }) => {
     const d = (e) => ('article' === l ? (0, r.jsx)('article', { ...e }) : 'section' === l ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      c = (0, r.jsx)(d, { className: (0, a.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, i), children: s });
     return e ? (0, r.jsx)(n.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: t, className: i }) => (0, r.jsx)('div', { className: (0, a.A)('cardgroup', `cardgroup--${e}`, i), children: t });
  },
 },
]);
