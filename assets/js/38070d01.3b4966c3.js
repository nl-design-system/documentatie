'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [57576],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => r });
   var a = t(52676),
    l = t(40139);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, a.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  86408: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => o, default: () => m, frontMatter: () => s, metadata: () => d, toc: () => u });
   var a = t(52676),
    l = t(40139),
    i = t(97233),
    r = t(66968);
   const s = { title: 'Taal instellen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'De juiste taal instellen', pagination_label: 'De juiste taal instellen', description: 'Geef aan welke taal wordt gebruikt in de pagina of als deze anders is voor een deel van de pagina.', slug: '/richtlijnen/content/tekstopmaak/taal', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'taal'] },
    o = 'De juiste taal instellen',
    d = { id: 'richtlijnen/content/tekstopmaak/language', title: 'Taal instellen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', description: 'Geef aan welke taal wordt gebruikt in de pagina of als deze anders is voor een deel van de pagina.', source: '@site/docs/richtlijnen/content/tekstopmaak/language.md', sourceDirName: 'richtlijnen/content/tekstopmaak', slug: '/richtlijnen/content/tekstopmaak/taal', permalink: '/richtlijnen/content/tekstopmaak/taal', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/language.md', tags: [], version: 'current', frontMatter: { title: 'Taal instellen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'De juiste taal instellen', pagination_label: 'De juiste taal instellen', description: 'Geef aan welke taal wordt gebruikt in de pagina of als deze anders is voor een deel van de pagina.', slug: '/richtlijnen/content/tekstopmaak/taal', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'taal'] }, sidebar: 'richtlijnen', previous: { title: 'Koppen', permalink: '/richtlijnen/content/tekstopmaak/koppen' }, next: { title: 'Toegankelijke linkteksten', permalink: '/richtlijnen/content/tekstopmaak/linkteksten' } },
    c = {},
    u = [
     { value: 'Voorbeeld van taalwisseling met een screenreader', id: 'voorbeeld-van-taalwisseling-met-een-screenreader', level: 3 },
     { value: 'Taal van de pagina', id: 'taal-van-de-pagina', level: 2 },
     { value: 'Een stukje tekst in een andere taal', id: 'een-stukje-tekst-in-een-andere-taal', level: 2 },
     { value: 'Als je het niet kunt instellen', id: 'als-je-het-niet-kunt-instellen', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, l.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'de-juiste-taal-instellen', children: 'De juiste taal instellen' }), '\n', (0, a.jsx)(n.p, { children: 'Voor de toegankelijkheid van je content is het belangrijk dat de gebruikte taal goed is ingesteld. Dat geldt voor de hele pagina \xe9n stukken tekst in een andere taal.' }), '\n', (0, a.jsxs)(n.p, { children: ['Het instellen van de juiste taal is belangrijk omdat hulptechnologie\xebn, zoals ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' of vertaalhulpmiddelen, afhankelijk zijn van die informatie.'] }), '\n', (0, a.jsx)(n.p, { children: 'Als de taal niet goed is ingesteld:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'spreekt een screenreader woorden verkeerd uit;' }), '\n', (0, a.jsx)(n.li, { children: 'worden automatische vertalingen onduidelijk of fout;' }), '\n', (0, a.jsx)(n.li, { children: 'is de inhoud minder toegankelijk voor mensen die de taal niet vloeiend beheersen.' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Door de taal goed aan te geven, help je dus mensen die je content anders niet goed kunnen gebruiken of begrijpen.' }), '\n', (0, a.jsx)(n.h3, { id: 'voorbeeld-van-taalwisseling-met-een-screenreader', children: 'Voorbeeld van taalwisseling met een screenreader' }), '\n', (0, a.jsx)(n.p, { children: 'In deze video hoor je hoe de screenreader VoiceOver wisselt van stem en taal voor teksten waarvan de taal is ingesteld.' }), '\n', (0, a.jsx)(i.Y, { videoId: '2UAjJ_5nxqw' }), '\n', (0, a.jsx)(n.h2, { id: 'taal-van-de-pagina', children: 'Taal van de pagina' }), '\n', (0, a.jsx)(n.p, { children: 'Elke webpagina heeft een hoofdtaal. Die moet overeenkomen met de taal waarin de tekst op die pagina is geschreven.' }), '\n', (0, a.jsx)(n.p, { children: 'In sommige CMS\u2019en kun je de paginataal zelf instellen \u2014 bijvoorbeeld via de pagina-instellingen of bij het aanmaken van een nieuwe pagina. In andere gevallen is die vooraf ingesteld of wordt automatisch bepaald.' }), '\n', (0, a.jsx)(n.h2, { id: 'een-stukje-tekst-in-een-andere-taal', children: 'Een stukje tekst in een andere taal' }), '\n', (0, a.jsx)(n.p, { children: 'Gebruik je in je tekst een woord of zin in een andere taal dan de rest van de pagina? Geef dan aan dat dit stukje tekst in een andere taal is geschreven. Bijvoorbeeld bij Engelse termen (call to action), Franse citaten of Duitstalige namen.' }), '\n', (0, a.jsx)(n.p, { children: 'Stel alleen een taalwissel in als het woord nog niet is ingeburgerd in de hoofdtaal. Voor woorden die wel onderdeel zijn geworden van de hoofdtaal (denk bijvoorbeeld aan \xfcberhaupt, enfin en management) hoef je geen taalwissel in te stellen.' }), '\n', (0, a.jsx)(n.p, { children: 'In sommige CMS\u2019en kun je dit instellen via een opmaakoptie of een taalkeuze bij een tekstblok.' }), '\n', (0, a.jsx)(n.h2, { id: 'als-je-het-niet-kunt-instellen', children: 'Als je het niet kunt instellen' }), '\n', (0, a.jsx)(n.p, { children: 'Kun je de paginataal of de taal van een tekstblok niet vinden in je CMS? Ga dan na of je CMS deze mogelijkheid biedt. Is dat niet zo, of kun je het niet zelf aanpassen? Dan kun je uitzoeken wie dat w\xe9l kan of dit aankaarten bij de partij die het CMS beheert of levert.' }), '\n', (0, a.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, a.jsx)(n.p, { children: 'Lees je pagina rustig door en let op of er stukken tekst zijn in een andere taal dan de rest. Controleer het volgende:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Is de juiste taal ingesteld voor de hele pagina?\nBekijk de pagina-instellingen in het CMS. Klopt de gekozen taal met de hoofdtaal van de inhoud?' }), '\n', (0, a.jsx)(n.li, { children: 'Staan er woorden of zinnen in een andere taal?\nBijvoorbeeld Engelse termen, Franse uitdrukkingen of citaten in een andere taal. Vraag jezelf bij elk geval af:\nIs dit als andere taal gemarkeerd in het CMS?' }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/3.1.1/', children: 'Succescriterium 3.1.1 Taal van de pagina' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/3.1.2/', children: 'Succescriterium 3.1.2 Taal van onderdelen' }) }), '\n'] }), '\n', (0, a.jsx)(r.ZP, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(h, { ...e }) }) : h(e);
   }
  },
  97233: (e, n, t) => {
   t.d(n, { Y: () => r });
   var a = t(4814),
    l = t(46686),
    i = t(52676);
   const r = (e) => {
    let { videoId: n, className: t } = e;
    return (0, i.jsx)(l.Z, { src: `https://youtube.com/watch?v=${n}`, className: (0, a.Z)('video-player', t), width: '100%', height: '100%', controls: !0, config: { youtube: { disablekb: 1 } } });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => r });
   var a = t(75271);
   const l = {},
    i = a.createContext(l);
   function r(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), a.createElement(i.Provider, { value: n }, e.children);
   }
  },
  46686: (e, n, t) => {
   t.d(n, { Z: () => z });
   var a = t(75271);
   const l = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
    i = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
    r = /\.(m3u8)($|\?)/i,
    s = /\.(mpd)($|\?)/i,
    o = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
    d = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
    c = /vimeo\.com\/(?!progressive_redirect).+/,
    u = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
    h = /open\.spotify\.com\/(\w+)\/(\w+)/i,
    m = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
    p = /tiktok\.com\/(?:@[^/]+\/video\/)?(\d+)(?:\/([\w-]+))?/,
    k = (e, n) => {
     if (Array.isArray(e)) {
      for (const t of e) {
       if ('string' == typeof t && k(t, n)) return !0;
       if (k(t.src, n)) return !0;
      }
      return !1;
     }
     return n(e);
    },
    g = { html: (e) => k(e, (e) => l.test(e) || i.test(e)), hls: (e) => k(e, (e) => r.test(e)), dash: (e) => k(e, (e) => s.test(e)), mux: (e) => o.test(e), youtube: (e) => d.test(e), vimeo: (e) => c.test(e) && !i.test(e) && !r.test(e), wistia: (e) => u.test(e), spotify: (e) => h.test(e), twitch: (e) => m.test(e), tiktok: (e) => p.test(e) };
   var v = a.forwardRef((e, n) => {
    const t = l.test(`${e.src}`) ? 'audio' : 'video';
    return a.createElement(t, { ...e, ref: n }, e.children);
   });
   var j = [
    { key: 'hls', name: 'hls.js', canPlay: g.hls, canEnablePIP: () => !0, player: (0, a.lazy)(() => Promise.all([t.e(29177), t.e(53184)]).then(t.bind(t, 99823))) },
    { key: 'dash', name: 'dash.js', canPlay: g.dash, canEnablePIP: () => !0, player: (0, a.lazy)(() => t.e(78443).then(t.bind(t, 67177))) },
    { key: 'mux', name: 'Mux', canPlay: g.mux, canEnablePIP: () => !0, player: (0, a.lazy)(() => Promise.all([t.e(29177), t.e(64258)]).then(t.bind(t, 74486))) },
    { key: 'youtube', name: 'YouTube', canPlay: g.youtube, player: (0, a.lazy)(() => t.e(64439).then(t.bind(t, 21489))) },
    { key: 'vimeo', name: 'Vimeo', canPlay: g.vimeo, player: (0, a.lazy)(() => t.e(73743).then(t.bind(t, 20667))) },
    { key: 'wistia', name: 'Wistia', canPlay: g.wistia, canEnablePIP: () => !0, player: (0, a.lazy)(() => t.e(88055).then(t.bind(t, 51820))) },
    { key: 'spotify', name: 'Spotify', canPlay: g.spotify, canEnablePIP: () => !1, player: (0, a.lazy)(() => t.e(41954).then(t.bind(t, 37949))) },
    { key: 'twitch', name: 'Twitch', canPlay: g.twitch, canEnablePIP: () => !1, player: (0, a.lazy)(() => t.e(86216).then(t.bind(t, 1997))) },
    { key: 'tiktok', name: 'TikTok', canPlay: g.tiktok, canEnablePIP: () => !1, player: (0, a.lazy)(() => t.e(34491).then(t.bind(t, 51102))) },
    { key: 'html', name: 'html', canPlay: g.html, canEnablePIP: () => !0, player: v },
   ];
   const f = { width: '320px', height: '180px', volume: 1, playbackRate: 1, previewTabIndex: 0, previewAriaLabel: '', oEmbedUrl: 'https://noembed.com/embed?url={url}' },
    b = a.forwardRef((e, n) => {
     const { playing: t, pip: l } = e,
      i = e.activePlayer,
      r = (0, a.useRef)(null),
      s = (0, a.useRef)(!0);
     (0, a.useEffect)(() => {
      var n, a;
      r.current && (r.current.paused && !0 === t && r.current.play(), r.current.paused || !1 !== t || r.current.pause(), (r.current.playbackRate = null != (n = e.playbackRate) ? n : 1), (r.current.volume = null != (a = e.volume) ? a : 1));
     }),
      (0, a.useEffect)(() => {
       var e, n, t, a, i;
       if (r.current && globalThis.document) {
        if (l && !document.pictureInPictureElement)
         try {
          null == (n = (e = r.current).requestPictureInPicture) || n.call(e);
         } catch (s) {}
        if (!l && document.pictureInPictureElement)
         try {
          null == (a = (t = r.current).exitPictureInPicture) || a.call(t), null == (i = document.exitPictureInPicture) || i.call(document);
         } catch (s) {}
       }
      }, [l]);
     if (!i) return null;
     const o = {};
     for (const a in e) a.startsWith('on') && (o[a] = e[a]);
     return a.createElement(
      i,
      {
       ...o,
       style: e.style,
       className: e.className,
       slot: e.slot,
       ref: (0, a.useCallback)(
        (e) => {
         (r.current = e), 'function' == typeof n ? n(e) : null !== n && (n.current = e);
        },
        [n],
       ),
       src: e.src,
       crossOrigin: e.crossOrigin,
       preload: e.preload,
       controls: e.controls,
       muted: e.muted,
       autoPlay: e.autoPlay,
       loop: e.loop,
       playsInline: e.playsInline,
       config: e.config,
       onLoadStart: (n) => {
        var t, a;
        (s.current = !0), null == (t = e.onReady) || t.call(e), null == (a = e.onLoadStart) || a.call(e, n);
       },
       onPlay: (n) => {
        var t, a;
        s.current && ((s.current = !1), null == (t = e.onStart) || t.call(e, n)), null == (a = e.onPlay) || a.call(e, n);
       },
      },
      e.children,
     );
    });
   b.displayName = 'Player';
   var y = b;
   const w = (0, a.lazy)(() => t.e(87664).then(t.bind(t, 79240))),
    x = [],
    P = ({ children: e }) => e;
   var z = ((e, n) => {
    const t = a.forwardRef((t, l) => {
     const i = { ...f, ...t },
      { src: r, slot: s, className: o, style: d, width: c, height: u, fallback: h, wrapper: m } = i,
      [p, k] = (0, a.useState)(!!i.light);
     (0, a.useEffect)(() => {
      i.light ? k(!0) : k(!1);
     }, [i.light]);
     const g = (e) => {
       var n;
       k(!1), null == (n = i.onClickPreview) || n.call(i, e);
      },
      v = null == m ? P : m,
      j = !1 === h ? P : a.Suspense;
     return a.createElement(
      v,
      { slot: s, className: o, style: { width: c, height: u, ...d } },
      a.createElement(
       j,
       { fallback: h },
       p
        ? ((e) => {
           if (!e) return null;
           const { light: n, playIcon: t, previewTabIndex: l, oEmbedUrl: r, previewAriaLabel: s } = i;
           return a.createElement(w, { src: e, light: n, playIcon: t, previewTabIndex: l, previewAriaLabel: s, oEmbedUrl: r, onClickPreview: g });
          })(r)
        : ((t) => {
           var r, d;
           const c = ((t) => {
            for (const n of [...x, ...e]) if (t && n.canPlay(t)) return n;
            return n || null;
           })(t);
           if (!c) return null;
           const { style: u, width: h, height: m, wrapper: p } = i,
            k = null == (r = i.config) ? void 0 : r[c.key];
           return a.createElement(y, { ...i, ref: l, activePlayer: null != (d = c.player) ? d : c, slot: p ? void 0 : s, className: p ? void 0 : o, style: p ? { display: 'block', width: '100%', height: '100%' } : { display: 'block', width: h, height: m, ...u }, config: k });
          })(r),
      ),
     );
    });
    return (
     (t.displayName = 'ReactPlayer'),
     (t.addCustomPlayer = (e) => {
      x.push(e);
     }),
     (t.removeCustomPlayers = () => {
      x.length = 0;
     }),
     (t.canPlay = (n) => {
      if (n) for (const t of [...x, ...e]) if (t.canPlay(n)) return !0;
      return !1;
     }),
     (t.canEnablePIP = (n) => {
      var t;
      if (n) for (const a of [...x, ...e]) if (a.canPlay(n) && (null == (t = a.canEnablePIP) ? void 0 : t.call(a))) return !0;
      return !1;
     }),
     t
    );
   })(j, j[j.length - 1]);
  },
 },
]);
