'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5211],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var i = t(52676),
    l = t(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  52720: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => d, default: () => f, frontMatter: () => c, metadata: () => u, toc: () => h });
   var i = t(52676),
    l = t(40139),
    r = t(66968),
    s = t(97233);
   function a(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', pre: 'pre', ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'legends-bij-een-fieldset', children: 'Legends bij een fieldset' }), '\n', (0, i.jsxs)(n.p, { children: ['Een ', (0, i.jsx)(n.code, { children: '<legend>' }), ' dient als de naam van de groep. ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' lezen deze legend voor bij elk invoerveld in de fieldset (groep), zodat deze koppeling ook duidelijk is zonder de visuele informatie.'] }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.code, { children: '<legend>Uw adresgegevens</legend>' }) }), '\n', (0, i.jsx)(n.p, { children: 'Maak de inhoud van de legend kort en omschrijvend.' }), '\n', (0, i.jsx)(n.p, { children: 'In onderstaande video leest VoiceOver in Safari drie verschillende fieldsets voor, een groep met keuzerondjes (radio buttons) en een bezorg- en factuuradres. De legend wordt steeds bij het formulierveld voorgelezen.\nVoiceOver leest de legend twee keer voor bij het eerste veld van een groep, dit is een bug van VoiceOver.' }), '\n', (0, i.jsx)(s.Y, { videoId: 'WMa7LToyZVc' }), '\n', (0, i.jsx)(n.h2, { id: 'koppen-in-een-legend', children: 'Koppen in een legend' }), '\n', (0, i.jsxs)(n.p, { children: ['Een fieldset kan ook een kopje bevatten. Zorg er wel voor dat het niveau van deze kopjes klopt in de ', (0, i.jsx)('a', { href: 'https://www.a11yproject.com/posts/how-to-accessible-heading-structure/', children: 'hi\xebrarchische koppenstructuur' }), ' van de hele pagina.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<fieldset>\n  <legend><h3>Bezorgadres<h3></legend>\n    <label for="shipping-street">Straat en huisnummer</label>\n    <input type="text" name="shipping-street" id="shipping-street" autocomplete="shipping address-line1">\n    <label for="shipping-postal-code">Postcode</label>\n    <input type="text" name="shipping-postal-code" id="shipping-postal-code" autocomplete="shipping postal-code"></div>\n    <label for="shipping-city">Stad</label>\n    <input type="text" name="shipping-city" id="shipping-city" autocomplete="shipping address-level2">\n</fieldset>\n\n<fieldset>\n  <legend><h3>Factuuradres<h3></legend>\n    <label for="billing-street">Straat en huisnummer</label>\n    <input type="text" name="shipping-street" id="billing-street" autocomplete="billing address-line1">\n    <label for="billing-postal-code">Postcode</label>\n    <input type="text" name="billing-postal-code" id="billing-postal-code" autocomplete="billing postal-code">\n    <label for="billing-city">Stad</label>\n    <input type="text" name="billing-city" id="billing-city" autocomplete=" billingaddress-level2">\n</fieldset>\n' }) })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
   const c = { title: 'Legends \xb7 Fieldsets \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Legends in een fieldset', pagination_label: 'Legends in een fieldset', description: 'Richtlijnen voor legends in een fieldset in een formulier.', slug: '/richtlijnen/formulieren/fieldsets/legends', keywords: ['labels', 'formulier', 'design', 'code'] },
    d = void 0,
    u = { id: 'richtlijnen/formulieren/fieldset/legend/README', title: 'Legends \xb7 Fieldsets \xb7 Richtlijnen', description: 'Richtlijnen voor legends in een fieldset in een formulier.', source: '@site/docs/richtlijnen/formulieren/fieldset/1-legend/README.mdx', sourceDirName: 'richtlijnen/formulieren/fieldset/1-legend', slug: '/richtlijnen/formulieren/fieldsets/legends', permalink: '/richtlijnen/formulieren/fieldsets/legends', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/fieldset/1-legend/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Legends \xb7 Fieldsets \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Legends in een fieldset', pagination_label: 'Legends in een fieldset', description: 'Richtlijnen voor legends in een fieldset in een formulier.', slug: '/richtlijnen/formulieren/fieldsets/legends', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Fieldsets', permalink: '/richtlijnen/formulieren/fieldsets/' }, next: { title: 'Descriptions in een fieldset', permalink: '/richtlijnen/formulieren/fieldsets/descriptions' } },
    p = {},
    h = [];
   function m(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(o, {}), '\n', (0, i.jsx)(r.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m();
   }
  },
  97233: (e, n, t) => {
   t.d(n, { Y: () => s });
   var i = t(4814),
    l = t(46686),
    r = t(52676);
   const s = (e) => {
    let { videoId: n, className: t } = e;
    return (0, r.jsx)(l.Z, { src: `https://youtube.com/watch?v=${n}`, className: (0, i.Z)('video-player', t), width: '100%', height: '100%', controls: !0, config: { youtube: { disablekb: 1 } } });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => s });
   var i = t(75271);
   const l = {},
    r = i.createContext(l);
   function s(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
  46686: (e, n, t) => {
   t.d(n, { Z: () => E });
   var i = t(75271);
   const l = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
    r = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
    s = /\.(m3u8)($|\?)/i,
    a = /\.(mpd)($|\?)/i,
    o = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
    c = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
    d = /vimeo\.com\/(?!progressive_redirect).+/,
    u = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
    p = /open\.spotify\.com\/(\w+)\/(\w+)/i,
    h = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
    m = /tiktok\.com\/(?:@[^/]+\/video\/)?(\d+)(?:\/([\w-]+))?/,
    f = (e, n) => {
     if (Array.isArray(e)) {
      for (const t of e) {
       if ('string' == typeof t && f(t, n)) return !0;
       if (f(t.src, n)) return !0;
      }
      return !1;
     }
     return n(e);
    },
    g = { html: (e) => f(e, (e) => l.test(e) || r.test(e)), hls: (e) => f(e, (e) => s.test(e)), dash: (e) => f(e, (e) => a.test(e)), mux: (e) => o.test(e), youtube: (e) => c.test(e), vimeo: (e) => d.test(e) && !r.test(e) && !s.test(e), wistia: (e) => u.test(e), spotify: (e) => p.test(e), twitch: (e) => h.test(e), tiktok: (e) => m.test(e) };
   var y = i.forwardRef((e, n) => {
    const t = l.test(`${e.src}`) ? 'audio' : 'video';
    return i.createElement(t, { ...e, ref: n }, e.children);
   });
   var b = [
    { key: 'hls', name: 'hls.js', canPlay: g.hls, canEnablePIP: () => !0, player: (0, i.lazy)(() => Promise.all([t.e(29177), t.e(53184)]).then(t.bind(t, 99823))) },
    { key: 'dash', name: 'dash.js', canPlay: g.dash, canEnablePIP: () => !0, player: (0, i.lazy)(() => t.e(78443).then(t.bind(t, 67177))) },
    { key: 'mux', name: 'Mux', canPlay: g.mux, canEnablePIP: () => !0, player: (0, i.lazy)(() => Promise.all([t.e(29177), t.e(64258)]).then(t.bind(t, 74486))) },
    { key: 'youtube', name: 'YouTube', canPlay: g.youtube, player: (0, i.lazy)(() => t.e(64439).then(t.bind(t, 21489))) },
    { key: 'vimeo', name: 'Vimeo', canPlay: g.vimeo, player: (0, i.lazy)(() => t.e(73743).then(t.bind(t, 20667))) },
    { key: 'wistia', name: 'Wistia', canPlay: g.wistia, canEnablePIP: () => !0, player: (0, i.lazy)(() => t.e(88055).then(t.bind(t, 51820))) },
    { key: 'spotify', name: 'Spotify', canPlay: g.spotify, canEnablePIP: () => !1, player: (0, i.lazy)(() => t.e(41954).then(t.bind(t, 37949))) },
    { key: 'twitch', name: 'Twitch', canPlay: g.twitch, canEnablePIP: () => !1, player: (0, i.lazy)(() => t.e(86216).then(t.bind(t, 1997))) },
    { key: 'tiktok', name: 'TikTok', canPlay: g.tiktok, canEnablePIP: () => !1, player: (0, i.lazy)(() => t.e(34491).then(t.bind(t, 51102))) },
    { key: 'html', name: 'html', canPlay: g.html, canEnablePIP: () => !0, player: y },
   ];
   const v = { width: '320px', height: '180px', volume: 1, playbackRate: 1, previewTabIndex: 0, previewAriaLabel: '', oEmbedUrl: 'https://noembed.com/embed?url={url}' },
    j = i.forwardRef((e, n) => {
     const { playing: t, pip: l } = e,
      r = e.activePlayer,
      s = (0, i.useRef)(null),
      a = (0, i.useRef)(!0);
     (0, i.useEffect)(() => {
      var n, i;
      s.current && (s.current.paused && !0 === t && s.current.play(), s.current.paused || !1 !== t || s.current.pause(), (s.current.playbackRate = null != (n = e.playbackRate) ? n : 1), (s.current.volume = null != (i = e.volume) ? i : 1));
     }),
      (0, i.useEffect)(() => {
       var e, n, t, i, r;
       if (s.current && globalThis.document) {
        if (l && !document.pictureInPictureElement)
         try {
          null == (n = (e = s.current).requestPictureInPicture) || n.call(e);
         } catch (a) {}
        if (!l && document.pictureInPictureElement)
         try {
          null == (i = (t = s.current).exitPictureInPicture) || i.call(t), null == (r = document.exitPictureInPicture) || r.call(document);
         } catch (a) {}
       }
      }, [l]);
     if (!r) return null;
     const o = {};
     for (const i in e) i.startsWith('on') && (o[i] = e[i]);
     return i.createElement(
      r,
      {
       ...o,
       style: e.style,
       className: e.className,
       slot: e.slot,
       ref: (0, i.useCallback)(
        (e) => {
         (s.current = e), 'function' == typeof n ? n(e) : null !== n && (n.current = e);
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
        var t, i;
        (a.current = !0), null == (t = e.onReady) || t.call(e), null == (i = e.onLoadStart) || i.call(e, n);
       },
       onPlay: (n) => {
        var t, i;
        a.current && ((a.current = !1), null == (t = e.onStart) || t.call(e, n)), null == (i = e.onPlay) || i.call(e, n);
       },
      },
      e.children,
     );
    });
   j.displayName = 'Player';
   var w = j;
   const P = (0, i.lazy)(() => t.e(87664).then(t.bind(t, 79240))),
    k = [],
    x = ({ children: e }) => e;
   var E = ((e, n) => {
    const t = i.forwardRef((t, l) => {
     const r = { ...v, ...t },
      { src: s, slot: a, className: o, style: c, width: d, height: u, fallback: p, wrapper: h } = r,
      [m, f] = (0, i.useState)(!!r.light);
     (0, i.useEffect)(() => {
      r.light ? f(!0) : f(!1);
     }, [r.light]);
     const g = (e) => {
       var n;
       f(!1), null == (n = r.onClickPreview) || n.call(r, e);
      },
      y = null == h ? x : h,
      b = !1 === p ? x : i.Suspense;
     return i.createElement(
      y,
      { slot: a, className: o, style: { width: d, height: u, ...c } },
      i.createElement(
       b,
       { fallback: p },
       m
        ? ((e) => {
           if (!e) return null;
           const { light: n, playIcon: t, previewTabIndex: l, oEmbedUrl: s, previewAriaLabel: a } = r;
           return i.createElement(P, { src: e, light: n, playIcon: t, previewTabIndex: l, previewAriaLabel: a, oEmbedUrl: s, onClickPreview: g });
          })(s)
        : ((t) => {
           var s, c;
           const d = ((t) => {
            for (const n of [...k, ...e]) if (t && n.canPlay(t)) return n;
            return n || null;
           })(t);
           if (!d) return null;
           const { style: u, width: p, height: h, wrapper: m } = r,
            f = null == (s = r.config) ? void 0 : s[d.key];
           return i.createElement(w, { ...r, ref: l, activePlayer: null != (c = d.player) ? c : d, slot: m ? void 0 : a, className: m ? void 0 : o, style: m ? { display: 'block', width: '100%', height: '100%' } : { display: 'block', width: p, height: h, ...u }, config: f });
          })(s),
      ),
     );
    });
    return (
     (t.displayName = 'ReactPlayer'),
     (t.addCustomPlayer = (e) => {
      k.push(e);
     }),
     (t.removeCustomPlayers = () => {
      k.length = 0;
     }),
     (t.canPlay = (n) => {
      if (n) for (const t of [...k, ...e]) if (t.canPlay(n)) return !0;
      return !1;
     }),
     (t.canEnablePIP = (n) => {
      var t;
      if (n) for (const i of [...k, ...e]) if (i.canPlay(n) && (null == (t = i.canEnablePIP) ? void 0 : t.call(i))) return !0;
      return !1;
     }),
     t
    );
   })(b, b[b.length - 1]);
  },
 },
]);
