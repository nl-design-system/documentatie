/*! For license information please see 751bfb55.7abfed5a.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [67064],
 {
  30484: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => s, default: () => g, frontMatter: () => r, metadata: () => l, toc: () => c });
   var a = t(52676),
    i = t(40139),
    o = t(97233);
   const r = { title: 'Thema maken \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thema maken', pagination_label: 'Thema maken', description: 'NL Design System thema maken' },
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
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'nl-design-system-thema-maken', children: 'NL Design System thema maken' }), '\n', (0, a.jsxs)(n.p, { children: ['Zoals beschreven in ', (0, a.jsx)(n.a, { href: '/handboek/developer/aan-de-slag/#ontwikkel-een-thema-voor-jouw-organisatie', children: 'Ontwikkel een thema voor jouw organisatie' }), ": thema's zijn technisch JSON-bestanden waarin design tokens zijn gedefinieerd. Met tooling maken we ze beschikbaar als custom properties in CSS."] }), '\n', (0, a.jsx)(n.h2, { id: 'design-tokens-vastleggen', children: 'Design tokens vastleggen' }), '\n', (0, a.jsx)(n.p, { children: 'Design tokens kunnen allerlei ontwerpkeuzes bevatten: kleuren, lettergroottes, afstanden en meer. Om een thema te maken vanuit een bestaande website en/of huisstijl maken we vaak een inventarisatie, met als einddoel \xe9\xe9n of meer JSON-bestanden.' }), '\n', (0, a.jsx)(n.h3, { id: 'algemeen', children: 'Algemeen' }), '\n', (0, a.jsxs)(n.p, { children: ['Meestal begint een inventarisatie bij de kleuren. Bij een bestaande site kan dat bijvoorbeeld door individuele kleuren met de developer tools te inspecteren. Met een tool als ', (0, a.jsx)(n.a, { href: 'https://www.projectwallace.com/', children: 'Project Wallace' }), ' kun je in \xe9\xe9n keer de kleuren (en meer) uit een pagina in een overzicht krijgen.'] }), '\n', (0, a.jsx)(n.p, { children: 'Dat hoeft niet altijd \xe9\xe9n op \xe9\xe9n. Soms valt dan op dat sommige kleuren wel erg dicht bij elkaar liggen, dan kan bijvoorbeeld de meest voorkomende gekozen worden en de rest afgerond worden, de afwijking is dan vast eerder een foutje dan een keuze.' }), '\n', (0, a.jsxs)(n.p, { children: ['Het kan ook zijn dat er duidelijk meerdere varianten zijn van \xe9\xe9n kleur, bijvoorbeeld drie tinten rood. Je kunt tokens noemen hoe je wilt, het is vaak handig om er iets van een systeem in aan te brengen. Soms kan dat uit een huisstijlgids worden overgenomen. Als er geen bestaand systeem is in de namen, kun je ook de kleurwaarde naar ', (0, a.jsx)(n.a, { href: 'https://hslpicker.com', children: 'HSL' }), ' converteren en dan de lightness gebruiken (de \u201cL\u201d uit \u201cHSL\u201d), zodat je bv met ', (0, a.jsx)(n.code, { children: 'rood-30' }), ', ', (0, a.jsx)(n.code, { children: 'rood-50' }), ' en ', (0, a.jsx)(n.code, { children: 'rood-70' }), '. Rond gerust af op hele getallen.'] }), '\n', (0, a.jsxs)(n.p, { children: ['De kleuren zetten we uiteindelijk in een JSON-bestand (in het ', (0, a.jsx)(n.a, { href: 'https://tr.designtokens.org/format/', children: 'Design Tokens Format' }), '):'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-json', metastring: 'title="colors.tokens.json"', children: '{\n  "organisatie": {\n    "color": {\n      "red": {\n        "30": { "value": "#911808" },\n        "50": { "value": "#f2280d" },\n        "70": { "value": "#f77e6e" }\n      }\n    }\n  }\n}\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Dat bestand kan bijvoorbeeld zo in de filestructuur staan:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-txt', children: '\u251c\u2500 src\n  \u251c\u2500 brand\n    \u251c\u2500 organisatie\n      \u251c\u2500 colors.tokens.json\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Binnen NL Design System gebruiken we ook design tokens voor andere designkeuzes, waaronder:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'typografie (lettertypes, groottes en gewichten)' }), '\n', (0, a.jsx)(n.li, { children: 'spacing' }), '\n', (0, a.jsx)(n.li, { children: 'focus styles' }), '\n'] }), '\n', (0, a.jsx)(n.h3, { id: 'componenten-en-variabelen', children: 'Componenten en variabelen' }), '\n', (0, a.jsxs)(n.p, { children: ['Als de algemene tokens zijn gemaakt, kan er ook per component een bestand met tokens worden toegevoegd, waarin ook naar de andere beschikbare tokens kan worden verwezen, zelfs in andere organisaties. In het volgende voorbeeld wordt bijvoorbeeld in de tokens voor de ', (0, a.jsx)(n.code, { children: 'link' }), ' component van ', (0, a.jsx)(n.code, { children: 'organisatie' }), ' verwezen naar een kleur rood van ', (0, a.jsx)(n.code, { children: 'andereOrganisatie' }), ', met de verwijzing in curly brackets:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-json', metastring: 'title="link.tokens.json"', children: '{\n  "organisatie": {\n    "link": {\n      "color": { "value": "{andereOrganisatie.color.red.45}" }\n    }\n  }\n}\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'meer-over-design-tokens-vastleggen', children: 'Meer over design tokens vastleggen' }), '\n', (0, a.jsx)(o.Y, { id: 'jSvjnU7oY5Y', title: 'Meer over design tokens vastleggen' }), '\n', (0, a.jsx)(n.h2, { id: 'design-tokens-inzetten', children: 'Design tokens inzetten' }), '\n', (0, a.jsxs)(n.p, { children: ['Zoals genoemd kunnen deze JSON-bestanden in allerlei toepassingen worden gebruikt. Bij NL Design System zorgt ', (0, a.jsx)(n.a, { href: 'https://amzn.github.io/style-dictionary', children: 'Style Dictionary' }), ' dat de tokens bruikbaar worden in CSS, door een ', (0, a.jsx)(n.code, { children: 'design-tokens.css' }), ' te genereren. Die output kan er bijvoorbeeld zo uit zien:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', metastring: 'title="dist/design-tokens.css"', children: '/**\n  * Do not edit directly\n  * Generated at [\u2026]\n  */\n.organisatie-theme {\n  --organisatie-color-red-30: #911808;\n  --organisatie-color-red-50: #f2280d;\n  --organisatie-color-red-70: #f77e6e;\n}\n' }) }), '\n', (0, a.jsxs)(n.p, { children: ["In dit bestand worden alle tokens die in het theme van deze organisatie bestaan vanuit verschillende plekken bij elkaar gezet, als custom properties. Nu kunnen ze in de CSS van deze organisatie worden gebruikt, op pagina's waar de ", (0, a.jsx)(n.code, { children: 'organisatie-theme' }), ' classname op de body staat. Er is ook een output setting waar de variabelen op ', (0, a.jsx)(n.code, { children: ':root' }), ' worden geplaatst, voor als de HTML niet makkelijk aanpasbaar is.'] }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.a, { href: 'https://github.com/amzn/style-dictionary/tree/main/examples/advanced/referencing_aliasing', children: 'Referencing/aliasing' }), ' is de feature in Style Dictionary die zorgt dat tokens als variabele kunnen worden ingezet, zoals we in het vorige voorbeeld deden met tokens uit een andere organisatie. In de NL Design System configuratie worden alle tokenbestanden meegenomen (met ', (0, a.jsx)(n.code, { children: '**/*' }), '). Ook worden de gebruikte verwijzingen opgenomen als verwijzingen naar CSS, wat extra handig is in het geval van updates.'] }), '\n', (0, a.jsx)(n.h3, { id: 'werken-met-design-tokens', children: 'Werken met design tokens' }), '\n', (0, a.jsx)(n.p, { children: 'Meer weten over werken met design tokens? In onderstaande video vertelt Yolijn meer over uitbreiden van bestaande design tokens met jouw designkeuzes.' }), '\n', (0, a.jsx)(o.Y, { id: '-guAi7Lvl6g', title: 'Werken met design tokens' })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
  97233: (e, n, t) => {
   t.d(n, { Y: () => o });
   var a = t(84263),
    i = t(52676);
   const o = (e) => {
    let { id: n, title: t, ...o } = e;
    return (0, i.jsx)(a.Z, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: n, title: t, poster: 'maxresdefault', ...o });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => r });
   var a = t(75271);
   const i = {},
    o = a.createContext(i);
   function r(e) {
    const n = a.useContext(o);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), a.createElement(o.Provider, { value: n }, e.children);
   }
  },
  84263: (e, n, t) => {
   t.d(n, { Z: () => r });
   var a = t(75271),
    i = function () {
     return (
      (i =
       Object.assign ||
       function (e) {
        for (var n, t = 1, a = arguments.length; t < a; t++) for (var i in (n = arguments[t])) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        return e;
       }),
      i.apply(this, arguments)
     );
    },
    o = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   var r = a.forwardRef(function (e, n) {
    var t = a.useState(!1),
     r = t[0],
     s = t[1],
     l = a.useState(e.alwaysLoadIframe || !1),
     d = l[0],
     c = l[1],
     m = encodeURIComponent(e.id),
     g = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     h = e.title,
     u = e.poster || 'hqdefault',
     k = e.announce || 'Watch',
     p = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     v = new URLSearchParams(i(i(i(i({}, e.muted ? { mute: '1' } : {}), p ? { autoplay: '1' } : {}), e.enableJsApi ? { enablejsapi: '1' } : {}), e.playlist ? { list: m } : {}));
    e.params &&
     new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach(function (e, n) {
      v.append(n, e);
     });
    var b = e.noCookie;
    b = e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com';
    var j = e.playlist ? ''.concat(b, '/embed/videoseries?').concat(v.toString()) : ''.concat(b, '/embed/').concat(m, '?').concat(v.toString()),
     f = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
     w = e.webp ? 'webp' : 'jpg',
     x = e.webp ? 'vi_webp' : 'vi',
     y = f
      ? (function (e, n, t, i) {
         void 0 === i && (i = 'maxresdefault');
         var r = (0, a.useState)(''),
          s = r[0],
          l = r[1];
         return (
          (0, a.useEffect)(
           function () {
            var a = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/').concat(i, '.').concat(t),
             r = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/hqdefault.').concat(t),
             s = o[i],
             d = new Image();
            (d.onload = function () {
             d.width < s ? l(r) : l(a);
            }),
             (d.onerror = function () {
              return l(r);
             }),
             (d.src = a);
           },
           [e],
          ),
          s
         );
        })(e.id, x, w, u)
      : null,
     z =
      e.thumbnail ||
      y ||
      'https://i.ytimg.com/'
       .concat(x, '/')
       .concat(e.playlist ? g : m, '/')
       .concat(u, '.')
       .concat(w),
     S = e.activatedClass || 'lyt-activated',
     D = e.adNetwork || !1,
     N = e.aspectHeight || 9,
     C = e.aspectWidth || 16,
     _ = e.iframeClass || '',
     E = e.playerClass || 'lty-playbtn',
     L = e.wrapperClass || 'yt-lite',
     I = e.onIframeAdded || function () {},
     O = e.rel ? 'prefetch' : 'preload',
     M = e.containerElement || 'article',
     T = e.style || {};
    return (
     a.useEffect(
      function () {
       d && I();
      },
      [d],
     ),
     a.createElement(
      a.Fragment,
      null,
      a.createElement('link', { rel: O, href: z, as: 'image' }),
      a.createElement(a.Fragment, null, r && a.createElement(a.Fragment, null, a.createElement('link', { rel: 'preconnect', href: b }), a.createElement('link', { rel: 'preconnect', href: 'https://www.google.com' }), D && a.createElement(a.Fragment, null, a.createElement('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), a.createElement('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })))),
      a.createElement(
       M,
       {
        onPointerOver: function () {
         r || s(!0);
        },
        onClick: function () {
         d || c(!0);
        },
        className: ''.concat(L, ' ').concat(d ? S : ''),
        'data-title': h,
        style: i(i({ backgroundImage: 'url('.concat(z, ')') }, { '--aspect-ratio': ''.concat((N / C) * 100, '%') }), T),
       },
       a.createElement('button', { type: 'button', className: E, 'aria-label': ''.concat(k, ' ').concat(h) }),
       d && a.createElement('iframe', { ref: n, className: _, title: h, width: '560', height: '315', frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: j }),
      ),
     )
    );
   });
  },
 },
]);
