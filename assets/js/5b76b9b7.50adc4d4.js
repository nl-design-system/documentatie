'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [57255],
 {
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => o });
   var i = t(30758);
   const s = {},
    a = i.createContext(s);
   function r(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), i.createElement(a.Provider, { value: n }, e.children));
   }
  },
  20201(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    s = t(30758);
   const a = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, n, t, i, s) {
    const a = { '@context': 'https://schema.org', '@type': 'VideoObject', name: s?.name || n, thumbnailUrl: [s?.thumbnailUrl || t], embedUrl: s?.embedUrl || `${i}/embed/${e}`, contentUrl: s?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(s?.description && { description: s.description }), ...(s?.uploadDate && { uploadDate: s.uploadDate }), ...(s?.duration && { duration: s.duration }) };
    return JSON.stringify(a);
   }
   const o = s.forwardRef(function (e, n) {
    const [t, o] = s.useState(!1),
     [l, d] = s.useState(e.alwaysLoadIframe || !1),
     c = encodeURIComponent(e.id),
     m = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     g = e.title,
     u = e.poster || 'hqdefault',
     p = e.announce || 'Watch',
     y = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     h = s.useMemo(() => {
      const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(y ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
         n.append(t, e);
        }),
       n
      );
     }, [e.muted, y, e.enableJsApi, e.playlist, c, e.params]),
     k = s.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     b = s.useMemo(() => (e.playlist ? `${k}/embed/videoseries?${h.toString()}` : `${k}/embed/${c}?${h.toString()}`), [e.playlist, k, c, h]),
     v = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
     f = e.webp ? 'webp' : 'jpg',
     w = e.webp ? 'vi_webp' : 'vi',
     j = v
      ? ((e, n, t, i = 'maxresdefault') => {
         const [r, o] = (0, s.useState)('');
         return (
          (0, s.useEffect)(() => {
           const s = `https://img.youtube.com/${n}/${e}/${i}.${t}`,
            r = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
            l = a[i],
            d = new Image();
           ((d.onload = () => {
            d.width < l ? o(r) : o(s);
           }),
            (d.onerror = () => o(r)),
            (d.src = s));
          }, [e, n, t, i]),
          r
         );
        })(e.id, w, f, u)
      : null,
     S = s.useMemo(() => e.thumbnail || j || `https://i.ytimg.com/${w}/${e.playlist ? m : c}/${u}.${f}`, [e.thumbnail, j, w, e.playlist, m, c, u, f]),
     D = e.activatedClass || 'lyt-activated',
     x = e.adNetwork || !1,
     O = e.aspectHeight || 9,
     L = e.aspectWidth || 16,
     N = e.iframeClass || '',
     P = e.playerClass || 'lty-playbtn',
     z = e.wrapperClass || 'yt-lite',
     C = s.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     R = e.rel ? 'prefetch' : 'preload',
     E = e.containerElement || 'article',
     _ = !1 !== e.noscriptFallback,
     W = () => {
      l || d(!0);
     };
    return (
     s.useEffect(() => {
      l && (C(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
     }, [l, C, e.focusOnLoad, n]),
     s.useEffect(() => {
      if (!l || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
      let t = !1,
       i = !1;
      const s = (i) => {
       if ('https://www.youtube.com' !== i.origin && 'https://www.youtube-nocookie.com' !== i.origin) return;
       let s;
       try {
        s = 'string' == typeof i.data ? JSON.parse(i.data) : i.data;
       } catch {
        return;
       }
       switch (s.event) {
        case 'onReady':
         t || ((t = !0), e.onReady && e.onReady({ videoId: e.id, title: g }));
         break;
        case 'infoDelivery':
         if (void 0 !== s.info?.playerState) {
          const t = s.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: s.info.currentTime, duration: s.info.duration }), t)) {
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
         (void 0 !== s.info?.playbackRate && e.onPlaybackRateChange?.(s.info.playbackRate), void 0 !== s.info?.playbackQuality && e.onPlaybackQualityChange?.(s.info.playbackQuality));
         break;
        case 'onStateChange':
         if (void 0 !== s.info?.playerState) {
          const t = s.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: s.info.currentTime, duration: s.info.duration }), t)) {
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
         if (s.info && 'errorCode' in s.info) {
          const n = s.info.errorCode;
          e.onError && e.onError(n);
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
      const a = [],
       r = () => {
        'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
       },
       o = () => {
        i ||
         ((i = !0),
         r(),
         [100, 300, 600, 1200, 2400].forEach((e) => {
          a.push(setTimeout(r, e));
         }));
       };
      return (
       'object' == typeof n && n?.current
        ? (n.current.addEventListener('load', o), 'complete' === n.current.contentDocument?.readyState && o())
        : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
           a.push(setTimeout(r, e));
          }),
       () => {
        (window.removeEventListener('message', s), a.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', o));
       }
      );
     }, [l, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, g, n]),
     (0, i.jsxs)(i.Fragment, {
      children: [
       !e.lazyLoad && (0, i.jsx)('link', { rel: R, href: S, as: 'image' }),
       (0, i.jsx)(i.Fragment, { children: t && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: k }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), x && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, g, S, k, e.seo) } }),
       _ && !e.playlist && (0, i.jsx)('noscript', { children: (0, i.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${g} on YouTube`, children: ['Watch "', g, '" on YouTube'] }) }),
       (0, i.jsxs)(E, {
        onPointerOver: () => {
         t || o(!0);
        },
        onClick: W,
        className: `${z} ${l ? D : ''}`,
        'data-title': g,
        role: l || e.lazyLoad ? void 0 : 'img',
        'aria-label': l ? void 0 : `${g} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${S})` }), '--aspect-ratio': (O / L) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !l && (0, i.jsx)('img', { src: S, alt: `${g} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !l && (0, i.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && l) && (0, i.jsx)('button', { type: 'button', className: P, 'aria-label': `${p} ${g}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, onClick: W, children: (0, i.jsx)('span', { className: 'lty-visually-hidden', children: p }) }), l && (0, i.jsx)('iframe', { ref: n, className: N, title: g, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: b, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  41534(e, n, t) {
   function i(e, n) {
    if (null == e) return {};
    var t,
     i,
     s = (function (e, n) {
      if (null == e) return {};
      var t = {};
      for (var i in e)
       if ({}.hasOwnProperty.call(e, i)) {
        if (-1 !== n.indexOf(i)) continue;
        t[i] = e[i];
       }
      return t;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (i = 0; i < a.length; i++) ((t = a[i]), -1 === n.indexOf(t) && {}.propertyIsEnumerable.call(e, t) && (s[t] = e[t]));
    }
    return s;
   }
   t.d(n, { A: () => i });
  },
  48171(e, n, t) {
   function i(e) {
    return (
     (i =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     i(e)
    );
   }
   function s(e) {
    var n = (function (e, n) {
     if ('object' != i(e) || !e) return e;
     var t = e[Symbol.toPrimitive];
     if (void 0 !== t) {
      var s = t.call(e, n || 'default');
      if ('object' != i(s)) return s;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == i(n) ? n : n + '';
   }
   function a(e, n, t) {
    return ((n = s(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e);
   }
   t.d(n, { A: () => a });
  },
  59292(e, n, t) {
   t.d(n, { f: () => i.f });
   var i = t(71544);
  },
  71544(e, n, t) {
   t.d(n, { f: () => m });
   var i = t(48171),
    s = t(41534),
    a = t(86070),
    r = t(13526),
    o = t(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     (n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, i));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, i.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var m = (0, o.forwardRef)(function (e, n) {
    var t = e.children,
     o = e.className,
     d = e.purpose,
     m = (0, s.A)(e, l);
    return (0, a.jsx)('p', c(c({ className: (0, r.$)('nl-paragraph', (0, i.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, m), {}, { children: 'lead' === d ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   m.displayName = 'Paragraph';
  },
  80883(e, n, t) {
   t.d(n, { L: () => a });
   var i = t(20201),
    s = t(86070);
   const a = ({ id: e, title: n, ...t }) => (0, s.jsx)(i.Ay, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...t });
  },
  82764(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, contentTitle: () => d, default: () => u, frontMatter: () => l, metadata: () => i, toc: () => m }));
   const i = JSON.parse('{"id":"community/events/design-systems-week/eerdere-edities/2022","title":"Design Systems Week 2022","description":"Tijdens Design Systems Week 2022 hadden we diverse sprekers over de NL Design System community. Gelukkig hebben we de video\'s nog!","source":"@site/docs/community/events/design-systems-week/eerdere-edities/2022.mdx","sourceDirName":"community/events/design-systems-week/eerdere-edities","slug":"/events/design-systems-week-2022","permalink":"/events/design-systems-week-2022","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/eerdere-edities/2022.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Design Systems Week 2022","title_sm":"2022","description":"Tijdens Design Systems Week 2022 hadden we diverse sprekers over de NL Design System community. Gelukkig hebben we de video\'s nog!","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2022","sidebar_position":4,"navigation_order":4,"pagination_label":"Design Systems Week 2022","slug":"/events/design-systems-week-2022"},"sidebar":"community","previous":{"title":"Videos 2023","permalink":"/events/design-systems-week-2023/programma"},"next":{"title":"Design systems","permalink":"/community/design-systems"}}');
   var s = t(86070),
    a = t(18439),
    r = t(80883),
    o = t(59292);
   const l = { title: 'Design Systems Week 2022', title_sm: '2022', description: "Tijdens Design Systems Week 2022 hadden we diverse sprekers over de NL Design System community. Gelukkig hebben we de video's nog!", hide_title: !0, hide_table_of_contents: !1, sidebar_label: 2022, sidebar_position: 4, navigation_order: 4, pagination_label: 'Design Systems Week 2022', slug: '/events/design-systems-week-2022' },
    d = 'Design Systems Week 2022',
    c = {},
    m = [
     { value: 'Wat is NL Design System?', id: 'wat-is-nl-design-system', level: 2 },
     { value: 'Samenwerken aan NL Design System', id: 'samenwerken-aan-nl-design-system', level: 2 },
     { value: 'RVO Design System', id: 'rvo-design-system', level: 2 },
     { value: 'Toegankelijkheid - Hidde de Vries', id: 'toegankelijkheid---hidde-de-vries', level: 2 },
     { value: 'Iconen op basis van gebruikersonderzoek', id: 'iconen-op-basis-van-gebruikersonderzoek', level: 2 },
     { value: 'Gemeente Utrecht Design System', id: 'gemeente-utrecht-design-system', level: 2 },
     { value: 'Belastingdienst Design System - Bold', id: 'belastingdienst-design-system---bold', level: 2 },
     { value: 'DSO-toolkit', id: 'dso-toolkit', level: 2 },
     { value: 'Gemeente Den Haag Design System', id: 'gemeente-den-haag-design-system', level: 2 },
     { value: 'NS Design System - Nessie', id: 'ns-design-system---nessie', level: 2 },
     { value: 'Open Formulieren en NL Design System', id: 'open-formulieren-en-nl-design-system', level: 2 },
    ];
   function g(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'design-systems-week-2022', children: 'Design Systems Week 2022' }) }), '\n', (0, s.jsx)(o.f, { purpose: 'lead', children: (0, s.jsx)(n.p, { children: "Tijdens Design Systems Week 2022 hadden we diverse sprekers over de NL Design System community. Gelukkig hebben we de\nvideo's nog!" }) }), '\n', (0, s.jsx)(n.h2, { id: 'wat-is-nl-design-system', children: 'Wat is NL Design System?' }), '\n', (0, s.jsx)(n.p, { children: 'In deze eerste sessie openen we de Design Systems week en leggen Angela Imhof en Robbert Broersma uit waarom NL Design System er is, wat NL Design System is en wat jij ermee kunt.' }), '\n', (0, s.jsx)(r.L, { id: 'Fr8DAm7GDm0', title: 'Wat is NL Design System' }), '\n', (0, s.jsx)(n.h2, { id: 'samenwerken-aan-nl-design-system', children: 'Samenwerken aan NL Design System' }), '\n', (0, s.jsx)(n.p, { children: 'In deze sessie leggen Robbert Broersma, Yolijn van der Kolk en Jeffrey Lauwers van het kernteam uit hoe ze graag willen samenwerken. Hoe bouwen we nu samen aan een beter, toegankelijker en gebruiksvriendelijker design system? Wat bedoelen we met het Estafettemodel?' }), '\n', (0, s.jsx)(r.L, { id: 'ffKtQO_zlZE', title: 'Samenwerken aan NL Design System' }), '\n', (0, s.jsx)(n.h2, { id: 'rvo-design-system', children: 'RVO Design System' }), '\n', (0, s.jsx)(n.p, { children: 'Robert Roose is design lead bij de Rijksdienst voor Ondernemend Nederland (RVO), waar hij verantwoordelijk is voor het ontwikkelen van een design system gebaseerd op de Rijkshuisstijl. Hij verteld hoe de RVO het design system gebruikt en verder ontwikkelt en hoe de samenwerking met NL Design System hen vergaat.' }), '\n', (0, s.jsx)(r.L, { id: 'p5cuPu1wJdg', title: 'RVO Design System' }), '\n', (0, s.jsx)(n.h2, { id: 'toegankelijkheid---hidde-de-vries', children: 'Toegankelijkheid - Hidde de Vries' }), '\n', (0, s.jsx)(n.p, { children: 'Componenten zijn een revolutie gebleken voor onze manier van werken, omdat het wiel uitvinden nu nog meer \xe9\xe9n keer hoeft. Met een succesvolle aanpak scheelt het teams veel tijd. Samenwerken aan componenten maakt ook mogelijk een positieve impact te hebben op toegankelijkheid. Deze presentatie verkent praktische strategie\xebn om toegankelijke componenten te maken, zodat meer mensen je digitale dienstverlening goed kunnen gebruiken.\nMet zijn ervaring als front-end developer en toegankelijkheidsspecialist kan Hidde je alles vertellen over het toepassen van toegankelijkheidseisen binnen design systems. In deze sessie' }), '\n', (0, s.jsx)(r.L, { id: 'Hjn6IzmDTsY', title: 'Toegankelijkheid - Hidde de Vries' }), '\n', (0, s.jsx)(n.h2, { id: 'iconen-op-basis-van-gebruikersonderzoek', children: 'Iconen op basis van gebruikersonderzoek' }), '\n', (0, s.jsx)(n.p, { children: 'Martijn Rietveld is mede-oprichter van OpenGemeenten. OpenGemeenten bouwt samen met gemeenten aan veilige en toegankelijke online dienstverlening. Martijn vertelt hoe OpenGemeenten iconen op basis van gebruikersonderzoek ontwikkelt en hoe ze deze iconen in samenwerking verbeteren en delen met anderen.' }), '\n', (0, s.jsx)(r.L, { id: 'WPAcvV5YKF0', title: 'Iconen op basis van gebruikersonderzoek' }), '\n', (0, s.jsx)(n.h2, { id: 'gemeente-utrecht-design-system', children: 'Gemeente Utrecht Design System' }), '\n', (0, s.jsx)(n.p, { children: 'Jeroen du Chatinier, UX-designer bij de gemeente Utrecht, vertelt in deze online sessie hoe Utrecht een design system heeft gebouwd en hoe zij het doorontwikkelen.' }), '\n', (0, s.jsx)(r.L, { id: '8-GYHyCyTP4', title: 'Gemeente Utrecht Design System' }), '\n', (0, s.jsx)(n.h2, { id: 'belastingdienst-design-system---bold', children: 'Belastingdienst Design System - Bold' }), '\n', (0, s.jsx)(n.p, { children: 'De afgelopen jaren hebben we hard gewerkt aan een volwaardig design system. Nu krijgen onze verschillende websites, zoals de mijn-omgevingen en informatieve website een uniforme look and feel. Het design system helpt ons om de gebruikerservaring en toegankelijkheid te verbeteren.\nRealisatie is 1 ding, maar het is ook belangrijk dat het Design System goed gebruikt wordt. Dat gebruikers mee kunnen denken en bijdragen leveren aan Bold.' }), '\n', (0, s.jsx)(r.L, { id: 'YbVBDupVuwQ', title: 'Belastingdienst Design System - Bold' }), '\n', (0, s.jsx)(n.h2, { id: 'dso-toolkit', children: 'DSO-toolkit' }), '\n', (0, s.jsx)(n.p, { children: 'Het Digitaal Stelsel Omgevingswet (DSO) is een stelsel van vele applicaties dat uitvoering van de nieuwe Omgevingswet gaat ondersteunen. Het design system (DSO-Toolkit) speelt een cruciale rol in de ontwikkeling van een gebruiksvriendelijk en toegankelijk omgevingsloket.\nTijdens de presentatie zoomen we in op de rol van het design system binnen het Agile-ontwikkelproces (SAFE) en hoe we samenwerken aan een toegankelijke gebruikservaring voor het gehele omgevingsloket. Deze presentatie wordt gegeven door Sander Haaksma, Lead UX Digitaal Stelsel Omgevingswet.' }), '\n', (0, s.jsx)(r.L, { id: '5I_UFoZrxgM', title: 'DSO-toolkit' }), '\n', (0, s.jsx)(n.h2, { id: 'gemeente-den-haag-design-system', children: 'Gemeente Den Haag Design System' }), '\n', (0, s.jsx)(n.p, { children: 'Rozerin Ayerdem en Youri van Heumen van de gemeente Den Haag werken sinds het begin samen met NL Design System. Als digital designer en front-end developer kunnen zij je in deze online sessie vertellen hoe zij hun kennis delen om samen aan een beter NL Design System te bouwen.' }), '\n', (0, s.jsx)(r.L, { id: 'MDAvhU_WCgI', title: 'Gemeente Den Haag Design System' }), '\n', (0, s.jsx)(n.h2, { id: 'ns-design-system---nessie', children: 'NS Design System - Nessie' }), '\n', (0, s.jsx)(n.p, { children: 'In deze presentatie vertelt Digital Product Designer Jelle Pieter de Graaf alles over de ontwikkeling van Nessie. wereldklasse. Een design system zorgt ervoor dat je nieuwe oplossingen in een handomdraai kunt ontwerpen en ontwikkelen. En dat designs consistent zijn over alle platformen heen. Precies de problemen die NS wilde oplossen.' }), '\n', (0, s.jsx)(r.L, { id: 'hh0tG_Q2k8U', title: 'NS Design System - Nessie' }), '\n', (0, s.jsx)(n.h2, { id: 'open-formulieren-en-nl-design-system', children: 'Open Formulieren en NL Design System' }), '\n', (0, s.jsx)(n.p, { children: 'Sergei Maertens werkt als Django-developer bij Maykin Media. In deze sessie vertelt hij alles over Open Formulieren: wat is het? Hoe werkt het met een design system? Wat is de huidige status van de gebruikte technologie en hoe is de samenwerking met NL Design System?' }), '\n', (0, s.jsx)(r.L, { id: 'DnFOGFCnzes', title: 'Open Formulieren en NL Design System' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(g, { ...e }) }) : g(e);
   }
  },
 },
]);
