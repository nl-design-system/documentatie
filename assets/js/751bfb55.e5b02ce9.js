'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [91876],
 {
  803(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => h, frontMatter: () => r, metadata: () => a, toc: () => c }));
   const a = JSON.parse('{"id":"handboek/developer/thema-maken","title":"Thema maken","description":"NL Design System thema maken","source":"@site/docs/handboek/developer/03-thema-maken.mdx","sourceDirName":"handboek/developer","slug":"/handboek/developer/thema-maken","permalink":"/handboek/developer/thema-maken","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/03-thema-maken.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Thema maken","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Thema maken","pagination_label":"Thema maken","description":"NL Design System thema maken"},"sidebar":"handboek","previous":{"title":"Architectuur","permalink":"/handboek/developer/architectuur"},"next":{"title":"Component inzetten","permalink":"/handboek/developer/component-inzetten"}}');
   var i = t(86070),
    s = t(18439),
    o = t(75397);
   const r = { title: 'Thema maken', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thema maken', pagination_label: 'Thema maken', description: 'NL Design System thema maken' },
    l = 'NL Design System thema maken',
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
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'nl-design-system-thema-maken', children: 'NL Design System thema maken' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Zoals beschreven in ', (0, i.jsx)(n.a, { href: '/handboek/developer/aan-de-slag/#ontwikkel-een-thema-voor-jouw-organisatie', children: 'Ontwikkel een thema voor jouw organisatie' }), ": thema's zijn technisch JSON-bestanden waarin design tokens zijn gedefinieerd. Met tooling maken we ze beschikbaar als custom properties in CSS."] }), '\n', (0, i.jsx)(n.h2, { id: 'design-tokens-vastleggen', children: 'Design tokens vastleggen' }), '\n', (0, i.jsx)(n.p, { children: 'Design tokens kunnen allerlei ontwerpkeuzes bevatten: kleuren, lettergroottes, afstanden en meer. Om een thema te maken vanuit een bestaande website en/of huisstijl maken we vaak een inventarisatie, met als einddoel \xe9\xe9n of meer JSON-bestanden.' }), '\n', (0, i.jsx)(n.h3, { id: 'algemeen', children: 'Algemeen' }), '\n', (0, i.jsxs)(n.p, { children: ['Meestal begint een inventarisatie bij de kleuren. Bij een bestaande site kan dat bijvoorbeeld door individuele kleuren met de developer tools te inspecteren. Met een tool als ', (0, i.jsx)(n.a, { href: 'https://www.projectwallace.com/', children: 'Project Wallace' }), ' kun je in \xe9\xe9n keer de kleuren (en meer) uit een pagina in een overzicht krijgen.'] }), '\n', (0, i.jsx)(n.p, { children: 'Dat hoeft niet altijd \xe9\xe9n op \xe9\xe9n. Soms valt dan op dat sommige kleuren wel erg dicht bij elkaar liggen, dan kan bijvoorbeeld de meest voorkomende gekozen worden en de rest afgerond worden, de afwijking is dan vast eerder een foutje dan een keuze.' }), '\n', (0, i.jsxs)(n.p, { children: ['Het kan ook zijn dat er duidelijk meerdere varianten zijn van \xe9\xe9n kleur, bijvoorbeeld drie tinten rood. Je kunt tokens noemen hoe je wilt, het is vaak handig om er iets van een systeem in aan te brengen. Soms kan dat uit een huisstijlgids worden overgenomen. Als er geen bestaand systeem is in de namen, kun je ook de kleurwaarde naar ', (0, i.jsx)(n.a, { href: 'https://hslpicker.com', children: 'HSL' }), ' converteren en dan de lightness gebruiken (de \u201cL\u201d uit \u201cHSL\u201d), zodat je bv met ', (0, i.jsx)(n.code, { children: 'rood-30' }), ', ', (0, i.jsx)(n.code, { children: 'rood-50' }), ' en ', (0, i.jsx)(n.code, { children: 'rood-70' }), '. Rond gerust af op hele getallen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['De kleuren zetten we uiteindelijk in een JSON-bestand (in het ', (0, i.jsx)(n.a, { href: 'https://tr.designtokens.org/format/', children: 'Design Tokens Format' }), '):'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-json', metastring: 'title="colors.tokens.json"', children: '{\n  "organisatie": {\n    "color": {\n      "red": {\n        "30": { "value": "#911808" },\n        "50": { "value": "#f2280d" },\n        "70": { "value": "#f77e6e" }\n      }\n    }\n  }\n}\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Dat bestand kan bijvoorbeeld zo in de filestructuur staan:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-txt', children: '\u251c\u2500 src\n  \u251c\u2500 brand\n    \u251c\u2500 organisatie\n      \u251c\u2500 colors.tokens.json\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Binnen NL Design System gebruiken we ook design tokens voor andere designkeuzes, waaronder:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'typografie (lettertypes, groottes en gewichten)' }), '\n', (0, i.jsx)(n.li, { children: 'spacing' }), '\n', (0, i.jsx)(n.li, { children: 'focus styles' }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'componenten-en-variabelen', children: 'Componenten en variabelen' }), '\n', (0, i.jsxs)(n.p, { children: ['Als de algemene tokens zijn gemaakt, kan er ook per component een bestand met tokens worden toegevoegd, waarin ook naar de andere beschikbare tokens kan worden verwezen, zelfs in andere organisaties. In het volgende voorbeeld wordt bijvoorbeeld in de tokens voor de ', (0, i.jsx)(n.code, { children: 'link' }), ' component van ', (0, i.jsx)(n.code, { children: 'organisatie' }), ' verwezen naar een kleur rood van ', (0, i.jsx)(n.code, { children: 'andereOrganisatie' }), ', met de verwijzing in curly brackets:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-json', metastring: 'title="link.tokens.json"', children: '{\n  "organisatie": {\n    "link": {\n      "color": { "value": "{andereOrganisatie.color.red.45}" }\n    }\n  }\n}\n' }) }), '\n', (0, i.jsx)(n.h3, { id: 'meer-over-design-tokens-vastleggen', children: 'Meer over design tokens vastleggen' }), '\n', (0, i.jsx)(o.L, { id: 'jSvjnU7oY5Y', title: 'Meer over design tokens vastleggen' }), '\n', (0, i.jsx)(n.h2, { id: 'design-tokens-inzetten', children: 'Design tokens inzetten' }), '\n', (0, i.jsxs)(n.p, { children: ['Zoals genoemd kunnen deze JSON-bestanden in allerlei toepassingen worden gebruikt. Bij NL Design System zorgt ', (0, i.jsx)(n.a, { href: 'https://styledictionary.com', children: 'Style Dictionary' }), ' dat de tokens bruikbaar worden in CSS, door een ', (0, i.jsx)(n.code, { children: 'design-tokens.css' }), ' te genereren. Die output kan er bijvoorbeeld zo uit zien:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', metastring: 'title="dist/design-tokens.css"', children: '/**\n  * Do not edit directly\n  * Generated at [\u2026]\n  */\n.organisatie-theme {\n  --organisatie-color-red-30: #911808;\n  --organisatie-color-red-50: #f2280d;\n  --organisatie-color-red-70: #f77e6e;\n}\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ["In dit bestand worden alle tokens die in het theme van deze organisatie bestaan vanuit verschillende plekken bij elkaar gezet, als custom properties. Nu kunnen ze in de CSS van deze organisatie worden gebruikt, op pagina's waar de ", (0, i.jsx)(n.code, { children: 'organisatie-theme' }), ' classname op de body staat. Er is ook een output setting waar de variabelen op ', (0, i.jsx)(n.code, { children: ':root' }), ' worden geplaatst, voor als de HTML niet makkelijk aanpasbaar is.'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: 'https://github.com/amzn/style-dictionary/tree/main/examples/advanced/referencing_aliasing', children: 'Referencing/aliasing' }), ' is de feature in Style Dictionary die zorgt dat tokens als variabele kunnen worden ingezet, zoals we in het vorige voorbeeld deden met tokens uit een andere organisatie. In de NL Design System configuratie worden alle tokenbestanden meegenomen (met ', (0, i.jsx)(n.code, { children: '**/*' }), '). Ook worden de gebruikte verwijzingen opgenomen als verwijzingen naar CSS, wat extra handig is in het geval van updates.'] }), '\n', (0, i.jsx)(n.h3, { id: 'werken-met-design-tokens', children: 'Werken met design tokens' }), '\n', (0, i.jsx)(n.p, { children: 'Meer weten over werken met design tokens? In onderstaande video vertelt Yolijn meer over uitbreiden van bestaande design tokens met jouw designkeuzes.' }), '\n', (0, i.jsx)(o.L, { id: '-guAi7Lvl6g', title: 'Werken met design tokens' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => r });
   var a = t(30758);
   const i = {},
    s = a.createContext(i);
   function o(e) {
    const n = a.useContext(s);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), a.createElement(s.Provider, { value: n }, e.children));
   }
  },
  75397(e, n, t) {
   t.d(n, { L: () => l });
   var a = t(86070),
    i = t(30758);
   const s = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function o(e, n, t, a, i) {
    const s = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == i ? void 0 : i.name) || n, thumbnailUrl: [(null == i ? void 0 : i.thumbnailUrl) || t], embedUrl: (null == i ? void 0 : i.embedUrl) || `${a}/embed/${e}`, contentUrl: (null == i ? void 0 : i.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == i ? void 0 : i.description) && { description: i.description }), ...((null == i ? void 0 : i.uploadDate) && { uploadDate: i.uploadDate }), ...((null == i ? void 0 : i.duration) && { duration: i.duration }) };
    return JSON.stringify(s);
   }
   const r = i.forwardRef(function (e, n) {
     const [t, r] = i.useState(!1),
      [l, d] = i.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      m = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      h = e.title,
      u = e.poster || 'hqdefault',
      g = e.announce || 'Watch',
      p = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      k = i.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(p ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
          n.append(t, e);
         }),
        n
       );
      }, [e.muted, p, e.enableJsApi, e.playlist, c, e.params]),
      b = i.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      v = i.useMemo(() => (e.playlist ? `${b}/embed/videoseries?${k.toString()}` : `${b}/embed/${c}?${k.toString()}`), [e.playlist, b, c, k]),
      j = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
      w = e.webp ? 'webp' : 'jpg',
      f = e.webp ? 'vi_webp' : 'vi',
      x = j
       ? ((e, n, t, a = 'maxresdefault') => {
          const [o, r] = (0, i.useState)('');
          return (
           (0, i.useEffect)(() => {
            const i = `https://img.youtube.com/${n}/${e}/${a}.${t}`,
             o = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
             l = s[a],
             d = new Image();
            ((d.onload = () => {
             d.width < l ? r(o) : r(i);
            }),
             (d.onerror = () => r(o)),
             (d.src = i));
           }, [e, n, t, a]),
           o
          );
         })(e.id, f, w, u)
       : null,
      y = i.useMemo(() => e.thumbnail || x || `https://i.ytimg.com/${f}/${e.playlist ? m : c}/${u}.${w}`, [e.thumbnail, x, f, e.playlist, m, c, u, w]),
      z = e.activatedClass || 'lyt-activated',
      S = e.adNetwork || !1,
      $ = e.aspectHeight || 9,
      N = e.aspectWidth || 16,
      L = e.iframeClass || '',
      D = e.playerClass || 'lty-playbtn',
      _ = e.wrapperClass || 'yt-lite',
      C = i.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      T = e.rel ? 'prefetch' : 'preload',
      I = e.containerElement || 'article',
      M = !1 !== e.noscriptFallback;
     return (
      i.useEffect(() => {
       l && (C(), e.focusOnLoad && 'object' == typeof n && null != n && n.current && n.current.focus());
      }, [l, C, e.focusOnLoad, n]),
      (0, a.jsxs)(a.Fragment, {
       children: [
        !e.lazyLoad && (0, a.jsx)('link', { rel: T, href: y, as: 'image' }),
        (0, a.jsx)(a.Fragment, { children: t && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: b }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), S && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: o(e.id, h, y, b, e.seo) } }),
        M && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${h} on YouTube`, children: ['Watch "', h, '" on YouTube'] }) }),
        (0, a.jsxs)(I, {
         onPointerOver: () => {
          t || r(!0);
         },
         onClick: () => {
          l || d(!0);
         },
         className: `${_} ${l ? z : ''}`,
         'data-title': h,
         role: l ? void 0 : 'img',
         'aria-label': l ? void 0 : `${h} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${y})` }), '--aspect-ratio': ($ / N) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !l && (0, a.jsx)('img', { src: y, alt: `${h} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, a.jsx)('button', { type: 'button', className: D, 'aria-label': `${g} ${h}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: g }) }), l && (0, a.jsx)('iframe', { ref: n, className: L, title: h, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: v, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    l = ({ id: e, title: n, ...t }) => (0, a.jsx)(r, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: n, poster: 'maxresdefault', ...t });
  },
 },
]);
