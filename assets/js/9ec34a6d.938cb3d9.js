'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [17240],
 {
  18439(e, n, t) {
   t.d(n, { R: () => l, x: () => r });
   var a = t(30758);
   const i = {},
    o = a.createContext(i);
   function l(e) {
    const n = a.useContext(o);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), a.createElement(o.Provider, { value: n }, e.children));
   }
  },
  21894(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, contentTitle: () => d, default: () => h, frontMatter: () => s, metadata: () => a, toc: () => u }));
   const a = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/language","title":"De juiste taal instellen","description":"Geef aan welke taal wordt gebruikt in de pagina of als deze anders is voor een deel van de pagina.","source":"@site/docs/richtlijnen/content/tekstopmaak/language.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/taal","permalink":"/richtlijnen/content/tekstopmaak/taal","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/language.mdx","tags":[],"version":"current","frontMatter":{"title":"De juiste taal instellen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"De juiste taal instellen","pagination_label":"De juiste taal instellen","description":"Geef aan welke taal wordt gebruikt in de pagina of als deze anders is voor een deel van de pagina.","slug":"/richtlijnen/content/tekstopmaak/taal","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","taal"]},"sidebar":"richtlijnen","previous":{"title":"Koppen","permalink":"/richtlijnen/content/tekstopmaak/koppen"},"next":{"title":"Toegankelijke linkteksten","permalink":"/richtlijnen/content/tekstopmaak/linkteksten"}}');
   var i = t(86070),
    o = t(18439),
    l = t(72863),
    r = t(78734);
   const s = { title: 'De juiste taal instellen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'De juiste taal instellen', pagination_label: 'De juiste taal instellen', description: 'Geef aan welke taal wordt gebruikt in de pagina of als deze anders is voor een deel van de pagina.', slug: '/richtlijnen/content/tekstopmaak/taal', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'taal'] },
    d = 'De juiste taal instellen',
    c = {},
    u = [{ value: 'Voorbeeld van taalwisseling met een screenreader', id: 'voorbeeld-van-taalwisseling-met-een-screenreader', level: 3 }, { value: 'Taal van de pagina', id: 'taal-van-de-pagina', level: 2 }, { value: 'Een stukje tekst in een andere taal', id: 'een-stukje-tekst-in-een-andere-taal', level: 2 }, { value: 'Als je het niet kunt instellen', id: 'als-je-het-niet-kunt-instellen', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'de-juiste-taal-instellen', children: 'De juiste taal instellen' }) }), '\n', (0, i.jsx)(n.p, { children: 'Voor de toegankelijkheid van je content is het belangrijk dat de gebruikte taal goed is ingesteld. Dat geldt voor de hele pagina \xe9n stukken tekst in een andere taal.' }), '\n', (0, i.jsxs)(n.p, { children: ['Het instellen van de juiste taal is belangrijk omdat hulptechnologie\xebn, zoals ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' of vertaalhulpmiddelen, afhankelijk zijn van die informatie.'] }), '\n', (0, i.jsx)(n.p, { children: 'Als de taal niet goed is ingesteld:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'spreekt een screenreader woorden verkeerd uit;' }), '\n', (0, i.jsx)(n.li, { children: 'worden automatische vertalingen onduidelijk of fout;' }), '\n', (0, i.jsx)(n.li, { children: 'is de inhoud minder toegankelijk voor mensen die de taal niet vloeiend beheersen.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Door de taal goed aan te geven, help je dus mensen die je content anders niet goed kunnen gebruiken of begrijpen.' }), '\n', (0, i.jsx)(n.h3, { id: 'voorbeeld-van-taalwisseling-met-een-screenreader', children: 'Voorbeeld van taalwisseling met een screenreader' }), '\n', (0, i.jsx)(n.p, { children: 'In deze video hoor je hoe de screenreader VoiceOver wisselt van stem en taal voor teksten waarvan de taal is ingesteld.' }), '\n', (0, i.jsx)(l.L, { id: '2UAjJ_5nxqw', title: 'Voorbeeld van taalwisseling met een screenreader' }), '\n', (0, i.jsx)(n.h2, { id: 'taal-van-de-pagina', children: 'Taal van de pagina' }), '\n', (0, i.jsx)(n.p, { children: 'Elke webpagina heeft een hoofdtaal. Die moet overeenkomen met de taal waarin de tekst op die pagina is geschreven.' }), '\n', (0, i.jsx)(n.p, { children: 'In sommige CMS\u2019en kun je de paginataal zelf instellen \u2014 bijvoorbeeld via de pagina-instellingen of bij het aanmaken van een nieuwe pagina. In andere gevallen is die vooraf ingesteld of wordt automatisch bepaald.' }), '\n', (0, i.jsx)(n.h2, { id: 'een-stukje-tekst-in-een-andere-taal', children: 'Een stukje tekst in een andere taal' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik je in je tekst een woord of zin in een andere taal dan de rest van de pagina? Geef dan aan dat dit stukje tekst in een andere taal is geschreven. Bijvoorbeeld bij Engelse termen (call to action), Franse citaten of Duitstalige namen.' }), '\n', (0, i.jsx)(n.p, { children: 'Stel alleen een taalwissel in als het woord nog niet is ingeburgerd in de hoofdtaal. Voor woorden die wel onderdeel zijn geworden van de hoofdtaal (denk bijvoorbeeld aan \xfcberhaupt, enfin en management) hoef je geen taalwissel in te stellen.' }), '\n', (0, i.jsx)(n.p, { children: 'In sommige CMS\u2019en kun je dit instellen via een opmaakoptie of een taalkeuze bij een tekstblok.' }), '\n', (0, i.jsx)(n.h2, { id: 'als-je-het-niet-kunt-instellen', children: 'Als je het niet kunt instellen' }), '\n', (0, i.jsx)(n.p, { children: 'Kun je de paginataal of de taal van een tekstblok niet vinden in je CMS? Ga dan na of je CMS deze mogelijkheid biedt. Is dat niet zo, of kun je het niet zelf aanpassen? Dan kun je uitzoeken wie dat w\xe9l kan of dit aankaarten bij de partij die het CMS beheert of levert.' }), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'Lees je pagina rustig door en let op of er stukken tekst zijn in een andere taal dan de rest. Controleer het volgende:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Is de juiste taal ingesteld voor de hele pagina?\nBekijk de pagina-instellingen in het CMS. Klopt de gekozen taal met de hoofdtaal van de inhoud?' }), '\n', (0, i.jsx)(n.li, { children: 'Staan er woorden of zinnen in een andere taal?\nBijvoorbeeld Engelse termen, Franse uitdrukkingen of citaten in een andere taal. Vraag jezelf bij elk geval af:\nIs dit als andere taal gemarkeerd in het CMS?' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, i.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/3.1.1/', children: 'Succescriterium 3.1.1 Taal van de pagina' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/3.1.2/', children: 'Succescriterium 3.1.2 Taal van onderdelen' }) }), '\n'] }), '\n', (0, i.jsx)(r.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  72863(e, n, t) {
   t.d(n, { L: () => s });
   var a = t(86070),
    i = t(30758);
   const o = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function l(e, n, t, a, i) {
    const o = { '@context': 'https://schema.org', '@type': 'VideoObject', name: i?.name || n, thumbnailUrl: [i?.thumbnailUrl || t], embedUrl: i?.embedUrl || `${a}/embed/${e}`, contentUrl: i?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(i?.description && { description: i.description }), ...(i?.uploadDate && { uploadDate: i.uploadDate }), ...(i?.duration && { duration: i.duration }) };
    return JSON.stringify(o);
   }
   const r = i.forwardRef(function (e, n) {
     const [t, r] = i.useState(!1),
      [s, d] = i.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      u = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      p = e.title,
      h = e.poster || 'hqdefault',
      m = e.announce || 'Watch',
      g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      k = i.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
          n.append(t, e);
         }),
        n
       );
      }, [e.muted, g, e.enableJsApi, e.playlist, c, e.params]),
      j = i.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      f = i.useMemo(() => (e.playlist ? `${j}/embed/videoseries?${k.toString()}` : `${j}/embed/${c}?${k.toString()}`), [e.playlist, j, c, k]),
      b = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
      v = e.webp ? 'webp' : 'jpg',
      y = e.webp ? 'vi_webp' : 'vi',
      w = b
       ? ((e, n, t, a = 'maxresdefault') => {
          const [l, r] = (0, i.useState)('');
          return (
           (0, i.useEffect)(() => {
            const i = `https://img.youtube.com/${n}/${e}/${a}.${t}`,
             l = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
             s = o[a],
             d = new Image();
            ((d.onload = () => {
             d.width < s ? r(l) : r(i);
            }),
             (d.onerror = () => r(l)),
             (d.src = i));
           }, [e, n, t, a]),
           l
          );
         })(e.id, y, v, h)
       : null,
      x = i.useMemo(() => e.thumbnail || w || `https://i.ytimg.com/${y}/${e.playlist ? u : c}/${h}.${v}`, [e.thumbnail, w, y, e.playlist, u, c, h, v]),
      C = e.activatedClass || 'lyt-activated',
      S = e.adNetwork || !1,
      z = e.aspectHeight || 9,
      E = e.aspectWidth || 16,
      $ = e.iframeClass || '',
      R = e.playerClass || 'lty-playbtn',
      P = e.wrapperClass || 'yt-lite',
      D = i.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      _ = e.rel ? 'prefetch' : 'preload',
      L = e.containerElement || 'article',
      M = !1 !== e.noscriptFallback,
      I = () => {
       s || d(!0);
      };
     return (
      i.useEffect(() => {
       s && (D(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
      }, [s, D, e.focusOnLoad, n]),
      i.useEffect(() => {
       if (!s || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
       let t = !1,
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
          t || ((t = !0), e.onReady && e.onReady({ videoId: e.id, title: p }));
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
       const o = [],
        l = () => {
         'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
        },
        r = () => {
         a ||
          ((a = !0),
          l(),
          [100, 300, 600, 1200, 2400].forEach((e) => {
           o.push(setTimeout(l, e));
          }));
        };
       return (
        'object' == typeof n && n?.current
         ? (n.current.addEventListener('load', r), 'complete' === n.current.contentDocument?.readyState && r())
         : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
            o.push(setTimeout(l, e));
           }),
        () => {
         (window.removeEventListener('message', i), o.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', r));
        }
       );
      }, [s, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, p, n]),
      (0, a.jsxs)(a.Fragment, {
       children: [
        !e.lazyLoad && (0, a.jsx)('link', { rel: _, href: x, as: 'image' }),
        (0, a.jsx)(a.Fragment, { children: t && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: j }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), S && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: l(e.id, p, x, j, e.seo) } }),
        M && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
        (0, a.jsxs)(L, {
         onPointerOver: () => {
          t || r(!0);
         },
         onClick: I,
         className: `${P} ${s ? C : ''}`,
         'data-title': p,
         role: s || e.lazyLoad ? void 0 : 'img',
         'aria-label': s ? void 0 : `${p} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (z / E) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !s && (0, a.jsx)('img', { src: x, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !s && (0, a.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && s) && (0, a.jsx)('button', { type: 'button', className: R, 'aria-label': `${m} ${p}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, onClick: I, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: m }) }), s && (0, a.jsx)('iframe', { ref: n, className: $, title: p, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: f, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    s = ({ id: e, title: n, ...t }) => (0, a.jsx)(r, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...t });
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => r, RM: () => o });
   var a = t(86070),
    i = t(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, a.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
