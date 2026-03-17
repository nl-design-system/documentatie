'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [1132],
 {
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => l });
   var i = t(30758);
   const o = {},
    a = i.createContext(o);
   function r(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), i.createElement(a.Provider, { value: n }, e.children));
   }
  },
  54156(e, n, t) {
   (t.r(n), t.d(n, { assets: () => m, contentTitle: () => h, default: () => b, frontMatter: () => p, metadata: () => i, toc: () => g }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/fieldset/legend/README","title":"Legends","description":"Richtlijnen voor legends in een fieldset in een formulier.","source":"@site/docs/richtlijnen/formulieren/fieldset/1-legend/README.mdx","sourceDirName":"richtlijnen/formulieren/fieldset/1-legend","slug":"/richtlijnen/formulieren/fieldsets/legends","permalink":"/richtlijnen/formulieren/fieldsets/legends","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/fieldset/1-legend/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Legends","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Legends in een fieldset","pagination_label":"Legends in een fieldset","description":"Richtlijnen voor legends in een fieldset in een formulier.","slug":"/richtlijnen/formulieren/fieldsets/legends","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Fieldsets","permalink":"/richtlijnen/formulieren/fieldsets/"},"next":{"title":"Descriptions in een fieldset","permalink":"/richtlijnen/formulieren/fieldsets/descriptions"}}');
   var o = t(86070),
    a = t(18439),
    r = t(78734),
    l = t(73058);
   function s(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'legends-bij-een-fieldset', children: 'Legends bij een fieldset' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Een ', (0, o.jsx)(n.code, { children: '<legend>' }), ' dient als de naam van de groep. ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' lezen deze legend voor bij elk invoerveld in de fieldset (groep), zodat deze koppeling ook duidelijk is zonder de visuele informatie.'] }), '\n', (0, o.jsx)(n.p, { children: (0, o.jsx)(n.code, { children: '<legend>Uw adresgegevens</legend>' }) }), '\n', (0, o.jsx)(n.p, { children: 'Maak de inhoud van de legend kort en omschrijvend.' }), '\n', (0, o.jsx)(n.p, { children: 'In onderstaande video leest VoiceOver in Safari drie verschillende fieldsets voor, een groep met keuzerondjes (radio buttons) en een bezorg- en factuuradres. De legend wordt steeds bij het formulierveld voorgelezen.\nVoiceOver leest de legend twee keer voor bij het eerste veld van een groep, dit is een bug van VoiceOver.' }), '\n', (0, o.jsx)(l.L, { id: 'WMa7LToyZVc', title: 'Demo fieldsets met VoiceOver in Safari' }), '\n', (0, o.jsx)(n.h2, { id: 'koppen-in-een-legend', children: 'Koppen in een legend' }), '\n', (0, o.jsxs)(n.p, { children: ['Een legend kan ook een kopje bevatten. Zorg er wel voor dat het niveau van deze kopjes klopt in de ', (0, o.jsx)('a', { href: 'https://www.a11yproject.com/posts/how-to-accessible-heading-structure/', children: 'hi\xebrarchische koppenstructuur' }), ' van de hele pagina.'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<fieldset>\n  <legend><h3>Bezorgadres</h3></legend>\n  <label for="shipping-street">Straat en huisnummer</label>\n  <input type="text" name="shipping-street" id="shipping-street" autocomplete="shipping address-line1" />\n  <label for="shipping-postal-code">Postcode</label>\n  <input type="text" name="shipping-postal-code" id="shipping-postal-code" autocomplete="shipping postal-code" />\n  <label for="shipping-city">Stad</label>\n  <input type="text" name="shipping-city" id="shipping-city" autocomplete="shipping address-level2" />\n</fieldset>\n\n<fieldset>\n  <legend><h3>Factuuradres</h3></legend>\n  <label for="billing-street">Straat en huisnummer</label>\n  <input type="text" name="billing-street" id="billing-street" autocomplete="billing address-line1" />\n  <label for="billing-postal-code">Postcode</label>\n  <input type="text" name="billing-postal-code" id="billing-postal-code" autocomplete="billing postal-code" />\n  <label for="billing-city">Stad</label>\n  <input type="text" name="billing-city" id="billing-city" autocomplete="billing address-level2" />\n</fieldset>\n' }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
   function c(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   const p = { title: 'Legends', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Legends in een fieldset', pagination_label: 'Legends in een fieldset', description: 'Richtlijnen voor legends in een fieldset in een formulier.', slug: '/richtlijnen/formulieren/fieldsets/legends', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    m = {},
    g = [{ value: 'Koppen in een legend', id: 'koppen-in-een-legend', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function f(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(f, { ...e }) }) : f();
   }
  },
  73058(e, n, t) {
   t.d(n, { L: () => s });
   var i = t(86070),
    o = t(30758);
   const a = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, n, t, i, o) {
    const a = { '@context': 'https://schema.org', '@type': 'VideoObject', name: o?.name || n, thumbnailUrl: [o?.thumbnailUrl || t], embedUrl: o?.embedUrl || `${i}/embed/${e}`, contentUrl: o?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(o?.description && { description: o.description }), ...(o?.uploadDate && { uploadDate: o.uploadDate }), ...(o?.duration && { duration: o.duration }) };
    return JSON.stringify(a);
   }
   const l = o.forwardRef(function (e, n) {
     const [t, l] = o.useState(!1),
      [s, d] = o.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      u = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      p = e.title,
      h = e.poster || 'hqdefault',
      m = e.announce || 'Watch',
      g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      f = o.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
          n.append(t, e);
         }),
        n
       );
      }, [e.muted, g, e.enableJsApi, e.playlist, c, e.params]),
      b = o.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      y = o.useMemo(() => (e.playlist ? `${b}/embed/videoseries?${f.toString()}` : `${b}/embed/${c}?${f.toString()}`), [e.playlist, b, c, f]),
      j = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
      v = e.webp ? 'webp' : 'jpg',
      w = e.webp ? 'vi_webp' : 'vi',
      x = j
       ? ((e, n, t, i = 'maxresdefault') => {
          const [r, l] = (0, o.useState)('');
          return (
           (0, o.useEffect)(() => {
            const o = `https://img.youtube.com/${n}/${e}/${i}.${t}`,
             r = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
             s = a[i],
             d = new Image();
            ((d.onload = () => {
             d.width < s ? l(r) : l(o);
            }),
             (d.onerror = () => l(r)),
             (d.src = o));
           }, [e, n, t, i]),
           r
          );
         })(e.id, w, v, h)
       : null,
      k = o.useMemo(() => e.thumbnail || x || `https://i.ytimg.com/${w}/${e.playlist ? u : c}/${h}.${v}`, [e.thumbnail, x, w, e.playlist, u, c, h, v]),
      C = e.activatedClass || 'lyt-activated',
      S = e.adNetwork || !1,
      R = e.aspectHeight || 9,
      E = e.aspectWidth || 16,
      L = e.iframeClass || '',
      z = e.playerClass || 'lty-playbtn',
      $ = e.wrapperClass || 'yt-lite',
      P = o.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      _ = e.rel ? 'prefetch' : 'preload',
      M = e.containerElement || 'article',
      O = !1 !== e.noscriptFallback,
      A = () => {
       s || d(!0);
      };
     return (
      o.useEffect(() => {
       s && (P(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
      }, [s, P, e.focusOnLoad, n]),
      o.useEffect(() => {
       if (!s || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
       let t = !1,
        i = !1;
       const o = (i) => {
        if ('https://www.youtube.com' !== i.origin && 'https://www.youtube-nocookie.com' !== i.origin) return;
        let o;
        try {
         o = 'string' == typeof i.data ? JSON.parse(i.data) : i.data;
        } catch {
         return;
        }
        switch (o.event) {
         case 'onReady':
          t || ((t = !0), e.onReady && e.onReady({ videoId: e.id, title: p }));
          break;
         case 'infoDelivery':
          if (void 0 !== o.info?.playerState) {
           const t = o.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: o.info.currentTime, duration: o.info.duration }), t)) {
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
          (void 0 !== o.info?.playbackRate && e.onPlaybackRateChange?.(o.info.playbackRate), void 0 !== o.info?.playbackQuality && e.onPlaybackQualityChange?.(o.info.playbackQuality));
          break;
         case 'onStateChange':
          if (void 0 !== o.info?.playerState) {
           const t = o.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: o.info.currentTime, duration: o.info.duration }), t)) {
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
          if (o.info && 'errorCode' in o.info) {
           const n = o.info.errorCode;
           e.onError && e.onError(n);
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
       const a = [],
        r = () => {
         'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
        },
        l = () => {
         i ||
          ((i = !0),
          r(),
          [100, 300, 600, 1200, 2400].forEach((e) => {
           a.push(setTimeout(r, e));
          }));
        };
       return (
        'object' == typeof n && n?.current
         ? (n.current.addEventListener('load', l), 'complete' === n.current.contentDocument?.readyState && l())
         : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
            a.push(setTimeout(r, e));
           }),
        () => {
         (window.removeEventListener('message', o), a.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', l));
        }
       );
      }, [s, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, p, n]),
      (0, i.jsxs)(i.Fragment, {
       children: [
        !e.lazyLoad && (0, i.jsx)('link', { rel: _, href: k, as: 'image' }),
        (0, i.jsx)(i.Fragment, { children: t && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: b }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), S && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, p, k, b, e.seo) } }),
        O && !e.playlist && (0, i.jsx)('noscript', { children: (0, i.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
        (0, i.jsxs)(M, {
         onPointerOver: () => {
          t || l(!0);
         },
         onClick: A,
         className: `${$} ${s ? C : ''}`,
         'data-title': p,
         role: s || e.lazyLoad ? void 0 : 'img',
         'aria-label': s ? void 0 : `${p} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${k})` }), '--aspect-ratio': (R / E) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !s && (0, i.jsx)('img', { src: k, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !s && (0, i.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && s) && (0, i.jsx)('button', { type: 'button', className: z, 'aria-label': `${m} ${p}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, onClick: A, children: (0, i.jsx)('span', { className: 'lty-visually-hidden', children: m }) }), s && (0, i.jsx)('iframe', { ref: n, className: L, title: p, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: y, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    s = ({ id: e, title: n, ...t }) => (0, i.jsx)(l, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...t });
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var i = t(86070),
    o = t(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
 },
]);
