/*! For license information please see 38070d01.9e0017f8.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [57576],
 {
  5547: (e, n, t) => {
   t.d(n, { ZP: () => r });
   var a = t(52676),
    i = t(40139);
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, a.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
  86164: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => o, default: () => h, frontMatter: () => s, metadata: () => d, toc: () => u });
   var a = t(52676),
    i = t(40139),
    l = t(97233),
    r = t(5547);
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
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'de-juiste-taal-instellen', children: 'De juiste taal instellen' }), '\n', (0, a.jsx)(n.p, { children: 'Voor de toegankelijkheid van je content is het belangrijk dat de gebruikte taal goed is ingesteld. Dat geldt voor de hele pagina \xe9n stukken tekst in een andere taal.' }), '\n', (0, a.jsxs)(n.p, { children: ['Het instellen van de juiste taal is belangrijk omdat hulptechnologie\xebn, zoals ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' of vertaalhulpmiddelen, afhankelijk zijn van die informatie.'] }), '\n', (0, a.jsx)(n.p, { children: 'Als de taal niet goed is ingesteld:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'spreekt een screenreader woorden verkeerd uit;' }), '\n', (0, a.jsx)(n.li, { children: 'worden automatische vertalingen onduidelijk of fout;' }), '\n', (0, a.jsx)(n.li, { children: 'is de inhoud minder toegankelijk voor mensen die de taal niet vloeiend beheersen.' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Door de taal goed aan te geven, help je dus mensen die je content anders niet goed kunnen gebruiken of begrijpen.' }), '\n', (0, a.jsx)(n.h3, { id: 'voorbeeld-van-taalwisseling-met-een-screenreader', children: 'Voorbeeld van taalwisseling met een screenreader' }), '\n', (0, a.jsx)(n.p, { children: 'In deze video hoor je hoe de screenreader VoiceOver wisselt van stem en taal voor teksten waarvan de taal is ingesteld.' }), '\n', (0, a.jsx)(l.Y, { id: '2UAjJ_5nxqw', title: 'Voorbeeld van taalwisseling met een screenreader' }), '\n', (0, a.jsx)(n.h2, { id: 'taal-van-de-pagina', children: 'Taal van de pagina' }), '\n', (0, a.jsx)(n.p, { children: 'Elke webpagina heeft een hoofdtaal. Die moet overeenkomen met de taal waarin de tekst op die pagina is geschreven.' }), '\n', (0, a.jsx)(n.p, { children: 'In sommige CMS\u2019en kun je de paginataal zelf instellen \u2014 bijvoorbeeld via de pagina-instellingen of bij het aanmaken van een nieuwe pagina. In andere gevallen is die vooraf ingesteld of wordt automatisch bepaald.' }), '\n', (0, a.jsx)(n.h2, { id: 'een-stukje-tekst-in-een-andere-taal', children: 'Een stukje tekst in een andere taal' }), '\n', (0, a.jsx)(n.p, { children: 'Gebruik je in je tekst een woord of zin in een andere taal dan de rest van de pagina? Geef dan aan dat dit stukje tekst in een andere taal is geschreven. Bijvoorbeeld bij Engelse termen (call to action), Franse citaten of Duitstalige namen.' }), '\n', (0, a.jsx)(n.p, { children: 'Stel alleen een taalwissel in als het woord nog niet is ingeburgerd in de hoofdtaal. Voor woorden die wel onderdeel zijn geworden van de hoofdtaal (denk bijvoorbeeld aan \xfcberhaupt, enfin en management) hoef je geen taalwissel in te stellen.' }), '\n', (0, a.jsx)(n.p, { children: 'In sommige CMS\u2019en kun je dit instellen via een opmaakoptie of een taalkeuze bij een tekstblok.' }), '\n', (0, a.jsx)(n.h2, { id: 'als-je-het-niet-kunt-instellen', children: 'Als je het niet kunt instellen' }), '\n', (0, a.jsx)(n.p, { children: 'Kun je de paginataal of de taal van een tekstblok niet vinden in je CMS? Ga dan na of je CMS deze mogelijkheid biedt. Is dat niet zo, of kun je het niet zelf aanpassen? Dan kun je uitzoeken wie dat w\xe9l kan of dit aankaarten bij de partij die het CMS beheert of levert.' }), '\n', (0, a.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, a.jsx)(n.p, { children: 'Lees je pagina rustig door en let op of er stukken tekst zijn in een andere taal dan de rest. Controleer het volgende:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Is de juiste taal ingesteld voor de hele pagina?\nBekijk de pagina-instellingen in het CMS. Klopt de gekozen taal met de hoofdtaal van de inhoud?' }), '\n', (0, a.jsx)(n.li, { children: 'Staan er woorden of zinnen in een andere taal?\nBijvoorbeeld Engelse termen, Franse uitdrukkingen of citaten in een andere taal. Vraag jezelf bij elk geval af:\nIs dit als andere taal gemarkeerd in het CMS?' }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/3.1.1/', children: 'Succescriterium 3.1.1 Taal van de pagina' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/3.1.2/', children: 'Succescriterium 3.1.2 Taal van onderdelen' }) }), '\n'] }), '\n', (0, a.jsx)(r.ZP, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
  97233: (e, n, t) => {
   t.d(n, { Y: () => l });
   var a = t(84263),
    i = t(52676);
   const l = (e) => {
    let { id: n, title: t, ...l } = e;
    return (0, i.jsx)(a.Z, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: n, title: t, poster: 'maxresdefault', ...l });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => r });
   var a = t(75271);
   const i = {},
    l = a.createContext(i);
   function r(e) {
    const n = a.useContext(l);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), a.createElement(l.Provider, { value: n }, e.children);
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
    l = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   var r = a.forwardRef(function (e, n) {
    var t = a.useState(!1),
     r = t[0],
     s = t[1],
     o = a.useState(e.alwaysLoadIframe || !1),
     d = o[0],
     c = o[1],
     u = encodeURIComponent(e.id),
     p = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     h = e.title,
     m = e.poster || 'hqdefault',
     g = e.announce || 'Watch',
     k = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     j = new URLSearchParams(i(i(i(i({}, e.muted ? { mute: '1' } : {}), k ? { autoplay: '1' } : {}), e.enableJsApi ? { enablejsapi: '1' } : {}), e.playlist ? { list: u } : {}));
    e.params &&
     new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach(function (e, n) {
      j.append(n, e);
     });
    var f = e.noCookie;
    f = e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com';
    var v = e.playlist ? ''.concat(f, '/embed/videoseries?').concat(j.toString()) : ''.concat(f, '/embed/').concat(u, '?').concat(j.toString()),
     b = !e.thumbnail && !e.playlist && 'maxresdefault' === m,
     w = e.webp ? 'webp' : 'jpg',
     x = e.webp ? 'vi_webp' : 'vi',
     y = b
      ? (function (e, n, t, i) {
         void 0 === i && (i = 'maxresdefault');
         var r = (0, a.useState)(''),
          s = r[0],
          o = r[1];
         return (
          (0, a.useEffect)(
           function () {
            var a = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/').concat(i, '.').concat(t),
             r = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/hqdefault.').concat(t),
             s = l[i],
             d = new Image();
            (d.onload = function () {
             d.width < s ? o(r) : o(a);
            }),
             (d.onerror = function () {
              return o(r);
             }),
             (d.src = a);
           },
           [e],
          ),
          s
         );
        })(e.id, x, w, m)
      : null,
     z =
      e.thumbnail ||
      y ||
      'https://i.ytimg.com/'
       .concat(x, '/')
       .concat(e.playlist ? p : u, '/')
       .concat(m, '.')
       .concat(w),
     C = e.activatedClass || 'lyt-activated',
     E = e.adNetwork || !1,
     S = e.aspectHeight || 9,
     _ = e.aspectWidth || 16,
     D = e.iframeClass || '',
     I = e.playerClass || 'lty-playbtn',
     M = e.wrapperClass || 'yt-lite',
     T = e.onIframeAdded || function () {},
     G = e.rel ? 'prefetch' : 'preload',
     A = e.containerElement || 'article',
     F = e.style || {};
    return (
     a.useEffect(
      function () {
       d && T();
      },
      [d],
     ),
     a.createElement(
      a.Fragment,
      null,
      a.createElement('link', { rel: G, href: z, as: 'image' }),
      a.createElement(a.Fragment, null, r && a.createElement(a.Fragment, null, a.createElement('link', { rel: 'preconnect', href: f }), a.createElement('link', { rel: 'preconnect', href: 'https://www.google.com' }), E && a.createElement(a.Fragment, null, a.createElement('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), a.createElement('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })))),
      a.createElement(
       A,
       {
        onPointerOver: function () {
         r || s(!0);
        },
        onClick: function () {
         d || c(!0);
        },
        className: ''.concat(M, ' ').concat(d ? C : ''),
        'data-title': h,
        style: i(i({ backgroundImage: 'url('.concat(z, ')') }, { '--aspect-ratio': ''.concat((S / _) * 100, '%') }), F),
       },
       a.createElement('button', { type: 'button', className: I, 'aria-label': ''.concat(g, ' ').concat(h) }),
       d && a.createElement('iframe', { ref: n, className: D, title: h, width: '560', height: '315', frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: v }),
      ),
     )
    );
   });
  },
 },
]);
