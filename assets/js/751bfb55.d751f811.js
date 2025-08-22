'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [67064],
 {
  4017: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => s, default: () => u, frontMatter: () => o, metadata: () => l, toc: () => c });
   var a = t(52676),
    i = t(40139),
    r = t(97233);
   const o = { title: 'Thema maken \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thema maken', pagination_label: 'Thema maken', description: 'NL Design System thema maken' },
    s = 'NL Design System thema maken',
    l = { id: 'handboek/developer/thema-maken', title: 'Thema maken \xb7 Developer \xb7 Handboek', description: 'NL Design System thema maken', source: '@site/docs/handboek/developer/03-thema-maken.mdx', sourceDirName: 'handboek/developer', slug: '/handboek/developer/thema-maken', permalink: '/handboek/developer/thema-maken', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/03-thema-maken.mdx', tags: [], version: 'current', sidebarPosition: 3, frontMatter: { title: 'Thema maken \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thema maken', pagination_label: 'Thema maken', description: 'NL Design System thema maken' }, sidebar: 'handboek', previous: { title: 'Architectuur', permalink: '/handboek/developer/architectuur' }, next: { title: 'Component kiezen', permalink: '/handboek/developer/samenwerken-aan-componenten' } },
    d = {},
    c = [
     { value: 'Design tokens vastleggen', id: 'design-tokens-vastleggen', level: 2 },
     { value: 'Algemeen', id: 'algemeen', level: 3 },
     { value: 'Componenten en variabelen', id: 'componenten-en-variabelen', level: 3 },
     { value: 'Meer over design tokens vastleggen', id: 'meer-over-design-tokens-vastleggen', level: 3 },
     { value: 'Design tokens inzetten', id: 'design-tokens-inzetten', level: 2 },
     { value: 'Werken met design tokens', id: 'werken-met-design-tokens', level: 3 },
    ];
   function m(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'nl-design-system-thema-maken', children: 'NL Design System thema maken' }), '\n', (0, a.jsxs)(n.p, { children: ['Zoals beschreven in ', (0, a.jsx)(n.a, { href: '/handboek/developer/aan-de-slag/#ontwikkel-een-thema-voor-jouw-organisatie', children: 'Ontwikkel een thema voor jouw organisatie' }), ": thema's zijn technisch JSON-bestanden waarin design tokens zijn gedefinieerd. Met tooling maken we ze beschikbaar als custom properties in CSS."] }), '\n', (0, a.jsx)(n.h2, { id: 'design-tokens-vastleggen', children: 'Design tokens vastleggen' }), '\n', (0, a.jsx)(n.p, { children: 'Design tokens kunnen allerlei ontwerpkeuzes bevatten: kleuren, lettergroottes, afstanden en meer. Om een thema te maken vanuit een bestaande website en/of huisstijl maken we vaak een inventarisatie, met als einddoel \xe9\xe9n of meer JSON-bestanden.' }), '\n', (0, a.jsx)(n.h3, { id: 'algemeen', children: 'Algemeen' }), '\n', (0, a.jsxs)(n.p, { children: ['Meestal begint een inventarisatie bij de kleuren. Bij een bestaande site kan dat bijvoorbeeld door individuele kleuren met de developer tools te inspecteren. Met een tool als ', (0, a.jsx)(n.a, { href: 'https://www.projectwallace.com/', children: 'Project Wallace' }), ' kun je in \xe9\xe9n keer de kleuren (en meer) uit een pagina in een overzicht krijgen.'] }), '\n', (0, a.jsx)(n.p, { children: 'Dat hoeft niet altijd \xe9\xe9n op \xe9\xe9n. Soms valt dan op dat sommige kleuren wel erg dicht bij elkaar liggen, dan kan bijvoorbeeld de meest voorkomende gekozen worden en de rest afgerond worden, de afwijking is dan vast eerder een foutje dan een keuze.' }), '\n', (0, a.jsxs)(n.p, { children: ['Het kan ook zijn dat er duidelijk meerdere varianten zijn van \xe9\xe9n kleur, bijvoorbeeld drie tinten rood. Je kunt tokens noemen hoe je wilt, het is vaak handig om er iets van een systeem in aan te brengen. Soms kan dat uit een huisstijlgids worden overgenomen. Als er geen bestaand systeem is in de namen, kun je ook de kleurwaarde naar ', (0, a.jsx)(n.a, { href: 'https://hslpicker.com', children: 'HSL' }), ' converteren en dan de lightness gebruiken (de \u201cL\u201d uit \u201cHSL\u201d), zodat je bv met ', (0, a.jsx)(n.code, { children: 'rood-30' }), ', ', (0, a.jsx)(n.code, { children: 'rood-50' }), ' en ', (0, a.jsx)(n.code, { children: 'rood-70' }), '. Rond gerust af op hele getallen.'] }), '\n', (0, a.jsxs)(n.p, { children: ['De kleuren zetten we uiteindelijk in een JSON-bestand (in het ', (0, a.jsx)(n.a, { href: 'https://tr.designtokens.org/format/', children: 'Design Tokens Format' }), '):'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-json', metastring: 'title="colors.tokens.json"', children: '{\n  "organisatie": {\n    "color": {\n      "red": {\n        "30": { "value": "#911808" },\n        "50": { "value": "#f2280d" },\n        "70": { "value": "#f77e6e" }\n      }\n    }\n  }\n}\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Dat bestand kan bijvoorbeeld zo in de filestructuur staan:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-txt', children: '\u251c\u2500 src\n  \u251c\u2500 brand\n    \u251c\u2500 organisatie\n      \u251c\u2500 colors.tokens.json\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Binnen NL Design System gebruiken we ook design tokens voor andere designkeuzes, waaronder:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'typografie (lettertypes, groottes en gewichten)' }), '\n', (0, a.jsx)(n.li, { children: 'spacing' }), '\n', (0, a.jsx)(n.li, { children: 'focus styles' }), '\n'] }), '\n', (0, a.jsx)(n.h3, { id: 'componenten-en-variabelen', children: 'Componenten en variabelen' }), '\n', (0, a.jsxs)(n.p, { children: ['Als de algemene tokens zijn gemaakt, kan er ook per component een bestand met tokens worden toegevoegd, waarin ook naar de andere beschikbare tokens kan worden verwezen, zelfs in andere organisaties. In het volgende voorbeeld wordt bijvoorbeeld in de tokens voor de ', (0, a.jsx)(n.code, { children: 'link' }), ' component van ', (0, a.jsx)(n.code, { children: 'organisatie' }), ' verwezen naar een kleur rood van ', (0, a.jsx)(n.code, { children: 'andereOrganisatie' }), ', met de verwijzing in curly brackets:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-json', metastring: 'title="link.tokens.json"', children: '{\n  "organisatie": {\n    "link": {\n      "color": { "value": "{andereOrganisatie.color.red.45}" }\n    }\n  }\n}\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'meer-over-design-tokens-vastleggen', children: 'Meer over design tokens vastleggen' }), '\n', (0, a.jsx)(r.Y, { videoId: 'jSvjnU7oY5Y' }), '\n', (0, a.jsx)(n.h2, { id: 'design-tokens-inzetten', children: 'Design tokens inzetten' }), '\n', (0, a.jsxs)(n.p, { children: ['Zoals genoemd kunnen deze JSON-bestanden in allerlei toepassingen worden gebruikt. Bij NL Design System zorgt ', (0, a.jsx)(n.a, { href: 'https://amzn.github.io/style-dictionary', children: 'Style Dictionary' }), ' dat de tokens bruikbaar worden in CSS, door een ', (0, a.jsx)(n.code, { children: 'design-tokens.css' }), ' te genereren. Die output kan er bijvoorbeeld zo uit zien:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', metastring: 'title="dist/design-tokens.css"', children: '/**\n  * Do not edit directly\n  * Generated at [\u2026]\n  */\n.organisatie-theme {\n  --organisatie-color-red-30: #911808;\n  --organisatie-color-red-50: #f2280d;\n  --organisatie-color-red-70: #f77e6e;\n}\n' }) }), '\n', (0, a.jsxs)(n.p, { children: ["In dit bestand worden alle tokens die in het theme van deze organisatie bestaan vanuit verschillende plekken bij elkaar gezet, als custom properties. Nu kunnen ze in de CSS van deze organisatie worden gebruikt, op pagina's waar de ", (0, a.jsx)(n.code, { children: 'organisatie-theme' }), ' classname op de body staat. Er is ook een output setting waar de variabelen op ', (0, a.jsx)(n.code, { children: ':root' }), ' worden geplaatst, voor als de HTML niet makkelijk aanpasbaar is.'] }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.a, { href: 'https://github.com/amzn/style-dictionary/tree/main/examples/advanced/referencing_aliasing', children: 'Referencing/aliasing' }), ' is de feature in Style Dictionary die zorgt dat tokens als variabele kunnen worden ingezet, zoals we in het vorige voorbeeld deden met tokens uit een andere organisatie. In de NL Design System configuratie worden alle tokenbestanden meegenomen (met ', (0, a.jsx)(n.code, { children: '**/*' }), '). Ook worden de gebruikte verwijzingen opgenomen als verwijzingen naar CSS, wat extra handig is in het geval van updates.'] }), '\n', (0, a.jsx)(n.h3, { id: 'werken-met-design-tokens', children: 'Werken met design tokens' }), '\n', (0, a.jsx)(n.p, { children: 'Meer weten over werken met design tokens? In onderstaande video vertelt Yolijn meer over uitbreiden van bestaande design tokens met jouw designkeuzes.' }), '\n', (0, a.jsx)(r.Y, { videoId: '-guAi7Lvl6g' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
  97233: (e, n, t) => {
   t.d(n, { Y: () => o });
   var a = t(4814),
    i = t(46686),
    r = t(52676);
   const o = (e) => {
    let { videoId: n, className: t } = e;
    return (0, r.jsx)(i.Z, { src: `https://youtube.com/watch?v=${n}`, className: (0, a.Z)('video-player', t), width: '100%', height: '100%', controls: !0, config: { youtube: { disablekb: 1 } } });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => o });
   var a = t(75271);
   const i = {},
    r = a.createContext(i);
   function o(e) {
    const n = a.useContext(r);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), a.createElement(r.Provider, { value: n }, e.children);
   }
  },
  46686: (e, n, t) => {
   t.d(n, { Z: () => z });
   var a = t(75271);
   const i = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
    r = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
    o = /\.(m3u8)($|\?)/i,
    s = /\.(mpd)($|\?)/i,
    l = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
    d = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
    c = /vimeo\.com\/(?!progressive_redirect).+/,
    m = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
    u = /open\.spotify\.com\/(\w+)\/(\w+)/i,
    h = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
    k = /tiktok\.com\/(?:@[^/]+\/video\/)?(\d+)(?:\/([\w-]+))?/,
    g = (e, n) => {
     if (Array.isArray(e)) {
      for (const t of e) {
       if ('string' == typeof t && g(t, n)) return !0;
       if (g(t.src, n)) return !0;
      }
      return !1;
     }
     return n(e);
    },
    p = { html: (e) => g(e, (e) => i.test(e) || r.test(e)), hls: (e) => g(e, (e) => o.test(e)), dash: (e) => g(e, (e) => s.test(e)), mux: (e) => l.test(e), youtube: (e) => d.test(e), vimeo: (e) => c.test(e) && !r.test(e) && !o.test(e), wistia: (e) => m.test(e), spotify: (e) => u.test(e), twitch: (e) => h.test(e), tiktok: (e) => k.test(e) };
   var v = a.forwardRef((e, n) => {
    const t = i.test(`${e.src}`) ? 'audio' : 'video';
    return a.createElement(t, { ...e, ref: n }, e.children);
   });
   var b = [
    { key: 'hls', name: 'hls.js', canPlay: p.hls, canEnablePIP: () => !0, player: (0, a.lazy)(() => Promise.all([t.e(29177), t.e(53184)]).then(t.bind(t, 99823))) },
    { key: 'dash', name: 'dash.js', canPlay: p.dash, canEnablePIP: () => !0, player: (0, a.lazy)(() => t.e(78443).then(t.bind(t, 67177))) },
    { key: 'mux', name: 'Mux', canPlay: p.mux, canEnablePIP: () => !0, player: (0, a.lazy)(() => Promise.all([t.e(29177), t.e(64258)]).then(t.bind(t, 74486))) },
    { key: 'youtube', name: 'YouTube', canPlay: p.youtube, player: (0, a.lazy)(() => t.e(64439).then(t.bind(t, 21489))) },
    { key: 'vimeo', name: 'Vimeo', canPlay: p.vimeo, player: (0, a.lazy)(() => t.e(73743).then(t.bind(t, 20667))) },
    { key: 'wistia', name: 'Wistia', canPlay: p.wistia, canEnablePIP: () => !0, player: (0, a.lazy)(() => t.e(88055).then(t.bind(t, 51820))) },
    { key: 'spotify', name: 'Spotify', canPlay: p.spotify, canEnablePIP: () => !1, player: (0, a.lazy)(() => t.e(41954).then(t.bind(t, 37949))) },
    { key: 'twitch', name: 'Twitch', canPlay: p.twitch, canEnablePIP: () => !1, player: (0, a.lazy)(() => t.e(86216).then(t.bind(t, 1997))) },
    { key: 'tiktok', name: 'TikTok', canPlay: p.tiktok, canEnablePIP: () => !1, player: (0, a.lazy)(() => t.e(34491).then(t.bind(t, 51102))) },
    { key: 'html', name: 'html', canPlay: p.html, canEnablePIP: () => !0, player: v },
   ];
   const y = { width: '320px', height: '180px', volume: 1, playbackRate: 1, previewTabIndex: 0, previewAriaLabel: '', oEmbedUrl: 'https://noembed.com/embed?url={url}' },
    w = a.forwardRef((e, n) => {
     const { playing: t, pip: i } = e,
      r = e.activePlayer,
      o = (0, a.useRef)(null),
      s = (0, a.useRef)(!0);
     (0, a.useEffect)(() => {
      var n, a;
      o.current && (o.current.paused && !0 === t && o.current.play(), o.current.paused || !1 !== t || o.current.pause(), (o.current.playbackRate = null != (n = e.playbackRate) ? n : 1), (o.current.volume = null != (a = e.volume) ? a : 1));
     }),
      (0, a.useEffect)(() => {
       var e, n, t, a, r;
       if (o.current && globalThis.document) {
        if (i && !document.pictureInPictureElement)
         try {
          null == (n = (e = o.current).requestPictureInPicture) || n.call(e);
         } catch (s) {}
        if (!i && document.pictureInPictureElement)
         try {
          null == (a = (t = o.current).exitPictureInPicture) || a.call(t), null == (r = document.exitPictureInPicture) || r.call(document);
         } catch (s) {}
       }
      }, [i]);
     if (!r) return null;
     const l = {};
     for (const a in e) a.startsWith('on') && (l[a] = e[a]);
     return a.createElement(
      r,
      {
       ...l,
       style: e.style,
       className: e.className,
       slot: e.slot,
       ref: (0, a.useCallback)(
        (e) => {
         (o.current = e), 'function' == typeof n ? n(e) : null !== n && (n.current = e);
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
   w.displayName = 'Player';
   var f = w;
   const j = (0, a.lazy)(() => t.e(87664).then(t.bind(t, 79240))),
    x = [],
    P = ({ children: e }) => e;
   var z = ((e, n) => {
    const t = a.forwardRef((t, i) => {
     const r = { ...y, ...t },
      { src: o, slot: s, className: l, style: d, width: c, height: m, fallback: u, wrapper: h } = r,
      [k, g] = (0, a.useState)(!!r.light);
     (0, a.useEffect)(() => {
      r.light ? g(!0) : g(!1);
     }, [r.light]);
     const p = (e) => {
       var n;
       g(!1), null == (n = r.onClickPreview) || n.call(r, e);
      },
      v = null == h ? P : h,
      b = !1 === u ? P : a.Suspense;
     return a.createElement(
      v,
      { slot: s, className: l, style: { width: c, height: m, ...d } },
      a.createElement(
       b,
       { fallback: u },
       k
        ? ((e) => {
           if (!e) return null;
           const { light: n, playIcon: t, previewTabIndex: i, oEmbedUrl: o, previewAriaLabel: s } = r;
           return a.createElement(j, { src: e, light: n, playIcon: t, previewTabIndex: i, previewAriaLabel: s, oEmbedUrl: o, onClickPreview: p });
          })(o)
        : ((t) => {
           var o, d;
           const c = ((t) => {
            for (const n of [...x, ...e]) if (t && n.canPlay(t)) return n;
            return n || null;
           })(t);
           if (!c) return null;
           const { style: m, width: u, height: h, wrapper: k } = r,
            g = null == (o = r.config) ? void 0 : o[c.key];
           return a.createElement(f, { ...r, ref: i, activePlayer: null != (d = c.player) ? d : c, slot: k ? void 0 : s, className: k ? void 0 : l, style: k ? { display: 'block', width: '100%', height: '100%' } : { display: 'block', width: u, height: h, ...m }, config: g });
          })(o),
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
   })(b, b[b.length - 1]);
  },
 },
]);
