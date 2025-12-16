/*! For license information please see 751bfb55.a466b0b8.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [91876],
 {
  803: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => g, frontMatter: () => s, metadata: () => a, toc: () => c });
   const a = JSON.parse('{"id":"handboek/developer/thema-maken","title":"Thema maken \xb7 Developer \xb7 Handboek","description":"NL Design System thema maken","source":"@site/docs/handboek/developer/03-thema-maken.mdx","sourceDirName":"handboek/developer","slug":"/handboek/developer/thema-maken","permalink":"/handboek/developer/thema-maken","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/03-thema-maken.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Thema maken \xb7 Developer \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Thema maken","pagination_label":"Thema maken","description":"NL Design System thema maken"},"sidebar":"handboek","previous":{"title":"Architectuur","permalink":"/handboek/developer/architectuur"},"next":{"title":"Component kiezen","permalink":"/handboek/developer/samenwerken-aan-componenten"}}');
   var o = t(86070),
    i = t(85248),
    r = t(99060);
   const s = { title: 'Thema maken \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thema maken', pagination_label: 'Thema maken', description: 'NL Design System thema maken' },
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
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'nl-design-system-thema-maken', children: 'NL Design System thema maken' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Zoals beschreven in ', (0, o.jsx)(n.a, { href: '/handboek/developer/aan-de-slag/#ontwikkel-een-thema-voor-jouw-organisatie', children: 'Ontwikkel een thema voor jouw organisatie' }), ": thema's zijn technisch JSON-bestanden waarin design tokens zijn gedefinieerd. Met tooling maken we ze beschikbaar als custom properties in CSS."] }), '\n', (0, o.jsx)(n.h2, { id: 'design-tokens-vastleggen', children: 'Design tokens vastleggen' }), '\n', (0, o.jsx)(n.p, { children: 'Design tokens kunnen allerlei ontwerpkeuzes bevatten: kleuren, lettergroottes, afstanden en meer. Om een thema te maken vanuit een bestaande website en/of huisstijl maken we vaak een inventarisatie, met als einddoel \xe9\xe9n of meer JSON-bestanden.' }), '\n', (0, o.jsx)(n.h3, { id: 'algemeen', children: 'Algemeen' }), '\n', (0, o.jsxs)(n.p, { children: ['Meestal begint een inventarisatie bij de kleuren. Bij een bestaande site kan dat bijvoorbeeld door individuele kleuren met de developer tools te inspecteren. Met een tool als ', (0, o.jsx)(n.a, { href: 'https://www.projectwallace.com/', children: 'Project Wallace' }), ' kun je in \xe9\xe9n keer de kleuren (en meer) uit een pagina in een overzicht krijgen.'] }), '\n', (0, o.jsx)(n.p, { children: 'Dat hoeft niet altijd \xe9\xe9n op \xe9\xe9n. Soms valt dan op dat sommige kleuren wel erg dicht bij elkaar liggen, dan kan bijvoorbeeld de meest voorkomende gekozen worden en de rest afgerond worden, de afwijking is dan vast eerder een foutje dan een keuze.' }), '\n', (0, o.jsxs)(n.p, { children: ['Het kan ook zijn dat er duidelijk meerdere varianten zijn van \xe9\xe9n kleur, bijvoorbeeld drie tinten rood. Je kunt tokens noemen hoe je wilt, het is vaak handig om er iets van een systeem in aan te brengen. Soms kan dat uit een huisstijlgids worden overgenomen. Als er geen bestaand systeem is in de namen, kun je ook de kleurwaarde naar ', (0, o.jsx)(n.a, { href: 'https://hslpicker.com', children: 'HSL' }), ' converteren en dan de lightness gebruiken (de \u201cL\u201d uit \u201cHSL\u201d), zodat je bv met ', (0, o.jsx)(n.code, { children: 'rood-30' }), ', ', (0, o.jsx)(n.code, { children: 'rood-50' }), ' en ', (0, o.jsx)(n.code, { children: 'rood-70' }), '. Rond gerust af op hele getallen.'] }), '\n', (0, o.jsxs)(n.p, { children: ['De kleuren zetten we uiteindelijk in een JSON-bestand (in het ', (0, o.jsx)(n.a, { href: 'https://tr.designtokens.org/format/', children: 'Design Tokens Format' }), '):'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-json', metastring: 'title="colors.tokens.json"', children: '{\n  "organisatie": {\n    "color": {\n      "red": {\n        "30": { "value": "#911808" },\n        "50": { "value": "#f2280d" },\n        "70": { "value": "#f77e6e" }\n      }\n    }\n  }\n}\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Dat bestand kan bijvoorbeeld zo in de filestructuur staan:' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-txt', children: '\u251c\u2500 src\n  \u251c\u2500 brand\n    \u251c\u2500 organisatie\n      \u251c\u2500 colors.tokens.json\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Binnen NL Design System gebruiken we ook design tokens voor andere designkeuzes, waaronder:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'typografie (lettertypes, groottes en gewichten)' }), '\n', (0, o.jsx)(n.li, { children: 'spacing' }), '\n', (0, o.jsx)(n.li, { children: 'focus styles' }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'componenten-en-variabelen', children: 'Componenten en variabelen' }), '\n', (0, o.jsxs)(n.p, { children: ['Als de algemene tokens zijn gemaakt, kan er ook per component een bestand met tokens worden toegevoegd, waarin ook naar de andere beschikbare tokens kan worden verwezen, zelfs in andere organisaties. In het volgende voorbeeld wordt bijvoorbeeld in de tokens voor de ', (0, o.jsx)(n.code, { children: 'link' }), ' component van ', (0, o.jsx)(n.code, { children: 'organisatie' }), ' verwezen naar een kleur rood van ', (0, o.jsx)(n.code, { children: 'andereOrganisatie' }), ', met de verwijzing in curly brackets:'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-json', metastring: 'title="link.tokens.json"', children: '{\n  "organisatie": {\n    "link": {\n      "color": { "value": "{andereOrganisatie.color.red.45}" }\n    }\n  }\n}\n' }) }), '\n', (0, o.jsx)(n.h3, { id: 'meer-over-design-tokens-vastleggen', children: 'Meer over design tokens vastleggen' }), '\n', (0, o.jsx)(r.L, { id: 'jSvjnU7oY5Y', title: 'Meer over design tokens vastleggen' }), '\n', (0, o.jsx)(n.h2, { id: 'design-tokens-inzetten', children: 'Design tokens inzetten' }), '\n', (0, o.jsxs)(n.p, { children: ['Zoals genoemd kunnen deze JSON-bestanden in allerlei toepassingen worden gebruikt. Bij NL Design System zorgt ', (0, o.jsx)(n.a, { href: 'https://styledictionary.com', children: 'Style Dictionary' }), ' dat de tokens bruikbaar worden in CSS, door een ', (0, o.jsx)(n.code, { children: 'design-tokens.css' }), ' te genereren. Die output kan er bijvoorbeeld zo uit zien:'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', metastring: 'title="dist/design-tokens.css"', children: '/**\n  * Do not edit directly\n  * Generated at [\u2026]\n  */\n.organisatie-theme {\n  --organisatie-color-red-30: #911808;\n  --organisatie-color-red-50: #f2280d;\n  --organisatie-color-red-70: #f77e6e;\n}\n' }) }), '\n', (0, o.jsxs)(n.p, { children: ["In dit bestand worden alle tokens die in het theme van deze organisatie bestaan vanuit verschillende plekken bij elkaar gezet, als custom properties. Nu kunnen ze in de CSS van deze organisatie worden gebruikt, op pagina's waar de ", (0, o.jsx)(n.code, { children: 'organisatie-theme' }), ' classname op de body staat. Er is ook een output setting waar de variabelen op ', (0, o.jsx)(n.code, { children: ':root' }), ' worden geplaatst, voor als de HTML niet makkelijk aanpasbaar is.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: 'https://github.com/amzn/style-dictionary/tree/main/examples/advanced/referencing_aliasing', children: 'Referencing/aliasing' }), ' is de feature in Style Dictionary die zorgt dat tokens als variabele kunnen worden ingezet, zoals we in het vorige voorbeeld deden met tokens uit een andere organisatie. In de NL Design System configuratie worden alle tokenbestanden meegenomen (met ', (0, o.jsx)(n.code, { children: '**/*' }), '). Ook worden de gebruikte verwijzingen opgenomen als verwijzingen naar CSS, wat extra handig is in het geval van updates.'] }), '\n', (0, o.jsx)(n.h3, { id: 'werken-met-design-tokens', children: 'Werken met design tokens' }), '\n', (0, o.jsx)(n.p, { children: 'Meer weten over werken met design tokens? In onderstaande video vertelt Yolijn meer over uitbreiden van bestaande design tokens met jouw designkeuzes.' }), '\n', (0, o.jsx)(r.L, { id: '-guAi7Lvl6g', title: 'Werken met design tokens' })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => r, x: () => s });
   var a = t(30758);
   const o = {},
    i = a.createContext(o);
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), a.createElement(i.Provider, { value: n }, e.children);
   }
  },
  87423: (e, n, t) => {
   t.d(n, { A: () => r });
   var a = t(30758),
    o = function () {
     return (
      (o =
       Object.assign ||
       function (e) {
        for (var n, t = 1, a = arguments.length; t < a; t++) for (var o in (n = arguments[t])) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        return e;
       }),
      o.apply(this, arguments)
     );
    },
    i = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
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
     v = new URLSearchParams(o(o(o(o({}, e.muted ? { mute: '1' } : {}), p ? { autoplay: '1' } : {}), e.enableJsApi ? { enablejsapi: '1' } : {}), e.playlist ? { list: m } : {}));
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
      ? (function (e, n, t, o) {
         void 0 === o && (o = 'maxresdefault');
         var r = (0, a.useState)(''),
          s = r[0],
          l = r[1];
         return (
          (0, a.useEffect)(
           function () {
            var a = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/').concat(o, '.').concat(t),
             r = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/hqdefault.').concat(t),
             s = i[o],
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
     L = e.playerClass || 'lty-playbtn',
     E = e.wrapperClass || 'yt-lite',
     O = e.onIframeAdded || function () {},
     I = e.rel ? 'prefetch' : 'preload',
     T = e.containerElement || 'article',
     M = e.style || {};
    return (
     a.useEffect(
      function () {
       d && O();
      },
      [d],
     ),
     a.createElement(
      a.Fragment,
      null,
      a.createElement('link', { rel: I, href: z, as: 'image' }),
      a.createElement(a.Fragment, null, r && a.createElement(a.Fragment, null, a.createElement('link', { rel: 'preconnect', href: b }), a.createElement('link', { rel: 'preconnect', href: 'https://www.google.com' }), D && a.createElement(a.Fragment, null, a.createElement('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), a.createElement('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })))),
      a.createElement(
       T,
       {
        onPointerOver: function () {
         r || s(!0);
        },
        onClick: function () {
         d || c(!0);
        },
        className: ''.concat(E, ' ').concat(d ? S : ''),
        'data-title': h,
        style: o(o({ backgroundImage: 'url('.concat(z, ')') }, { '--aspect-ratio': ''.concat((N / C) * 100, '%') }), M),
       },
       a.createElement('button', { type: 'button', className: L, 'aria-label': ''.concat(k, ' ').concat(h) }),
       d && a.createElement('iframe', { ref: n, className: _, title: h, width: '560', height: '315', frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: j }),
      ),
     )
    );
   });
  },
  99060: (e, n, t) => {
   t.d(n, { L: () => i });
   var a = t(87423),
    o = t(86070);
   const i = ({ id: e, title: n, ...t }) => (0, o.jsx)(a.A, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: n, poster: 'maxresdefault', ...t });
  },
 },
]);
