'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [42330],
 {
  7891(e, n, t) {
   t.d(n, { L: () => r });
   var i = t(20201);
   const a = { nl: { skipLink: 'Naar de inhoud', mainNavLabel: 'Hoofdmenu', footerNavLabel: 'Submenu', menu: 'Menu', close: 'Sluiten', open: 'Open', search: 'Zoeken', searchAriaLabel: 'Zoekterm', searchRequiredError: 'Dit veld is verplicht, maar het is niet ingevuld.', breadcrumbLabel: 'Kruimelpad', logoAlt: 'Logo van NL Design System', logoLinkAlt: 'Logo van NL Design System, naar de homepage', watch: 'Bekijk', subnavigation: 'subnavigatie' }, en: { skipLink: 'To main content', mainNavLabel: 'Main menu', footerNavLabel: 'Submenu', menu: 'Menu', close: 'Close', open: 'Open', search: 'Search', searchAriaLabel: 'Searchterm', searchRequiredError: 'This field is required, but it was left empty.', breadcrumbLabel: 'Breadcrumbs', logoAlt: 'Logo of NL Design System', logoLinkAlt: 'Logo of NL Design System, to the homepage', watch: 'Watch', subnavigation: 'subnavigation' } };
   var o = t(86070);
   const r = ({ id: e, title: n, lang: t = 'nl', ...r }) => (0, o.jsx)(i.Ay, { lazyLoad: !0, adNetwork: !1, announce: a[t].watch, cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...r });
  },
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => s });
   var i = t(30758);
   const a = {},
    o = i.createContext(a);
   function r(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), i.createElement(o.Provider, { value: n }, e.children));
   }
  },
  20201(e, n, t) {
   t.d(n, { Ay: () => s });
   var i = t(86070),
    a = t(30758);
   const o = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, n, t, i, a) {
    const o = { '@context': 'https://schema.org', '@type': 'VideoObject', name: a?.name || n, thumbnailUrl: [a?.thumbnailUrl || t], embedUrl: a?.embedUrl || `${i}/embed/${e}`, contentUrl: a?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(a?.description && { description: a.description }), ...(a?.uploadDate && { uploadDate: a.uploadDate }), ...(a?.duration && { duration: a.duration }) };
    return JSON.stringify(o);
   }
   const s = a.forwardRef(function (e, n) {
    const [t, s] = a.useState(!1),
     [l, c] = a.useState(e.alwaysLoadIframe || !1),
     d = encodeURIComponent(e.id),
     u = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     p = e.title,
     h = e.poster || 'hqdefault',
     g = e.announce || 'Watch',
     m = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     f = a.useMemo(() => {
      const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(m ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: d } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
         n.append(t, e);
        }),
       n
      );
     }, [e.muted, m, e.enableJsApi, e.playlist, d, e.params]),
     b = a.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     y = a.useMemo(() => (e.playlist ? `${b}/embed/videoseries?${f.toString()}` : `${b}/embed/${d}?${f.toString()}`), [e.playlist, b, d, f]),
     v = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
     j = e.webp ? 'webp' : 'jpg',
     w = e.webp ? 'vi_webp' : 'vi',
     k = v
      ? ((e, n, t, i = 'maxresdefault') => {
         const [r, s] = (0, a.useState)('');
         return (
          (0, a.useEffect)(() => {
           const a = `https://img.youtube.com/${n}/${e}/${i}.${t}`,
            r = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
            l = o[i],
            c = new Image();
           ((c.onload = () => {
            c.width < l ? s(r) : s(a);
           }),
            (c.onerror = () => s(r)),
            (c.src = a));
          }, [e, n, t, i]),
          r
         );
        })(e.id, w, j, h)
      : null,
     x = a.useMemo(() => e.thumbnail || k || `https://i.ytimg.com/${w}/${e.playlist ? u : d}/${h}.${j}`, [e.thumbnail, k, w, e.playlist, u, d, h, j]),
     L = e.activatedClass || 'lyt-activated',
     S = e.adNetwork || !1,
     C = e.aspectHeight || 9,
     R = e.aspectWidth || 16,
     E = e.iframeClass || '',
     z = e.playerClass || 'lty-playbtn',
     $ = e.wrapperClass || 'yt-lite',
     P = a.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     N = e.rel ? 'prefetch' : 'preload',
     _ = e.containerElement || 'article',
     A = !1 !== e.noscriptFallback,
     O = () => {
      l || c(!0);
     };
    return (
     a.useEffect(() => {
      l && (P(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
     }, [l, P, e.focusOnLoad, n]),
     a.useEffect(() => {
      if (!l || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
      let t = !1,
       i = !1;
      const a = (i) => {
       if ('https://www.youtube.com' !== i.origin && 'https://www.youtube-nocookie.com' !== i.origin) return;
       let a;
       try {
        a = 'string' == typeof i.data ? JSON.parse(i.data) : i.data;
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
      const o = [],
       r = () => {
        'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + d + '"}', '*');
       },
       s = () => {
        i ||
         ((i = !0),
         r(),
         [100, 300, 600, 1200, 2400].forEach((e) => {
          o.push(setTimeout(r, e));
         }));
       };
      return (
       'object' == typeof n && n?.current
        ? (n.current.addEventListener('load', s), 'complete' === n.current.contentDocument?.readyState && s())
        : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
           o.push(setTimeout(r, e));
          }),
       () => {
        (window.removeEventListener('message', a), o.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', s));
       }
      );
     }, [l, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, d, p, n]),
     (0, i.jsxs)(i.Fragment, {
      children: [
       !e.lazyLoad && (0, i.jsx)('link', { rel: N, href: x, as: 'image' }),
       (0, i.jsx)(i.Fragment, { children: t && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: b }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), S && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, p, x, b, e.seo) } }),
       A && !e.playlist && (0, i.jsx)('noscript', { children: (0, i.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
       (0, i.jsxs)(_, {
        onPointerOver: () => {
         t || s(!0);
        },
        onClick: O,
        className: `${$} ${l ? L : ''}`,
        'data-title': p,
        role: l || e.lazyLoad ? void 0 : 'img',
        'aria-label': l ? void 0 : `${p} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (C / R) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !l && (0, i.jsx)('img', { src: x, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !l && (0, i.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && l) && (0, i.jsx)('button', { type: 'button', className: z, 'aria-label': `${g} ${p}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, onClick: O, children: (0, i.jsx)('span', { className: 'lty-visually-hidden', children: g }) }), l && (0, i.jsx)('iframe', { ref: n, className: E, title: p, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: y, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var i = t(86070),
    a = t(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87789(e, n, t) {
   (t.r(n), t.d(n, { assets: () => g, contentTitle: () => h, default: () => b, frontMatter: () => p, metadata: () => i, toc: () => m }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/fieldset/legend/index","title":"Legends","description":"Richtlijnen voor legends in een fieldset in een formulier.","source":"@site/docs/richtlijnen/formulieren/fieldset/1-legend/index.mdx","sourceDirName":"richtlijnen/formulieren/fieldset/1-legend","slug":"/richtlijnen/formulieren/fieldsets/legends","permalink":"/richtlijnen/formulieren/fieldsets/legends","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/fieldset/1-legend/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Legends","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Legends in een fieldset","pagination_label":"Legends in een fieldset","description":"Richtlijnen voor legends in een fieldset in een formulier.","slug":"/richtlijnen/formulieren/fieldsets/legends","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Fieldsets","permalink":"/richtlijnen/formulieren/fieldsets/"},"next":{"title":"Descriptions in een fieldset","permalink":"/richtlijnen/formulieren/fieldsets/descriptions"}}');
   var a = t(86070),
    o = t(18439),
    r = t(56672),
    s = t(7891);
   function l(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'legends-bij-een-fieldset', children: 'Legends bij een fieldset' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Een ', (0, a.jsx)(n.code, { children: '<legend>' }), ' dient als de naam van de groep. ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' lezen deze legend voor bij elk invoerveld in de fieldset (groep), zodat deze koppeling ook duidelijk is zonder de visuele informatie.'] }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.code, { children: '<legend>Uw adresgegevens</legend>' }) }), '\n', (0, a.jsx)(n.p, { children: 'Maak de inhoud van de legend kort en omschrijvend.' }), '\n', (0, a.jsx)(n.p, { children: 'In onderstaande video leest VoiceOver in Safari drie verschillende fieldsets voor, een groep met keuzerondjes (radio buttons) en een bezorg- en factuuradres. De legend wordt steeds bij het formulierveld voorgelezen.\nVoiceOver leest de legend twee keer voor bij het eerste veld van een groep, dit is een bug van VoiceOver.' }), '\n', (0, a.jsx)(s.L, { id: 'WMa7LToyZVc', title: 'Demo fieldsets met VoiceOver in Safari' }), '\n', (0, a.jsx)(n.h2, { id: 'koppen-in-een-legend', children: 'Koppen in een legend' }), '\n', (0, a.jsxs)(n.p, { children: ['Een legend kan ook een kopje bevatten. Zorg er wel voor dat het niveau van deze kopjes klopt in de ', (0, a.jsx)(n.a, { href: 'https://www.a11yproject.com/posts/how-to-accessible-heading-structure/', children: 'hi\xebrarchische koppenstructuur' }), ' van de hele pagina.'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<fieldset>\n  <legend><h3>Bezorgadres</h3></legend>\n  <label for="shipping-street">Straat en huisnummer</label>\n  <input type="text" name="shipping-street" id="shipping-street" autocomplete="shipping address-line1" />\n  <label for="shipping-postal-code">Postcode</label>\n  <input type="text" name="shipping-postal-code" id="shipping-postal-code" autocomplete="shipping postal-code" />\n  <label for="shipping-city">Stad</label>\n  <input type="text" name="shipping-city" id="shipping-city" autocomplete="shipping address-level2" />\n</fieldset>\n\n<fieldset>\n  <legend><h3>Factuuradres</h3></legend>\n  <label for="billing-street">Straat en huisnummer</label>\n  <input type="text" name="billing-street" id="billing-street" autocomplete="billing address-line1" />\n  <label for="billing-postal-code">Postcode</label>\n  <input type="text" name="billing-postal-code" id="billing-postal-code" autocomplete="billing postal-code" />\n  <label for="billing-city">Stad</label>\n  <input type="text" name="billing-city" id="billing-city" autocomplete="billing address-level2" />\n</fieldset>\n' }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
   function d(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
   }
   const p = { title: 'Legends', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Legends in een fieldset', pagination_label: 'Legends in een fieldset', description: 'Richtlijnen voor legends in een fieldset in een formulier.', slug: '/richtlijnen/formulieren/fieldsets/legends', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    g = {},
    m = [{ value: 'Koppen in een legend', id: 'koppen-in-een-legend', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function f(e) {
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(c, {}), '\n', (0, a.jsx)(u, {}), '\n', (0, a.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(f, { ...e }) }) : f();
   }
  },
 },
]);
