'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [39629],
 {
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => s });
   var o = t(30758);
   const a = {},
    i = o.createContext(a);
   function r(e) {
    const n = o.useContext(i);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), o.createElement(i.Provider, { value: n }, e.children));
   }
  },
  72223(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => p, frontMatter: () => s, metadata: () => o, toc: () => c }));
   const o = JSON.parse('{"id":"handboek/designer/zelf-componenten-maken","title":"Zelf componenten maken","description":"Informatie voor designers over hoe je zelf componenten kunt maken in Figma met design tokens.","source":"@site/docs/handboek/designer/zelf-componenten-maken.mdx","sourceDirName":"handboek/designer","slug":"/handboek/designer/zelf-componenten-maken","permalink":"/handboek/designer/zelf-componenten-maken","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/designer/zelf-componenten-maken.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Zelf componenten maken","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Zelf componenten maken","sidebar_position":5,"navigation_order":5,"pagination_label":"Zelf componenten maken","description":"Informatie voor designers over hoe je zelf componenten kunt maken in Figma met design tokens.","slug":"/handboek/designer/zelf-componenten-maken","keywords":["index","designer","meedoen","componenten","figma","design tokens"]},"sidebar":"handboek","previous":{"title":"Zelf componenten uitbreiden","permalink":"/handboek/designer/zelf-componenten-uitbreiden"},"next":{"title":"Figma-bestanden overzicht","permalink":"/figma"}}');
   var a = t(86070),
    i = t(18439),
    r = t(72863);
   const s = { title: 'Zelf componenten maken', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Zelf componenten maken', sidebar_position: 5, navigation_order: 5, pagination_label: 'Zelf componenten maken', description: 'Informatie voor designers over hoe je zelf componenten kunt maken in Figma met design tokens.', slug: '/handboek/designer/zelf-componenten-maken', keywords: ['index', 'designer', 'meedoen', 'componenten', 'figma', 'design tokens'] },
    l = 'Zelf componenten maken',
    d = {},
    c = [
     { value: 'Demo&#39;s', id: 'demos', level: 2 },
     { value: 'Component &#39;Demo Sticker&#39; maken', id: 'component-demo-sticker-maken', level: 3 },
     { value: 'Component &#39;Demo Card&#39; maken', id: 'component-demo-card-maken', level: 3 },
     { value: 'Component delen', id: 'component-delen', level: 2 },
     { value: 'Community Components projectbord', id: 'community-components-projectbord', level: 3 },
     { value: 'Handige links', id: 'handige-links', level: 2 },
     { value: 'Help deze documentatie te verbeteren', id: 'help-deze-documentatie-te-verbeteren', level: 2 },
     { value: 'Vragen', id: 'vragen', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'zelf-componenten-maken', children: 'Zelf componenten maken' }) }), '\n', (0, a.jsx)(n.p, { children: 'De Figma bibliotheken van NL Design System bevatten veel componenten en worden regelmatig aangevuld. Toch kan het voorkomen dat je zelf componenten moet maken. Bijvoorbeeld wanneer deze nog ontbreken in de community.' }), '\n', (0, a.jsx)(n.h2, { id: 'demos', children: "Demo's" }), '\n', (0, a.jsx)(n.p, { children: 'Het is fijn om componenten te ontwikkelen volgens de afspraken van NL Design System: open source, met design tokens en de juiste naamgeving. Zo blijven componenten onderling uitwisselbaar.' }), '\n', (0, a.jsx)(n.p, { children: 'We hebben twee fictieve componenten uitgewerkt om te laten zien hoe je als designer zelf een component kunt maken.' }), '\n', (0, a.jsx)(n.h3, { id: 'component-demo-sticker-maken', children: "Component 'Demo Sticker' maken" }), '\n', (0, a.jsx)(n.p, { children: "In deze video laten we zien hoe de component 'Demo Sticker' wordt ontwikkeld in Figma." }), '\n', (0, a.jsx)(r.L, { id: 'dbTcHS01IGQ', title: 'Zelf componenten maken - Demo Sticker' }), '\n', (0, a.jsx)(n.h3, { id: 'component-demo-card-maken', children: "Component 'Demo Card' maken" }), '\n', (0, a.jsx)(n.p, { children: "In deze video laten we zien hoe de component 'Demo Card' wordt ontwikkeld in Figma." }), '\n', (0, a.jsx)(r.L, { id: 'vsJjs6ehGZ0', title: 'Zelf componenten maken - Demo Card' }), '\n', (0, a.jsx)(n.h2, { id: 'component-delen', children: 'Component delen' }), '\n', (0, a.jsx)(n.p, { children: 'Heb je een component ontwikkeld in Figma? Wat goed! Deel deze dan met het kernteam. Zo blijven we op de hoogte van nieuwe componenten en kunnen we beoordelen of deze opgenomen kan worden in de NL Design System bibliotheek.' }), '\n', (0, a.jsxs)(n.p, { children: ['Plaats een link naar je ontwerp in de ', (0, a.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions', children: 'GitHub Discussion van de component' }), ' en deel deze ook op ', (0, a.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, a.jsx)(n.code, { children: '#nl-design-system-designers' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Bestaat er nog geen GitHub Discussion? Deel dan een link naar je ontwerp via Slack in het kanaal ', (0, a.jsx)(n.code, { children: '#nl-design-system-designers' }), '. Het kernteam bepaalt vervolgens wat een passende vervolgstap is.'] }), '\n', (0, a.jsx)(n.h3, { id: 'community-components-projectbord', children: 'Community Components projectbord' }), '\n', (0, a.jsxs)(n.p, { children: ['Voeg ook meteen een link naar je ontwerp toe aan het ', (0, a.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects?query=is:open+community+components', children: 'Community Components projectbord' }), ' van jouw organisatie. Zo kan de component worden meegenomen in het Community stappenplan.'] }), '\n', (0, a.jsx)(n.h2, { id: 'handige-links', children: 'Handige links' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/definition-of-done/', children: 'Definition of Done (Estafettemodel)' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/help-wanted-stappenplan/', children: 'Help Wanted stappenplan' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/community-stappenplan/voor-organisaties/', children: 'Community stappenplan voor organisaties' }) }), '\n'] }), '\n'] }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/handboek/componenten-gebruiken/', children: 'Componenten gebruiken' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/handboek/huisstijl/design-tokens/', children: 'Design tokens' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/handboek/designer/figma-hygiene/', children: 'Figma hygi\xebne' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://help.figma.com/', children: 'help.figma.com' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://forum.figma.com/', children: 'forum.figma.com' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://tokens.studio/', children: 'tokenstudio.com' }) }), '\n'] }), '\n', (0, a.jsx)(n.hr, {}), '\n', (0, a.jsx)(n.h2, { id: 'help-deze-documentatie-te-verbeteren', children: 'Help deze documentatie te verbeteren' }), '\n', (0, a.jsxs)(n.p, { children: ['Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie', children: 'GitHub' }), '.'] }), '\n', (0, a.jsx)(n.h2, { id: 'vragen', children: 'Vragen' }), '\n', (0, a.jsxs)(n.p, { children: ['Heb je een vraag? Twijfel niet en ', (0, a.jsx)(n.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
  72863(e, n, t) {
   t.d(n, { L: () => l });
   var o = t(86070),
    a = t(30758);
   const i = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, n, t, o, a) {
    const i = { '@context': 'https://schema.org', '@type': 'VideoObject', name: a?.name || n, thumbnailUrl: [a?.thumbnailUrl || t], embedUrl: a?.embedUrl || `${o}/embed/${e}`, contentUrl: a?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(a?.description && { description: a.description }), ...(a?.uploadDate && { uploadDate: a.uploadDate }), ...(a?.duration && { duration: a.duration }) };
    return JSON.stringify(i);
   }
   const s = a.forwardRef(function (e, n) {
     const [t, s] = a.useState(!1),
      [l, d] = a.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      m = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      p = e.title,
      h = e.poster || 'hqdefault',
      u = e.announce || 'Watch',
      g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      f = a.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
          n.append(t, e);
         }),
        n
       );
      }, [e.muted, g, e.enableJsApi, e.playlist, c, e.params]),
      k = a.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      b = a.useMemo(() => (e.playlist ? `${k}/embed/videoseries?${f.toString()}` : `${k}/embed/${c}?${f.toString()}`), [e.playlist, k, c, f]),
      y = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
      j = e.webp ? 'webp' : 'jpg',
      v = e.webp ? 'vi_webp' : 'vi',
      w = y
       ? ((e, n, t, o = 'maxresdefault') => {
          const [r, s] = (0, a.useState)('');
          return (
           (0, a.useEffect)(() => {
            const a = `https://img.youtube.com/${n}/${e}/${o}.${t}`,
             r = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
             l = i[o],
             d = new Image();
            ((d.onload = () => {
             d.width < l ? s(r) : s(a);
            }),
             (d.onerror = () => s(r)),
             (d.src = a));
           }, [e, n, t, o]),
           r
          );
         })(e.id, v, j, h)
       : null,
      x = a.useMemo(() => e.thumbnail || w || `https://i.ytimg.com/${v}/${e.playlist ? m : c}/${h}.${j}`, [e.thumbnail, w, v, e.playlist, m, c, h, j]),
      C = e.activatedClass || 'lyt-activated',
      z = e.adNetwork || !1,
      S = e.aspectHeight || 9,
      $ = e.aspectWidth || 16,
      D = e.iframeClass || '',
      E = e.playerClass || 'lty-playbtn',
      P = e.wrapperClass || 'yt-lite',
      _ = a.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      L = e.rel ? 'prefetch' : 'preload',
      R = e.containerElement || 'article',
      I = !1 !== e.noscriptFallback,
      T = () => {
       l || d(!0);
      };
     return (
      a.useEffect(() => {
       l && (_(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
      }, [l, _, e.focusOnLoad, n]),
      a.useEffect(() => {
       if (!l || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
       let t = !1,
        o = !1;
       const a = (o) => {
        if ('https://www.youtube.com' !== o.origin && 'https://www.youtube-nocookie.com' !== o.origin) return;
        let a;
        try {
         a = 'string' == typeof o.data ? JSON.parse(o.data) : o.data;
        } catch {
         return;
        }
        switch (a.event) {
         case 'onReady':
          t || ((t = !0), e.onReady && e.onReady({ videoId: e.id, title: p }));
          break;
         case 'infoDelivery':
          if (void 0 !== a.info?.playerState) {
           const t = a.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: a.info.currentTime, duration: a.info.duration }), t)) {
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
          (void 0 !== a.info?.playbackRate && e.onPlaybackRateChange?.(a.info.playbackRate), void 0 !== a.info?.playbackQuality && e.onPlaybackQualityChange?.(a.info.playbackQuality));
          break;
         case 'onStateChange':
          if (void 0 !== a.info?.playerState) {
           const t = a.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: a.info.currentTime, duration: a.info.duration }), t)) {
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
          if (a.info && 'errorCode' in a.info) {
           const n = a.info.errorCode;
           e.onError && e.onError(n);
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
        r = () => {
         'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
        },
        s = () => {
         o ||
          ((o = !0),
          r(),
          [100, 300, 600, 1200, 2400].forEach((e) => {
           i.push(setTimeout(r, e));
          }));
        };
       return (
        'object' == typeof n && n?.current
         ? (n.current.addEventListener('load', s), 'complete' === n.current.contentDocument?.readyState && s())
         : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
            i.push(setTimeout(r, e));
           }),
        () => {
         (window.removeEventListener('message', a), i.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', s));
        }
       );
      }, [l, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, p, n]),
      (0, o.jsxs)(o.Fragment, {
       children: [
        !e.lazyLoad && (0, o.jsx)('link', { rel: L, href: x, as: 'image' }),
        (0, o.jsx)(o.Fragment, { children: t && (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('link', { rel: 'preconnect', href: k }), (0, o.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), z && (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, o.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, o.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, p, x, k, e.seo) } }),
        I && !e.playlist && (0, o.jsx)('noscript', { children: (0, o.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
        (0, o.jsxs)(R, {
         onPointerOver: () => {
          t || s(!0);
         },
         onClick: T,
         className: `${P} ${l ? C : ''}`,
         'data-title': p,
         role: l || e.lazyLoad ? void 0 : 'img',
         'aria-label': l ? void 0 : `${p} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (S / $) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !l && (0, o.jsx)('img', { src: x, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !l && (0, o.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && l) && (0, o.jsx)('button', { type: 'button', className: E, 'aria-label': `${u} ${p}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, onClick: T, children: (0, o.jsx)('span', { className: 'lty-visually-hidden', children: u }) }), l && (0, o.jsx)('iframe', { ref: n, className: D, title: p, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: b, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    l = ({ id: e, title: n, ...t }) => (0, o.jsx)(s, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...t });
  },
 },
]);
