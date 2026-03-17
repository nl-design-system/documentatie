'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [38187],
 {
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => r });
   var a = t(30758);
   const o = {},
    i = a.createContext(o);
   function s(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), a.createElement(i.Provider, { value: n }, e.children));
   }
  },
  68809(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => g, frontMatter: () => r, metadata: () => a, toc: () => c }));
   const a = JSON.parse('{"id":"handboek/developer/design-tokens/thema-maken","title":"Design tokens vastleggen","description":"NL Design System Design tokens vastleggen","source":"@site/docs/handboek/developer/04-design-tokens/02-thema-maken.mdx","sourceDirName":"handboek/developer/04-design-tokens","slug":"/handboek/developer/thema-maken/","permalink":"/handboek/developer/thema-maken/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/04-design-tokens/02-thema-maken.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Design tokens vastleggen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Design tokens vastleggen","pagination_label":"Design tokens vastleggen","description":"NL Design System Design tokens vastleggen","slug":"/handboek/developer/thema-maken/"},"sidebar":"handboek","previous":{"title":"Design tokens","permalink":"/handboek/developer/design-tokens/"},"next":{"title":"Infrastructuur","permalink":"/handboek/developer/infrastructuur/"}}');
   var o = t(86070),
    i = t(18439),
    s = t(73058);
   const r = { title: 'Design tokens vastleggen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Design tokens vastleggen', pagination_label: 'Design tokens vastleggen', description: 'NL Design System Design tokens vastleggen', slug: '/handboek/developer/thema-maken/' },
    l = 'Design tokens vastleggen',
    d = {},
    c = [
     { value: 'Algemeen', id: 'algemeen', level: 2 },
     { value: 'Componenten en variabelen', id: 'componenten-en-variabelen', level: 2 },
     { value: 'Meer over design tokens vastleggen', id: 'meer-over-design-tokens-vastleggen', level: 2 },
     { value: 'Design tokens inzetten', id: 'design-tokens-inzetten', level: 2 },
    ];
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'design-tokens-vastleggen', children: 'Design tokens vastleggen' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Zoals beschreven in ', (0, o.jsx)(n.a, { href: '/handboek/developer/aan-de-slag/#ontwikkel-een-thema-voor-jouw-organisatie', children: 'Ontwikkel een thema voor jouw organisatie' }), ": thema's zijn technisch JSON-bestanden waarin design tokens zijn gedefinieerd. Met tooling maken we ze beschikbaar als custom properties in CSS."] }), '\n', (0, o.jsx)(n.p, { children: 'Design tokens kunnen allerlei ontwerpkeuzes bevatten: kleuren, lettergroottes, afstanden en meer. Om een thema te maken vanuit een bestaande website en/of huisstijl maken we vaak een inventarisatie, met als einddoel \xe9\xe9n of meer JSON-bestanden.' }), '\n', (0, o.jsx)(n.h2, { id: 'algemeen', children: 'Algemeen' }), '\n', (0, o.jsxs)(n.p, { children: ['Meestal begint een inventarisatie bij de kleuren. Bij een bestaande site kan dat bijvoorbeeld door individuele kleuren met de developer tools te inspecteren. Met een tool als ', (0, o.jsx)(n.a, { href: 'https://www.projectwallace.com/', children: 'Project Wallace' }), ' kun je in \xe9\xe9n keer de kleuren (en meer) uit een pagina in een overzicht krijgen.'] }), '\n', (0, o.jsx)(n.p, { children: 'Dat hoeft niet altijd \xe9\xe9n op \xe9\xe9n. Soms valt dan op dat sommige kleuren wel erg dicht bij elkaar liggen, dan kan bijvoorbeeld de meest voorkomende gekozen worden en de rest afgerond worden, de afwijking is dan vast eerder een foutje dan een keuze.' }), '\n', (0, o.jsxs)(n.p, { children: ['Het kan ook zijn dat er duidelijk meerdere varianten zijn van \xe9\xe9n kleur, bijvoorbeeld drie tinten rood. Je kunt tokens noemen hoe je wilt, het is vaak handig om er iets van een systeem in aan te brengen. Soms kan dat uit een huisstijlgids worden overgenomen. Als er geen bestaand systeem is in de namen, kun je ook de kleurwaarde naar ', (0, o.jsx)(n.a, { href: 'https://hslpicker.com', children: 'HSL' }), ' converteren en dan de lightness gebruiken (de \u201cL\u201d uit \u201cHSL\u201d), zodat je bv met ', (0, o.jsx)(n.code, { children: 'rood-30' }), ', ', (0, o.jsx)(n.code, { children: 'rood-50' }), ' en ', (0, o.jsx)(n.code, { children: 'rood-70' }), '. Rond gerust af op hele getallen.'] }), '\n', (0, o.jsxs)(n.p, { children: ['De kleuren zetten we uiteindelijk in een JSON-bestand (in het ', (0, o.jsx)(n.a, { href: 'https://tr.designtokens.org/format/', children: 'Design Tokens Format' }), '):'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-json', metastring: 'title="colors.tokens.json"', children: '{\n  "organisatie": {\n    "color": {\n      "red": {\n        "30": { "value": "#911808" },\n        "50": { "value": "#f2280d" },\n        "70": { "value": "#f77e6e" }\n      }\n    }\n  }\n}\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Dat bestand kan bijvoorbeeld zo in de filestructuur staan:' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-txt', children: '\u251c\u2500 src\n  \u251c\u2500 brand\n    \u251c\u2500 organisatie\n      \u251c\u2500 colors.tokens.json\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Binnen NL Design System gebruiken we ook design tokens voor andere designkeuzes, waaronder:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'typografie (lettertypes, groottes en gewichten)' }), '\n', (0, o.jsx)(n.li, { children: 'spacing' }), '\n', (0, o.jsx)(n.li, { children: 'focus styles' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'componenten-en-variabelen', children: 'Componenten en variabelen' }), '\n', (0, o.jsxs)(n.p, { children: ['Als de algemene tokens zijn gemaakt, kan er ook per component een bestand met tokens worden toegevoegd, waarin ook naar de andere beschikbare tokens kan worden verwezen, zelfs in andere organisaties. In het volgende voorbeeld wordt bijvoorbeeld in de tokens voor de ', (0, o.jsx)(n.code, { children: 'link' }), ' component van ', (0, o.jsx)(n.code, { children: 'organisatie' }), ' verwezen naar een kleur rood van ', (0, o.jsx)(n.code, { children: 'andereOrganisatie' }), ', met de verwijzing in curly brackets:'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-json', metastring: 'title="link.tokens.json"', children: '{\n  "organisatie": {\n    "link": {\n      "color": { "value": "{andereOrganisatie.color.red.45}" }\n    }\n  }\n}\n' }) }), '\n', (0, o.jsx)(n.h2, { id: 'meer-over-design-tokens-vastleggen', children: 'Meer over design tokens vastleggen' }), '\n', (0, o.jsx)(s.L, { id: 'jSvjnU7oY5Y', title: 'Meer over design tokens vastleggen' }), '\n', (0, o.jsx)(n.h2, { id: 'design-tokens-inzetten', children: 'Design tokens inzetten' }), '\n', (0, o.jsxs)(n.p, { children: ['Zoals genoemd kunnen deze JSON-bestanden in allerlei toepassingen worden gebruikt. Bij NL Design System zorgt ', (0, o.jsx)(n.a, { href: 'https://styledictionary.com', children: 'Style Dictionary' }), ' dat de tokens bruikbaar worden in CSS, door een ', (0, o.jsx)(n.code, { children: 'design-tokens.css' }), ' te genereren. Die output kan er bijvoorbeeld zo uit zien:'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', metastring: 'title="dist/design-tokens.css"', children: '/**\n  * Do not edit directly\n  * Generated at [\u2026]\n  */\n.organisatie-theme {\n  --organisatie-color-red-30: #911808;\n  --organisatie-color-red-50: #f2280d;\n  --organisatie-color-red-70: #f77e6e;\n}\n' }) }), '\n', (0, o.jsxs)(n.p, { children: ["In dit bestand worden alle tokens die in het theme van deze organisatie bestaan vanuit verschillende plekken bij elkaar gezet, als custom properties. Nu kunnen ze in de CSS van deze organisatie worden gebruikt, op pagina's waar de ", (0, o.jsx)(n.code, { children: 'organisatie-theme' }), ' classname op de body staat. Er is ook een output setting waar de variabelen op ', (0, o.jsx)(n.code, { children: ':root' }), ' worden geplaatst, voor als de HTML niet makkelijk aanpasbaar is.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: 'https://github.com/amzn/style-dictionary/tree/main/examples/advanced/referencing_aliasing', children: 'Referencing/aliasing' }), ' is de feature in Style Dictionary die zorgt dat tokens als variabele kunnen worden ingezet, zoals we in het vorige voorbeeld deden met tokens uit een andere organisatie. In de NL Design System configuratie worden alle tokenbestanden meegenomen (met ', (0, o.jsx)(n.code, { children: '**/*' }), '). Ook worden de gebruikte verwijzingen opgenomen als verwijzingen naar CSS, wat extra handig is in het geval van updates.'] }), '\n', (0, o.jsx)(n.p, { children: 'Meer weten over werken met design tokens? In onderstaande video vertelt Yolijn meer over uitbreiden van bestaande design tokens met jouw designkeuzes.' }), '\n', (0, o.jsx)(s.L, { id: '-guAi7Lvl6g', title: 'Werken met design tokens' })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
  },
  73058(e, n, t) {
   t.d(n, { L: () => l });
   var a = t(86070),
    o = t(30758);
   const i = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function s(e, n, t, a, o) {
    const i = { '@context': 'https://schema.org', '@type': 'VideoObject', name: o?.name || n, thumbnailUrl: [o?.thumbnailUrl || t], embedUrl: o?.embedUrl || `${a}/embed/${e}`, contentUrl: o?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(o?.description && { description: o.description }), ...(o?.uploadDate && { uploadDate: o.uploadDate }), ...(o?.duration && { duration: o.duration }) };
    return JSON.stringify(i);
   }
   const r = o.forwardRef(function (e, n) {
     const [t, r] = o.useState(!1),
      [l, d] = o.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      u = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      g = e.title,
      h = e.poster || 'hqdefault',
      p = e.announce || 'Watch',
      m = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      k = o.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(m ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
          n.append(t, e);
         }),
        n
       );
      }, [e.muted, m, e.enableJsApi, e.playlist, c, e.params]),
      b = o.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      v = o.useMemo(() => (e.playlist ? `${b}/embed/videoseries?${k.toString()}` : `${b}/embed/${c}?${k.toString()}`), [e.playlist, b, c, k]),
      f = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
      y = e.webp ? 'webp' : 'jpg',
      j = e.webp ? 'vi_webp' : 'vi',
      w = f
       ? ((e, n, t, a = 'maxresdefault') => {
          const [s, r] = (0, o.useState)('');
          return (
           (0, o.useEffect)(() => {
            const o = `https://img.youtube.com/${n}/${e}/${a}.${t}`,
             s = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
             l = i[a],
             d = new Image();
            ((d.onload = () => {
             d.width < l ? r(s) : r(o);
            }),
             (d.onerror = () => r(s)),
             (d.src = o));
           }, [e, n, t, a]),
           s
          );
         })(e.id, j, y, h)
       : null,
      x = o.useMemo(() => e.thumbnail || w || `https://i.ytimg.com/${j}/${e.playlist ? u : c}/${h}.${y}`, [e.thumbnail, w, j, e.playlist, u, c, h, y]),
      S = e.activatedClass || 'lyt-activated',
      z = e.adNetwork || !1,
      C = e.aspectHeight || 9,
      D = e.aspectWidth || 16,
      L = e.iframeClass || '',
      $ = e.playerClass || 'lty-playbtn',
      E = e.wrapperClass || 'yt-lite',
      N = o.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      P = e.rel ? 'prefetch' : 'preload',
      R = e.containerElement || 'article',
      _ = !1 !== e.noscriptFallback,
      O = () => {
       l || d(!0);
      };
     return (
      o.useEffect(() => {
       l && (N(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
      }, [l, N, e.focusOnLoad, n]),
      o.useEffect(() => {
       if (!l || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
       let t = !1,
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
          t || ((t = !0), e.onReady && e.onReady({ videoId: e.id, title: g }));
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
       const i = [],
        s = () => {
         'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
        },
        r = () => {
         a ||
          ((a = !0),
          s(),
          [100, 300, 600, 1200, 2400].forEach((e) => {
           i.push(setTimeout(s, e));
          }));
        };
       return (
        'object' == typeof n && n?.current
         ? (n.current.addEventListener('load', r), 'complete' === n.current.contentDocument?.readyState && r())
         : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
            i.push(setTimeout(s, e));
           }),
        () => {
         (window.removeEventListener('message', o), i.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', r));
        }
       );
      }, [l, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, g, n]),
      (0, a.jsxs)(a.Fragment, {
       children: [
        !e.lazyLoad && (0, a.jsx)('link', { rel: P, href: x, as: 'image' }),
        (0, a.jsx)(a.Fragment, { children: t && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: b }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), z && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: s(e.id, g, x, b, e.seo) } }),
        _ && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${g} on YouTube`, children: ['Watch "', g, '" on YouTube'] }) }),
        (0, a.jsxs)(R, {
         onPointerOver: () => {
          t || r(!0);
         },
         onClick: O,
         className: `${E} ${l ? S : ''}`,
         'data-title': g,
         role: l || e.lazyLoad ? void 0 : 'img',
         'aria-label': l ? void 0 : `${g} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (C / D) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !l && (0, a.jsx)('img', { src: x, alt: `${g} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !l && (0, a.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && l) && (0, a.jsx)('button', { type: 'button', className: $, 'aria-label': `${p} ${g}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, onClick: O, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: p }) }), l && (0, a.jsx)('iframe', { ref: n, className: L, title: g, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: v, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    l = ({ id: e, title: n, ...t }) => (0, a.jsx)(r, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...t });
  },
 },
]);
