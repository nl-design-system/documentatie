'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [77104],
 {
  7891(e, n, t) {
   t.d(n, { L: () => o });
   var a = t(20201);
   const r = { nl: { skipLink: 'Naar de inhoud', mainNavLabel: 'Hoofdmenu', footerNavLabel: 'Submenu', menu: 'Menu', close: 'Sluiten', open: 'Open', search: 'Zoeken', searchAriaLabel: 'Zoekterm', searchRequiredError: 'Dit veld is verplicht, maar het is niet ingevuld.', breadcrumbLabel: 'Kruimelpad', logoAlt: 'Logo van NL Design System', logoLinkAlt: 'Logo van NL Design System, naar de homepage', watch: 'Bekijk', subnavigation: 'subnavigatie' }, en: { skipLink: 'To main content', mainNavLabel: 'Main menu', footerNavLabel: 'Submenu', menu: 'Menu', close: 'Close', open: 'Open', search: 'Search', searchAriaLabel: 'Searchterm', searchRequiredError: 'This field is required, but it was left empty.', breadcrumbLabel: 'Breadcrumbs', logoAlt: 'Logo of NL Design System', logoLinkAlt: 'Logo of NL Design System, to the homepage', watch: 'Watch', subnavigation: 'subnavigation' } };
   var i = t(86070);
   const o = ({ id: e, title: n, lang: t = 'nl', ...o }) => (0, i.jsx)(a.Ay, { lazyLoad: !0, adNetwork: !1, announce: r[t].watch, cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...o });
  },
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => l });
   var a = t(30758);
   const r = {},
    i = a.createContext(r);
   function o(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), a.createElement(i.Provider, { value: n }, e.children));
   }
  },
  20201(e, n, t) {
   t.d(n, { Ay: () => l });
   var a = t(86070),
    r = t(30758);
   const i = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function o(e, n, t, a, r) {
    const i = { '@context': 'https://schema.org', '@type': 'VideoObject', name: r?.name || n, thumbnailUrl: [r?.thumbnailUrl || t], embedUrl: r?.embedUrl || `${a}/embed/${e}`, contentUrl: r?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(r?.description && { description: r.description }), ...(r?.uploadDate && { uploadDate: r.uploadDate }), ...(r?.duration && { duration: r.duration }) };
    return JSON.stringify(i);
   }
   const l = r.forwardRef(function (e, n) {
    const [t, l] = r.useState(!1),
     [s, d] = r.useState(e.alwaysLoadIframe || !1),
     c = encodeURIComponent(e.id),
     h = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     u = e.title,
     g = e.poster || 'hqdefault',
     p = e.announce || 'Watch',
     m = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     b = r.useMemo(() => {
      const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(m ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
         n.append(t, e);
        }),
       n
      );
     }, [e.muted, m, e.enableJsApi, e.playlist, c, e.params]),
     f = r.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     v = r.useMemo(() => (e.playlist ? `${f}/embed/videoseries?${b.toString()}` : `${f}/embed/${c}?${b.toString()}`), [e.playlist, f, c, b]),
     j = !e.thumbnail && !e.playlist && 'maxresdefault' === g,
     w = e.webp ? 'webp' : 'jpg',
     k = e.webp ? 'vi_webp' : 'vi',
     x = j
      ? ((e, n, t, a = 'maxresdefault') => {
         const [o, l] = (0, r.useState)('');
         return (
          (0, r.useEffect)(() => {
           const r = `https://img.youtube.com/${n}/${e}/${a}.${t}`,
            o = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
            s = i[a],
            d = new Image();
           ((d.onload = () => {
            d.width < s ? l(o) : l(r);
           }),
            (d.onerror = () => l(o)),
            (d.src = r));
          }, [e, n, t, a]),
          o
         );
        })(e.id, k, w, g)
      : null,
     y = r.useMemo(() => e.thumbnail || x || `https://i.ytimg.com/${k}/${e.playlist ? h : c}/${g}.${w}`, [e.thumbnail, x, k, e.playlist, h, c, g, w]),
     T = e.activatedClass || 'lyt-activated',
     A = e.adNetwork || !1,
     L = e.aspectHeight || 9,
     C = e.aspectWidth || 16,
     z = e.iframeClass || '',
     W = e.playerClass || 'lty-playbtn',
     N = e.wrapperClass || 'yt-lite',
     _ = r.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     R = e.rel ? 'prefetch' : 'preload',
     S = e.containerElement || 'article',
     E = !1 !== e.noscriptFallback,
     D = () => {
      s || d(!0);
     };
    return (
     r.useEffect(() => {
      s && (_(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
     }, [s, _, e.focusOnLoad, n]),
     r.useEffect(() => {
      if (!s || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
      let t = !1,
       a = !1;
      const r = (a) => {
       if ('https://www.youtube.com' !== a.origin && 'https://www.youtube-nocookie.com' !== a.origin) return;
       let r;
       try {
        r = 'string' == typeof a.data ? JSON.parse(a.data) : a.data;
       } catch {
        return;
       }
       switch (r.event) {
        case 'onReady':
         t || ((t = !0), e.onReady && e.onReady({ videoId: e.id, title: u }));
         break;
        case 'infoDelivery':
         if (void 0 !== r.info?.playerState) {
          const t = r.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: r.info.currentTime, duration: r.info.duration }), t)) {
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
         (void 0 !== r.info?.playbackRate && e.onPlaybackRateChange?.(r.info.playbackRate), void 0 !== r.info?.playbackQuality && e.onPlaybackQualityChange?.(r.info.playbackQuality));
         break;
        case 'onStateChange':
         if (void 0 !== r.info?.playerState) {
          const t = r.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: r.info.currentTime, duration: r.info.duration }), t)) {
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
         if (r.info && 'errorCode' in r.info) {
          const n = r.info.errorCode;
          e.onError && e.onError(n);
         }
         break;
        case 'onPlaybackRateChange':
         void 0 !== r.info?.playbackRate && e.onPlaybackRateChange?.(r.info.playbackRate);
         break;
        case 'onPlaybackQualityChange':
         void 0 !== r.info?.playbackQuality && e.onPlaybackQualityChange?.(r.info.playbackQuality);
       }
      };
      window.addEventListener('message', r);
      const i = [],
       o = () => {
        'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
       },
       l = () => {
        a ||
         ((a = !0),
         o(),
         [100, 300, 600, 1200, 2400].forEach((e) => {
          i.push(setTimeout(o, e));
         }));
       };
      return (
       'object' == typeof n && n?.current
        ? (n.current.addEventListener('load', l), 'complete' === n.current.contentDocument?.readyState && l())
        : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
           i.push(setTimeout(o, e));
          }),
       () => {
        (window.removeEventListener('message', r), i.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', l));
       }
      );
     }, [s, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, u, n]),
     (0, a.jsxs)(a.Fragment, {
      children: [
       !e.lazyLoad && (0, a.jsx)('link', { rel: R, href: y, as: 'image' }),
       (0, a.jsx)(a.Fragment, { children: t && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: f }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), A && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: o(e.id, u, y, f, e.seo) } }),
       E && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
       (0, a.jsxs)(S, {
        onPointerOver: () => {
         t || l(!0);
        },
        onClick: D,
        className: `${N} ${s ? T : ''}`,
        'data-title': u,
        role: s || e.lazyLoad ? void 0 : 'img',
        'aria-label': s ? void 0 : `${u} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${y})` }), '--aspect-ratio': (L / C) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !s && (0, a.jsx)('img', { src: y, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !s && (0, a.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && s) && (0, a.jsx)('button', { type: 'button', className: W, 'aria-label': `${p} ${u}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, onClick: D, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: p }) }), s && (0, a.jsx)('iframe', { ref: n, className: z, title: u, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: v, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  24703(e, n, t) {
   t.d(n, { o: () => c });
   var a = t(18439),
    r = t(46447),
    i = t(86070);
   const o = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: a, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return t + a + r;
     }
     return t.toString();
    },
    l = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    s = (e) => ({ img: ({ src: n, ...t }) => (0, i.jsx)('img', { ...t, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: r = '', components: o = {} }) => (0, i.jsx)(a.x, { components: { ...d(n, t), ...s(r), ...o }, children: e });
  },
  25431(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => i });
   var a = t(86070),
    r = t(18439);
   const i = [];
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, a.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(o, { ...e }) }) : o(e);
   }
  },
  28470(e, n, t) {
   (t.r(n), t.d(n, { assets: () => b, contentTitle: () => m, default: () => j, frontMatter: () => p, metadata: () => a, toc: () => f }));
   const a = JSON.parse('{"id":"wcag/3.1.02","title":"WCAG-succescriterium 3.1.2 Taal van onderdelen","description":"Als je pagina tekst bevat in een andere taal dan de hoofdtaal, geef dit dan aan. Dit kan door in het html-element waarbinnen de tekst staat het attribuut \u2018lang\u2019 mee te geven.","source":"@site/docs/wcag/3.1.02.mdx","sourceDirName":"wcag","slug":"/wcag/3.1.2","permalink":"/wcag/3.1.2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.1.02.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 3.1.2 Taal van onderdelen","title_sm":"WCAG 3.1.2: Taal van onderdelen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3.1.2 Taal van onderdelen","pagination_label":"WCAG-succescriterium 3.1.2 Taal van onderdelen","description":"Als je pagina tekst bevat in een andere taal dan de hoofdtaal, geef dit dan aan. Dit kan door in het html-element waarbinnen de tekst staat het attribuut \u2018lang\u2019 mee te geven.","slug":"3.1.2","conformance_level":"Niveau AA","keywords":["WCAG","AA","begrijpelijk","leesbaar","understandable","readable","language of parts"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 3.1.1 Taal van de pagina","permalink":"/wcag/3.1.1"},"next":{"title":"WCAG-succescriterium 3.1.3 Ongebruikelijke woorden","permalink":"/wcag/3.1.3"}}');
   var r = t(86070),
    i = t(18439),
    o = t(24703),
    l = t(7891),
    s = t(61473),
    d = t(93681),
    c = t(25431),
    h = t(88275),
    u = t(29882),
    g = t(80598);
   const p = { title: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', title_sm: 'WCAG 3.1.2: Taal van onderdelen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.1.2 Taal van onderdelen', pagination_label: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', description: 'Als je pagina tekst bevat in een andere taal dan de hoofdtaal, geef dit dan aan. Dit kan door in het html-element waarbinnen de tekst staat het attribuut \u2018lang\u2019 mee te geven.', slug: '3.1.2', conformance_level: 'Niveau AA', keywords: ['WCAG', 'AA', 'begrijpelijk', 'leesbaar', 'understandable', 'readable', 'language of parts'] },
    m = void 0,
    b = {},
    f = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, ...g.RM, { value: 'Demo taalwisseling met VoiceOver', id: 'demo-taalwisseling-met-voiceover', level: 3 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 }, { value: 'Fout: Ontbrekend lang-attribuut', id: 'fout-ontbrekend-lang-attribuut', level: 3 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }];
   function v(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(s.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 3.1.2 Taal van onderdelen' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(g.Ay, {}), '\n', (0, r.jsx)(n.p, { children: 'Geef wisseling van de taal aan waarin de tekst van elke passage of zin is geschreven. Als er in de tekst woorden of zinnen voorkomen in een andere taal dan die van de webpagina, brengt markering van die taal hulpmiddelen op de hoogte. Dit kan door in het HTML-element waarbinnen deze tekst staat het attribuut \u2018lang\u2019 mee te geven.' }), '\n', (0, r.jsx)(n.p, { children: 'Dan wordt tekst in die andere taal correct uitgesproken en daardoor beter te begrijpen voor gebruikers die de website laten voorlezen, bijvoorbeeld door screenreaders.' }), '\n', (0, r.jsx)(n.p, { children: 'Er is een uitzondering voor eigennamen, technische termen, woorden in een onbekende taal, en woorden of zinsdelen die deel uitmaken van het jargon van de omliggende tekst.' }), '\n', (0, r.jsxs)(n.p, { children: ['Met het ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut breng je over welke taal (een deel van) je tekst heeft. Dan kunnen hulptechnologie\xebn als screenreaders of vertaalsoftware daarop handelen. In het geval van screenreaders bijvoorbeeld door de tekst met de juiste stem voor te lezen.'] }), '\n', (0, r.jsx)(n.p, { children: 'Of de juiste stem ook echt wordt gebruikt is afhankelijk van de instellingen van de gebruikte screenreader.' }), '\n', (0, r.jsxs)(n.p, { children: ['Bijvoorbeeld ', (0, r.jsx)(n.code, { children: '<p lang="en">Not all those who wander are lost.</p>' }), ' voor een zin in het Engels, in een verder Nederlandse tekst.'] }), '\n', (0, r.jsx)(n.p, { children: 'Of voor een taalwisselmenu:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<ul>\n  <li><a href="url" lang="nl">Nederlands</a></li>\n  <li><a href="url" lang="en">English</a></li>\n  <li><a href="url" lang="de">Deutsch</a></li>\n  <li><a href="url" lang="it">Italiano</a></li>\n  <li><a href="url" lang="fr">Fran\xe7ais</a></li>\n</ul>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Bij het WCAG-succescriterium ', (0, r.jsx)(n.a, { href: '/wcag/3.1.1/', children: '3.1.1 Taal van de pagina' }), ' staat uitgelegd hoe deze lang-code is samengesteld en wat geldige waarden zijn.'] }), '\n', (0, r.jsx)(n.h3, { id: 'demo-taalwisseling-met-voiceover', children: 'Demo taalwisseling met VoiceOver' }), '\n', (0, r.jsxs)(n.p, { children: ['In deze video hoor je hoe de screenreader VoiceOver wisselt van stem en taal voor teksten die met het ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut zijn gemarkeerd.'] }), '\n', (0, r.jsx)(l.L, { id: '2UAjJ_5nxqw', title: 'Demo taalwisseling met VoiceOver' }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Content: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.matuzo.at/blog/lang-attribute', children: (0, r.jsx)('span', { lang: 'en', children: 'The lang attribute: browsers telling lies, telling sweet little lies' }) }), ' van Manuel Matuzovi\u0107 over de problemen met het automatisch vertalen met Google Translate.'] }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://r12a.github.io/app-subtags/', children: (0, r.jsx)('span', { lang: 'en', children: 'Language subtag lookup' }) }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang', children: (0, r.jsxs)('span', { lang: 'en', children: [(0, r.jsx)(n.code, { children: 'lang' }), '-attribuut op MDN'] }) }) }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.w3.org/International/articles/language-tags/index.en', children: (0, r.jsx)('span', { lang: 'en', children: 'Language tags in HTML and XML' }) }), ' van het W3C.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(c.Ay, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Lees de tekst van de pagina en bepaal of er tekst in een andere taal dan die van de webpagina aanwezig is.' }), '\n', (0, r.jsxs)(n.p, { children: ['Inspecteer de gegenereerde HTML-code van die teksten, bijvoorbeeld met een ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.\nIs het HTML-element, dat de tekst in een andere taal bevat, aangeduid met een ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut en heeft de taalcode een geldige waarde?'] }), '\n', (0, r.jsx)(n.p, { children: 'Staat er op een website een taalwisselmenu? Controleer bij de verschillende talen of ook de waarde van het lang-attribuut goed is ingesteld.' }), '\n', (0, r.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, r.jsx)(n.h3, { id: 'fout-ontbrekend-lang-attribuut', children: 'Fout: Ontbrekend lang-attribuut' }), '\n', (0, r.jsx)(n.p, { children: 'Het kan zijn dat het CMS wat je gebruikt geen mogelijkheid geeft om een taalwisseling aan te geven. Dan zul je dit zelf in de HTML-code moeten aangeven.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zo biedt WordPress standaard geen taalwissel-optie aan voor onderdelen van tekst. Whodunit ontwikkelde daarom de plugin ', (0, r.jsx)(n.a, { href: 'https://wordpress.org/plugins/lang-attribute/', children: 'Lang Attribute for the Block Editor' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#language-of-parts', children: (0, r.jsx)('span', { lang: 'en', children: '3.1.2 Language of Parts' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#language-of-parts', children: '3.1.2 Taal van onderdelen' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#language-of-page', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 3.1.2 Language of Parts' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-page', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 3.1.2: Language of Parts' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(d.K, { children: (0, r.jsx)(o.o, { omitH1: !0, headingLevel: 3, content: h.Ay }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(o.o, { omitH1: !0, headingLevel: 3, content: u.Ay })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
  },
  29882(e, n, t) {
   t.d(n, { Ay: () => o });
   var a = t(86070),
    r = t(18439);
   function i(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, a.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  46276(e, n, t) {
   t.d(n, { p: () => i });
   var a = t(13526),
    r = t(86070);
   const i = ({ children: e, className: n, level: t = 1, suffix: i, ...o }) => (0, r.jsxs)('hgroup', { className: (0, a.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  61473(e, n, t) {
   t.d(n, { E: () => o });
   var a = t(46447),
    r = t(46276),
    i = t(86070);
   const o = ({ children: e, conformanceLevel: n, ...t }) => (globalThis.isAstro ? null : (0, i.jsx)(r.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, i.jsx)(a.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...t, children: e }));
  },
  80598(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => i });
   var a = t(86070),
    r = t(18439);
   const i = [];
   function o(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.p, { children: ['Geef wisseling van de taal aan waarin de tekst van elke passage of zin is geschreven. Als er in de tekst woorden of zinnen voorkomen in een andere taal dan die van de webpagina, brengt markering van die taal hulpmiddelen op de hoogte. Dit kan door in het HTML-element waarbinnen deze tekst staat het attribuut ', (0, a.jsx)(n.code, { children: 'lang' }), ' mee te geven.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Dan wordt tekst in die andere taal correct uitgesproken en daardoor beter te begrijpen voor gebruikers die de website laten voorlezen, bijvoorbeeld door ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '.'] }), '\n', (0, a.jsx)(n.p, { children: 'Er is een uitzondering voor eigennamen, technische termen, woorden in een onbekende taal, en woorden of zinsdelen die deel uitmaken van het jargon van de omliggende tekst.' }), '\n', (0, a.jsxs)(n.p, { children: ['Met het ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut breng je over welke taal (een deel van) je tekst heeft. Dan kunnen hulptechnologie\xebn als screenreaders of vertaalsoftware daarop handelen. In het geval van screenreaders bijvoorbeeld door de tekst met de juiste stem voor te lezen.'] }), '\n', (0, a.jsx)(n.p, { children: 'Of de juiste stem ook echt wordt gebruikt is afhankelijk van de instellingen van de gebruikte screenreader.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(o, { ...e }) }) : o(e);
   }
  },
  88275(e, n, t) {
   t.d(n, { Ay: () => o });
   var a = t(86070),
    r = t(18439);
   function i(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, a.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, a.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  88547(e, n, t) {
   t.d(n, { L: () => o });
   var a = t(86070);
   function r(e) {
    var n,
     t,
     a = '';
    if ('string' == typeof e || 'number' == typeof e) a += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var i = e.length;
      for (n = 0; n < i; n++) e[n] && (t = r(e[n])) && (a && (a += ' '), (a += t));
     } else for (t in e) e[t] && (a && (a += ' '), (a += t));
    return a;
   }
   function i() {
    for (var e, n, t = 0, a = '', i = arguments.length; t < i; t++) (e = arguments[t]) && (n = r(e)) && (a && (a += ' '), (a += n));
    return a;
   }
   const o = (0, t(30758).forwardRef)(({ aside: e, children: n, className: t, purpose: r, ...o }, l) => {
    const s = { ...o, ref: l, className: i('utrecht-note', { [`utrecht-note--${r}`]: r }, t) };
    return e ? (0, a.jsx)('aside', { ...s, children: n }) : (0, a.jsx)('section', { role: 'note', ...s, children: n });
   });
   o.displayName = 'Note';
  },
  93681(e, n, t) {
   t.d(n, { K: () => i });
   var a = t(88547),
    r = t(29181);
   const i = globalThis.isAstro ? a.L : r.K7;
  },
 },
]);
