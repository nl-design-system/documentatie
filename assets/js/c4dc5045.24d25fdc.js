'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [92043],
 {
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => d });
   var o = t(30758);
   const i = {},
    a = o.createContext(i);
   function r(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), o.createElement(a.Provider, { value: n }, e.children));
   }
  },
  53838(e, n, t) {
   (t.r(n), t.d(n, { assets: () => l, contentTitle: () => s, default: () => u, frontMatter: () => d, metadata: () => o, toc: () => c }));
   const o = JSON.parse('{"id":"handboek/designer/zelf-componenten-uitbreiden","title":"Zelf componenten uitbreiden","description":"Informatie voor designers over hoe je zelf componenten kunt uitbreiden in Figma met design tokens.","source":"@site/docs/handboek/designer/zelf-componenten-uitbreiden.mdx","sourceDirName":"handboek/designer","slug":"/handboek/designer/zelf-componenten-uitbreiden","permalink":"/handboek/designer/zelf-componenten-uitbreiden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/designer/zelf-componenten-uitbreiden.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Zelf componenten uitbreiden","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Zelf componenten uitbreiden","sidebar_position":4,"pagination_label":"Zelf componenten uitbreiden","description":"Informatie voor designers over hoe je zelf componenten kunt uitbreiden in Figma met design tokens.","slug":"/handboek/designer/zelf-componenten-uitbreiden","keywords":["index","designer","meedoen","componenten","figma","design tokens"]},"sidebar":"handboek","previous":{"title":"Zelf een thema maken","permalink":"/handboek/designer/zelf-thema-maken"},"next":{"title":"Zelf componenten maken","permalink":"/handboek/designer/zelf-componenten-maken"}}');
   var i = t(86070),
    a = t(18439),
    r = t(73058);
   const d = { title: 'Zelf componenten uitbreiden', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Zelf componenten uitbreiden', sidebar_position: 4, pagination_label: 'Zelf componenten uitbreiden', description: 'Informatie voor designers over hoe je zelf componenten kunt uitbreiden in Figma met design tokens.', slug: '/handboek/designer/zelf-componenten-uitbreiden', keywords: ['index', 'designer', 'meedoen', 'componenten', 'figma', 'design tokens'] },
    s = 'Zelf componenten uitbreiden',
    l = {},
    c = [
     { value: 'Wanneer breid je zelf een component uit?', id: 'wanneer-breid-je-zelf-een-component-uit', level: 2 },
     { value: 'Community component mist functionaliteit', id: 'community-component-mist-functionaliteit', level: 3 },
     { value: 'Candidate (of Hall of Fame) component mist functionaliteit', id: 'candidate-of-hall-of-fame-component-mist-functionaliteit', level: 3 },
     { value: 'Demo&#39;s', id: 'demos', level: 2 },
     { value: 'Community component Button uitbreiden', id: 'community-component-button-uitbreiden', level: 3 },
     { value: 'Candidate component Paragraph uitbreiden', id: 'candidate-component-paragraph-uitbreiden', level: 3 },
     { value: 'Component delen', id: 'component-delen', level: 2 },
     { value: 'Community Components projectbord', id: 'community-components-projectbord', level: 3 },
     { value: 'Handige links', id: 'handige-links', level: 2 },
     { value: 'Help deze documentatie te verbeteren', id: 'help-deze-documentatie-te-verbeteren', level: 2 },
     { value: 'Vragen', id: 'vragen', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', admonition: 'admonition', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'zelf-componenten-uitbreiden', children: 'Zelf componenten uitbreiden' }) }), '\n', (0, i.jsx)(n.p, { children: 'De Figma bibliotheken van NL Design System bevatten veel componenten en worden regelmatig aangevuld. Toch zijn er situaties waarin je zelf componenten wilt uitbreiden.' }), '\n', (0, i.jsx)(n.h2, { id: 'wanneer-breid-je-zelf-een-component-uit', children: 'Wanneer breid je zelf een component uit?' }), '\n', (0, i.jsx)(n.h3, { id: 'community-component-mist-functionaliteit', children: 'Community component mist functionaliteit' }), '\n', (0, i.jsx)(n.p, { children: 'Er is wel een Community component, maar die sluit niet goed aan bij de behoeften van jouw organisatie. Gebruik dan het bestaande ontwerp (of de code) als basis om daarop door te ontwikkelen. Neem daarbij zoveel mogelijk elementen uit de bestaande component over. Het is helemaal super om hierbij samen te werken met de organisatie die de oorspronkelijke component heeft ontwikkeld. Zo kan de uitbreiding eventueel direct worden doorgevoerd bij die organisatie.' }), '\n', (0, i.jsx)(n.h3, { id: 'candidate-of-hall-of-fame-component-mist-functionaliteit', children: 'Candidate (of Hall of Fame) component mist functionaliteit' }), '\n', (0, i.jsx)(n.p, { children: 'Net als bij een Community component kan een Candidate (of Hall of Fame) component een functionaliteit missen die jouw organisatie nodig heeft. Ook dan neem je zoveel mogelijk elementen uit de bestaande component over en deel je de wens voor deze uitbreiding met het kernteam.' }), '\n', (0, i.jsx)(n.h2, { id: 'demos', children: "Demo's" }), '\n', (0, i.jsx)(n.p, { children: 'Het is fijn om componenten uit te breiden volgens de afspraken van NL Design System: open source, met design tokens en de juiste naamgeving. Zo blijven componenten onderling uitwisselbaar.' }), '\n', (0, i.jsx)(n.p, { children: 'We hebben twee fictieve situaties uitgewerkt om te laten zien hoe je als designer zelf een component kunt uitbreiden.' }), '\n', (0, i.jsx)(n.admonition, { title: 'Goed om te weten', type: 'info', children: (0, i.jsx)(n.p, { children: "Is de uitbreiding alleen bedoeld om een idee uit te werken? Of om door middel van gebruikersonderzoek te achterhalen of deze uitbreiding goed werkt? Dan kun je een component natuurlijk ook simpelweg 'detachen' voordat je de uitbreiding 'officieel' doorvoerd." }) }), '\n', (0, i.jsx)(n.h3, { id: 'community-component-button-uitbreiden', children: 'Community component Button uitbreiden' }), '\n', (0, i.jsx)(n.p, { children: "In deze video laten we zien hoe Community component 'Button' wordt uitgebreid met design tokens voor schaduw." }), '\n', (0, i.jsx)(r.L, { id: 'DRj7WaZFOv0', title: 'Zelf componenten uitbreiden - Button' }), '\n', (0, i.jsx)(n.h3, { id: 'candidate-component-paragraph-uitbreiden', children: 'Candidate component Paragraph uitbreiden' }), '\n', (0, i.jsx)(n.p, { children: "In deze video laten we zien hoe Candidate component 'Paragraph' wordt uitgebreid met een aanvullende 'Purpose'." }), '\n', (0, i.jsx)(r.L, { id: 'f3Ng8qF0F3g', title: 'Zelf componenten uitbreiden - Paragraph' }), '\n', (0, i.jsx)(n.h2, { id: 'component-delen', children: 'Component delen' }), '\n', (0, i.jsx)(n.p, { children: 'Heb je een Community component uitgebreid in Figma? Deel deze dan met het kernteam. Zo blijven we op de hoogte van wijzigingen aan bestaande componenten.' }), '\n', (0, i.jsxs)(n.p, { children: ['Plaats de link naar je uitbreiding als reactie op je eerdere beschrijving in de ', (0, i.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions', children: 'GitHub Discussion van de component' }), ' en deel deze ook op ', (0, i.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, i.jsx)(n.code, { children: '#nl-design-system-designers' }), '.'] }), '\n', (0, i.jsx)(n.h3, { id: 'community-components-projectbord', children: 'Community Components projectbord' }), '\n', (0, i.jsxs)(n.p, { children: ['Voeg ook meteen een link naar je ontwerp toe aan het ', (0, i.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects?query=is:open+community+components', children: 'Community Components projectbord' }), ' van jouw organisatie. Zo kan de component worden meegenomen in het Community stappenplan.'] }), '\n', (0, i.jsx)(n.h2, { id: 'handige-links', children: 'Handige links' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/definition-of-done/', children: 'Definition of Done (Estafettemodel)' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/help-wanted-stappenplan/', children: 'Help Wanted stappenplan' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/community-stappenplan/voor-organisaties/', children: 'Community stappenplan voor organisaties' }) }), '\n'] }), '\n'] }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/handboek/componenten-gebruiken/', children: 'Componenten gebruiken' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/handboek/huisstijl/design-tokens/', children: 'Design tokens' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/handboek/designer/figma-hygiene/', children: 'Figma hygi\xebne' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://help.figma.com/', children: 'help.figma.com' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://forum.figma.com/', children: 'forum.figma.com' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://tokens.studio/', children: 'tokenstudio.com' }) }), '\n'] }), '\n', (0, i.jsx)(n.hr, {}), '\n', (0, i.jsx)(n.h2, { id: 'help-deze-documentatie-te-verbeteren', children: 'Help deze documentatie te verbeteren' }), '\n', (0, i.jsxs)(n.p, { children: ['Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie', children: 'GitHub' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'vragen', children: 'Vragen' }), '\n', (0, i.jsxs)(n.p, { children: ['Heb je een vraag? Twijfel niet en ', (0, i.jsx)(n.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  73058(e, n, t) {
   t.d(n, { L: () => s });
   var o = t(86070),
    i = t(30758);
   const a = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, n, t, o, i) {
    const a = { '@context': 'https://schema.org', '@type': 'VideoObject', name: i?.name || n, thumbnailUrl: [i?.thumbnailUrl || t], embedUrl: i?.embedUrl || `${o}/embed/${e}`, contentUrl: i?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(i?.description && { description: i.description }), ...(i?.uploadDate && { uploadDate: i.uploadDate }), ...(i?.duration && { duration: i.duration }) };
    return JSON.stringify(a);
   }
   const d = i.forwardRef(function (e, n) {
     const [t, d] = i.useState(!1),
      [s, l] = i.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      m = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      u = e.title,
      p = e.poster || 'hqdefault',
      h = e.announce || 'Watch',
      b = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      f = i.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(b ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
          n.append(t, e);
         }),
        n
       );
      }, [e.muted, b, e.enableJsApi, e.playlist, c, e.params]),
      g = i.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      y = i.useMemo(() => (e.playlist ? `${g}/embed/videoseries?${f.toString()}` : `${g}/embed/${c}?${f.toString()}`), [e.playlist, g, c, f]),
      j = !e.thumbnail && !e.playlist && 'maxresdefault' === p,
      k = e.webp ? 'webp' : 'jpg',
      v = e.webp ? 'vi_webp' : 'vi',
      w = j
       ? ((e, n, t, o = 'maxresdefault') => {
          const [r, d] = (0, i.useState)('');
          return (
           (0, i.useEffect)(() => {
            const i = `https://img.youtube.com/${n}/${e}/${o}.${t}`,
             r = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
             s = a[o],
             l = new Image();
            ((l.onload = () => {
             l.width < s ? d(r) : d(i);
            }),
             (l.onerror = () => d(r)),
             (l.src = i));
           }, [e, n, t, o]),
           r
          );
         })(e.id, v, k, p)
       : null,
      x = i.useMemo(() => e.thumbnail || w || `https://i.ytimg.com/${v}/${e.playlist ? m : c}/${p}.${k}`, [e.thumbnail, w, v, e.playlist, m, c, p, k]),
      C = e.activatedClass || 'lyt-activated',
      z = e.adNetwork || !1,
      P = e.aspectHeight || 9,
      E = e.aspectWidth || 16,
      $ = e.iframeClass || '',
      S = e.playerClass || 'lty-playbtn',
      _ = e.wrapperClass || 'yt-lite',
      R = i.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      L = e.rel ? 'prefetch' : 'preload',
      F = e.containerElement || 'article',
      I = !1 !== e.noscriptFallback,
      D = () => {
       s || l(!0);
      };
     return (
      i.useEffect(() => {
       s && (R(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
      }, [s, R, e.focusOnLoad, n]),
      i.useEffect(() => {
       if (!s || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
       let t = !1,
        o = !1;
       const i = (o) => {
        if ('https://www.youtube.com' !== o.origin && 'https://www.youtube-nocookie.com' !== o.origin) return;
        let i;
        try {
         i = 'string' == typeof o.data ? JSON.parse(o.data) : o.data;
        } catch {
         return;
        }
        switch (i.event) {
         case 'onReady':
          t || ((t = !0), e.onReady && e.onReady({ videoId: e.id, title: u }));
          break;
         case 'infoDelivery':
          if (void 0 !== i.info?.playerState) {
           const t = i.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: i.info.currentTime, duration: i.info.duration }), t)) {
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
           const t = i.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: i.info.currentTime, duration: i.info.duration }), t)) {
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
       const a = [],
        r = () => {
         'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
        },
        d = () => {
         o ||
          ((o = !0),
          r(),
          [100, 300, 600, 1200, 2400].forEach((e) => {
           a.push(setTimeout(r, e));
          }));
        };
       return (
        'object' == typeof n && n?.current
         ? (n.current.addEventListener('load', d), 'complete' === n.current.contentDocument?.readyState && d())
         : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
            a.push(setTimeout(r, e));
           }),
        () => {
         (window.removeEventListener('message', i), a.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', d));
        }
       );
      }, [s, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, u, n]),
      (0, o.jsxs)(o.Fragment, {
       children: [
        !e.lazyLoad && (0, o.jsx)('link', { rel: L, href: x, as: 'image' }),
        (0, o.jsx)(o.Fragment, { children: t && (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('link', { rel: 'preconnect', href: g }), (0, o.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), z && (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, o.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, o.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, u, x, g, e.seo) } }),
        I && !e.playlist && (0, o.jsx)('noscript', { children: (0, o.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
        (0, o.jsxs)(F, {
         onPointerOver: () => {
          t || d(!0);
         },
         onClick: D,
         className: `${_} ${s ? C : ''}`,
         'data-title': u,
         role: s || e.lazyLoad ? void 0 : 'img',
         'aria-label': s ? void 0 : `${u} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (P / E) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !s && (0, o.jsx)('img', { src: x, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !s && (0, o.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && s) && (0, o.jsx)('button', { type: 'button', className: S, 'aria-label': `${h} ${u}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, onClick: D, children: (0, o.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), s && (0, o.jsx)('iframe', { ref: n, className: $, title: u, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: y, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    s = ({ id: e, title: n, ...t }) => (0, o.jsx)(d, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...t });
  },
 },
]);
