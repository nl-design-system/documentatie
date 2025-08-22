'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [84391],
 {
  53021: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => i, default: () => m, frontMatter: () => l, metadata: () => c, toc: () => u });
   var a = n(52676),
    o = n(40139),
    r = n(97233);
   const l = { title: 'Component inzetten \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Component inzetten', pagination_label: 'Component inzetten', description: 'Bestaand component inzetten', keywords: ['developer', 'bijdragen', 'component gebruiken'] },
    i = 'Bestaand component inzetten',
    c = { id: 'handboek/developer/component-inzetten', title: 'Component inzetten \xb7 Developer \xb7 Handboek', description: 'Bestaand component inzetten', source: '@site/docs/handboek/developer/05-component-inzetten.mdx', sourceDirName: 'handboek/developer', slug: '/handboek/developer/component-inzetten', permalink: '/handboek/developer/component-inzetten', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/05-component-inzetten.mdx', tags: [], version: 'current', sidebarPosition: 5, frontMatter: { title: 'Component inzetten \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Component inzetten', pagination_label: 'Component inzetten', description: 'Bestaand component inzetten', keywords: ['developer', 'bijdragen', 'component gebruiken'] }, sidebar: 'handboek', previous: { title: 'Component kiezen', permalink: '/handboek/developer/samenwerken-aan-componenten' }, next: { title: 'Component uitbreiden', permalink: '/handboek/developer/component-uitbreiden' } },
    s = {},
    u = [];
   function d(e) {
    const t = { h1: 'h1', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: 'bestaand-component-inzetten', children: 'Bestaand component inzetten' }), '\n', (0, a.jsx)(t.p, { children: 'We hebben een opname van de onboarding-week 2021 waarin we vertellen over het gebruiken van bestaande componenten uit de community:' }), '\n', (0, a.jsx)(r.Y, { videoId: '7P6YUT3pmi8' })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, o.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
   }
  },
  97233: (e, t, n) => {
   n.d(t, { Y: () => l });
   var a = n(4814),
    o = n(46686),
    r = n(52676);
   const l = (e) => {
    let { videoId: t, className: n } = e;
    return (0, r.jsx)(o.Z, { src: `https://youtube.com/watch?v=${t}`, className: (0, a.Z)('video-player', n), width: '100%', height: '100%', controls: !0, config: { youtube: { disablekb: 1 } } });
   };
  },
  40139: (e, t, n) => {
   n.d(t, { Z: () => i, a: () => l });
   var a = n(75271);
   const o = {},
    r = a.createContext(o);
   function l(e) {
    const t = a.useContext(r);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function i(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : l(e.components)), a.createElement(r.Provider, { value: t }, e.children);
   }
  },
  46686: (e, t, n) => {
   n.d(t, { Z: () => E });
   var a = n(75271);
   const o = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
    r = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
    l = /\.(m3u8)($|\?)/i,
    i = /\.(mpd)($|\?)/i,
    c = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
    s = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
    u = /vimeo\.com\/(?!progressive_redirect).+/,
    d = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
    m = /open\.spotify\.com\/(\w+)\/(\w+)/i,
    p = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
    y = /tiktok\.com\/(?:@[^/]+\/video\/)?(\d+)(?:\/([\w-]+))?/,
    h = (e, t) => {
     if (Array.isArray(e)) {
      for (const n of e) {
       if ('string' == typeof n && h(n, t)) return !0;
       if (h(n.src, t)) return !0;
      }
      return !1;
     }
     return t(e);
    },
    b = { html: (e) => h(e, (e) => o.test(e) || r.test(e)), hls: (e) => h(e, (e) => l.test(e)), dash: (e) => h(e, (e) => i.test(e)), mux: (e) => c.test(e), youtube: (e) => s.test(e), vimeo: (e) => u.test(e) && !r.test(e) && !l.test(e), wistia: (e) => d.test(e), spotify: (e) => m.test(e), twitch: (e) => p.test(e), tiktok: (e) => y.test(e) };
   var v = a.forwardRef((e, t) => {
    const n = o.test(`${e.src}`) ? 'audio' : 'video';
    return a.createElement(n, { ...e, ref: t }, e.children);
   });
   var f = [
    { key: 'hls', name: 'hls.js', canPlay: b.hls, canEnablePIP: () => !0, player: (0, a.lazy)(() => Promise.all([n.e(29177), n.e(53184)]).then(n.bind(n, 99823))) },
    { key: 'dash', name: 'dash.js', canPlay: b.dash, canEnablePIP: () => !0, player: (0, a.lazy)(() => n.e(78443).then(n.bind(n, 67177))) },
    { key: 'mux', name: 'Mux', canPlay: b.mux, canEnablePIP: () => !0, player: (0, a.lazy)(() => Promise.all([n.e(29177), n.e(64258)]).then(n.bind(n, 74486))) },
    { key: 'youtube', name: 'YouTube', canPlay: b.youtube, player: (0, a.lazy)(() => n.e(64439).then(n.bind(n, 21489))) },
    { key: 'vimeo', name: 'Vimeo', canPlay: b.vimeo, player: (0, a.lazy)(() => n.e(73743).then(n.bind(n, 20667))) },
    { key: 'wistia', name: 'Wistia', canPlay: b.wistia, canEnablePIP: () => !0, player: (0, a.lazy)(() => n.e(88055).then(n.bind(n, 51820))) },
    { key: 'spotify', name: 'Spotify', canPlay: b.spotify, canEnablePIP: () => !1, player: (0, a.lazy)(() => n.e(41954).then(n.bind(n, 37949))) },
    { key: 'twitch', name: 'Twitch', canPlay: b.twitch, canEnablePIP: () => !1, player: (0, a.lazy)(() => n.e(86216).then(n.bind(n, 1997))) },
    { key: 'tiktok', name: 'TikTok', canPlay: b.tiktok, canEnablePIP: () => !1, player: (0, a.lazy)(() => n.e(34491).then(n.bind(n, 51102))) },
    { key: 'html', name: 'html', canPlay: b.html, canEnablePIP: () => !0, player: v },
   ];
   const k = { width: '320px', height: '180px', volume: 1, playbackRate: 1, previewTabIndex: 0, previewAriaLabel: '', oEmbedUrl: 'https://noembed.com/embed?url={url}' },
    P = a.forwardRef((e, t) => {
     const { playing: n, pip: o } = e,
      r = e.activePlayer,
      l = (0, a.useRef)(null),
      i = (0, a.useRef)(!0);
     (0, a.useEffect)(() => {
      var t, a;
      l.current && (l.current.paused && !0 === n && l.current.play(), l.current.paused || !1 !== n || l.current.pause(), (l.current.playbackRate = null != (t = e.playbackRate) ? t : 1), (l.current.volume = null != (a = e.volume) ? a : 1));
     }),
      (0, a.useEffect)(() => {
       var e, t, n, a, r;
       if (l.current && globalThis.document) {
        if (o && !document.pictureInPictureElement)
         try {
          null == (t = (e = l.current).requestPictureInPicture) || t.call(e);
         } catch (i) {}
        if (!o && document.pictureInPictureElement)
         try {
          null == (a = (n = l.current).exitPictureInPicture) || a.call(n), null == (r = document.exitPictureInPicture) || r.call(document);
         } catch (i) {}
       }
      }, [o]);
     if (!r) return null;
     const c = {};
     for (const a in e) a.startsWith('on') && (c[a] = e[a]);
     return a.createElement(
      r,
      {
       ...c,
       style: e.style,
       className: e.className,
       slot: e.slot,
       ref: (0, a.useCallback)(
        (e) => {
         (l.current = e), 'function' == typeof t ? t(e) : null !== t && (t.current = e);
        },
        [t],
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
       onLoadStart: (t) => {
        var n, a;
        (i.current = !0), null == (n = e.onReady) || n.call(e), null == (a = e.onLoadStart) || a.call(e, t);
       },
       onPlay: (t) => {
        var n, a;
        i.current && ((i.current = !1), null == (n = e.onStart) || n.call(e, t)), null == (a = e.onPlay) || a.call(e, t);
       },
      },
      e.children,
     );
    });
   P.displayName = 'Player';
   var w = P;
   const g = (0, a.lazy)(() => n.e(87664).then(n.bind(n, 79240))),
    z = [],
    x = ({ children: e }) => e;
   var E = ((e, t) => {
    const n = a.forwardRef((n, o) => {
     const r = { ...k, ...n },
      { src: l, slot: i, className: c, style: s, width: u, height: d, fallback: m, wrapper: p } = r,
      [y, h] = (0, a.useState)(!!r.light);
     (0, a.useEffect)(() => {
      r.light ? h(!0) : h(!1);
     }, [r.light]);
     const b = (e) => {
       var t;
       h(!1), null == (t = r.onClickPreview) || t.call(r, e);
      },
      v = null == p ? x : p,
      f = !1 === m ? x : a.Suspense;
     return a.createElement(
      v,
      { slot: i, className: c, style: { width: u, height: d, ...s } },
      a.createElement(
       f,
       { fallback: m },
       y
        ? ((e) => {
           if (!e) return null;
           const { light: t, playIcon: n, previewTabIndex: o, oEmbedUrl: l, previewAriaLabel: i } = r;
           return a.createElement(g, { src: e, light: t, playIcon: n, previewTabIndex: o, previewAriaLabel: i, oEmbedUrl: l, onClickPreview: b });
          })(l)
        : ((n) => {
           var l, s;
           const u = ((n) => {
            for (const t of [...z, ...e]) if (n && t.canPlay(n)) return t;
            return t || null;
           })(n);
           if (!u) return null;
           const { style: d, width: m, height: p, wrapper: y } = r,
            h = null == (l = r.config) ? void 0 : l[u.key];
           return a.createElement(w, { ...r, ref: o, activePlayer: null != (s = u.player) ? s : u, slot: y ? void 0 : i, className: y ? void 0 : c, style: y ? { display: 'block', width: '100%', height: '100%' } : { display: 'block', width: m, height: p, ...d }, config: h });
          })(l),
      ),
     );
    });
    return (
     (n.displayName = 'ReactPlayer'),
     (n.addCustomPlayer = (e) => {
      z.push(e);
     }),
     (n.removeCustomPlayers = () => {
      z.length = 0;
     }),
     (n.canPlay = (t) => {
      if (t) for (const n of [...z, ...e]) if (n.canPlay(t)) return !0;
      return !1;
     }),
     (n.canEnablePIP = (t) => {
      var n;
      if (t) for (const a of [...z, ...e]) if (a.canPlay(t) && (null == (n = a.canEnablePIP) ? void 0 : n.call(a))) return !0;
      return !1;
     }),
     n
    );
   })(f, f[f.length - 1]);
  },
 },
]);
